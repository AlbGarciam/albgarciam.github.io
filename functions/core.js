// Framework-agnostic contact endpoint logic.
//
//   GET  → issues a signed ALTCHA proof-of-work challenge
//   POST → verifies the solved challenge, validates the fields and sends the mail
//
// The destination address never leaves the server: the browser only ever sees
// this endpoint. Abuse is limited by four independent layers:
//   1. proof-of-work (every message costs the sender CPU time)
//   2. single-use, short-lived challenges (no replaying a solved one)
//   3. per-IP and global send budgets
//   4. a honeypot field that silently swallows naive bots

import { createChallenge, verifySolution, randomInt, CappedMap } from 'altcha-lib';
import { deriveKey } from 'altcha-lib/algorithms/pbkdf2';

export const TOPICS = ['Job opportunity', 'Project', 'Talk or article', 'Just saying hi'];

const ALGORITHM = 'PBKDF2/SHA-256';
const EMAIL_RE = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]{2,}$/;

const DEFAULTS = {
  challengeTtlMs: 5 * 60_000,
  // Work factor: PBKDF2 iterations per attempt × attempts needed.
  cost: 2_000,
  counterMin: 1_500,
  counterMax: 4_000,
  challengesPerIp: { max: 20, windowMs: 10 * 60_000 },
  sendsPerIp: { max: 3, windowMs: 60 * 60_000 },
  sendsGlobal: { max: 40, windowMs: 24 * 60 * 60_000 },
};

/** Fixed-window counter kept in memory (the function runs as a single instance). */
function createLimiter(now) {
  const hits = new CappedMap({ maxSize: 5_000 });
  return {
    peek(key, { max, windowMs }) {
      const entry = hits.get(key);
      return !entry || now() - entry.start >= windowMs || entry.count < max;
    },
    hit(key, { windowMs }) {
      const entry = hits.get(key);
      if (!entry || now() - entry.start >= windowMs) hits.set(key, { start: now(), count: 1 });
      else entry.count += 1;
    },
  };
}

const oneLine = (value) => String(value ?? '').replace(/[\r\n\t]+/g, ' ').trim();

export function validate(body) {
  const name = oneLine(body?.name);
  const email = oneLine(body?.email).toLowerCase();
  const topic = oneLine(body?.topic);
  const message = String(body?.message ?? '').replace(/\r\n/g, '\n').trim();
  const errors = {};
  if (name.length < 2 || name.length > 80) errors.name = 'Tell me your name (2–80 characters).';
  if (email.length > 120 || !EMAIL_RE.test(email)) errors.email = 'That email does not look right.';
  if (!TOPICS.includes(topic)) errors.topic = 'Pick one of the topics.';
  if (message.length < 10 || message.length > 4000) errors.message = 'Write between 10 and 4000 characters.';
  return { ok: Object.keys(errors).length === 0, errors, value: { name, email, topic, message } };
}

/**
 * @param {object} deps
 * @param {string} deps.hmacSecret        secret used to sign challenges
 * @param {(mail: {name,email,topic,message}) => Promise<void>} deps.sendMail
 * @param {string[]} deps.allowedOrigins  origins allowed to call the endpoint
 */
export function createContactHandler({ hmacSecret, sendMail, allowedOrigins, now = Date.now, config = {} }) {
  if (!hmacSecret) throw new Error('hmacSecret is required');
  const cfg = { ...DEFAULTS, ...config };
  const limiter = createLimiter(now);
  const usedChallenges = new CappedMap({ maxSize: 10_000 });

  const reply = (status, body, origin) => ({
    status,
    headers: {
      ...(origin ? { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' } : {}),
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '3600',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
    body,
  });

  return async function handle({ method, origin, ip = 'unknown', body }) {
    const allowed = origin && allowedOrigins.includes(origin) ? origin : null;
    // Browsers always send Origin on cross-site calls; anything else is not our form.
    if (!allowed) return reply(403, { error: 'forbidden' }, null);

    if (method === 'OPTIONS') return reply(204, null, allowed);

    if (method === 'GET') {
      if (!limiter.peek(`c:${ip}`, cfg.challengesPerIp)) return reply(429, { error: 'rate_limited' }, allowed);
      limiter.hit(`c:${ip}`, cfg.challengesPerIp);
      const challenge = await createChallenge({
        algorithm: ALGORITHM,
        cost: cfg.cost,
        counter: randomInt(cfg.counterMin, cfg.counterMax),
        deriveKey,
        expiresAt: Math.floor((now() + cfg.challengeTtlMs) / 1000),
        hmacSignatureSecret: hmacSecret,
      });
      return reply(200, challenge, allowed);
    }

    if (method !== 'POST') return reply(405, { error: 'method_not_allowed' }, allowed);

    // Honeypot: real people never see this field. Pretend everything went fine.
    if (oneLine(body?.website)) return reply(200, { ok: true }, allowed);

    const { ok, errors, value } = validate(body);
    if (!ok) return reply(422, { error: 'invalid', fields: errors }, allowed);

    if (!limiter.peek(`s:${ip}`, cfg.sendsPerIp) || !limiter.peek('s:*', cfg.sendsGlobal)) {
      return reply(429, { error: 'rate_limited' }, allowed);
    }

    const payload = body?.altcha;
    const signature = payload?.challenge?.signature;
    if (!payload?.challenge?.parameters || !payload?.solution || typeof signature !== 'string') {
      return reply(400, { error: 'captcha_missing' }, allowed);
    }
    if (usedChallenges.has(signature)) return reply(400, { error: 'captcha_reused' }, allowed);

    let verified = false;
    try {
      const result = await verifySolution({
        challenge: payload.challenge,
        solution: payload.solution,
        deriveKey,
        hmacSignatureSecret: hmacSecret,
      });
      // Checked against our own clock as well, so expiry never depends on the library's.
      const expiresAt = Number(payload.challenge.parameters.expiresAt);
      verified = result.verified === true && Number.isFinite(expiresAt) && expiresAt * 1000 > now();
    } catch {
      verified = false;
    }
    if (!verified) return reply(400, { error: 'captcha_failed' }, allowed);

    usedChallenges.set(signature, true);
    limiter.hit(`s:${ip}`, cfg.sendsPerIp);
    limiter.hit('s:*', cfg.sendsGlobal);

    try {
      await sendMail(value);
    } catch (error) {
      console.error('contact: mail delivery failed', error?.message ?? error);
      return reply(502, { error: 'delivery_failed' }, allowed);
    }
    return reply(200, { ok: true }, allowed);
  };
}

/** Plain-text mail. User input only ever lands in the body, subject and Reply-To. */
export function buildMail({ name, email, topic, message }, { from, to }) {
  return {
    from: { name: 'Portfolio contact form', address: from },
    to,
    replyTo: { name, address: email },
    subject: `[Portfolio] ${topic} — ${name}`,
    text: `${message}\n\n—\n${name} <${email}>\nTopic: ${topic}\nSent from the contact form on albgarciam.github.io`,
  };
}
