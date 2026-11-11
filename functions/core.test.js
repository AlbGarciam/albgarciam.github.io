import test from 'node:test';
import assert from 'node:assert/strict';
import { solveChallenge } from 'altcha-lib';
import { deriveKey } from 'altcha-lib/algorithms/pbkdf2';
import { buildMail, createContactHandler } from './core.js';

const ORIGIN = 'https://albgarciam.github.io';
const FIELDS = { name: 'Ada Lovelace', email: 'ada@example.test', topic: 'Project', message: 'Hello there, this is a test.' };
// Cheap work factor so the suite stays fast.
const FAST = { cost: 10, counterMin: 5, counterMax: 30 };

function setup(overrides = {}) {
  const sent = [];
  let clock = Date.now();
  const handle = createContactHandler({
    hmacSecret: 'test-secret',
    allowedOrigins: [ORIGIN],
    sendMail: async (mail) => sent.push(mail),
    now: () => clock,
    ...overrides,
    config: { ...FAST, ...overrides.config },
  });
  const call = (method, body, extra = {}) => handle({ method, origin: ORIGIN, ip: '1.1.1.1', body, ...extra });
  const solved = async () => {
    const { body: challenge } = await call('GET');
    const solution = await solveChallenge({ challenge, deriveKey });
    return { challenge, solution };
  };
  return { call, solved, sent, advance: (ms) => (clock += ms) };
}

test('a solved challenge delivers the message once', async () => {
  const { call, solved, sent } = setup();
  const altcha = await solved();
  const first = await call('POST', { ...FIELDS, altcha });
  assert.equal(first.status, 200);
  assert.deepEqual(sent, [FIELDS]);

  const replay = await call('POST', { ...FIELDS, altcha });
  assert.equal(replay.status, 400);
  assert.equal(replay.body.error, 'captcha_reused');
  assert.equal(sent.length, 1);
});

test('missing, forged or expired proof of work is rejected', async () => {
  const { call, solved, sent, advance } = setup();
  assert.equal((await call('POST', FIELDS)).body.error, 'captcha_missing');

  const forged = await solved();
  forged.solution.counter += 1;
  assert.equal((await call('POST', { ...FIELDS, altcha: forged })).body.error, 'captcha_failed');

  const tampered = await solved();
  tampered.challenge.parameters.cost = 1;
  assert.equal((await call('POST', { ...FIELDS, altcha: tampered })).body.error, 'captcha_failed');

  const stale = await solved();
  advance(6 * 60_000);
  assert.equal((await call('POST', { ...FIELDS, altcha: stale })).body.error, 'captcha_failed');
  assert.equal(sent.length, 0);
});

test('unknown origins are refused', async () => {
  const { call } = setup();
  assert.equal((await call('GET', undefined, { origin: 'https://evil.example' })).status, 403);
  assert.equal((await call('POST', FIELDS, { origin: undefined })).status, 403);
});

test('fields are validated and the honeypot swallows bots', async () => {
  const { call, solved, sent } = setup();
  const bad = await call('POST', { ...FIELDS, email: 'nope', message: 'hi', altcha: await solved() });
  assert.equal(bad.status, 422);
  assert.deepEqual(Object.keys(bad.body.fields).sort(), ['email', 'message']);

  const bot = await call('POST', { ...FIELDS, website: 'http://spam.example', altcha: await solved() });
  assert.equal(bot.status, 200);
  assert.equal(sent.length, 0);
});

test('per-IP send budget is enforced and resets after the window', async () => {
  const { call, solved, sent, advance } = setup({ config: { sendsPerIp: { max: 2, windowMs: 1000 } } });
  for (let i = 0; i < 2; i += 1) assert.equal((await call('POST', { ...FIELDS, altcha: await solved() })).status, 200);
  assert.equal((await call('POST', { ...FIELDS, altcha: await solved() })).status, 429);
  const other = await call('POST', { ...FIELDS, altcha: await solved() }, { ip: '2.2.2.2' });
  assert.equal(other.status, 200);
  advance(1001);
  assert.equal((await call('POST', { ...FIELDS, altcha: await solved() })).status, 200);
  assert.equal(sent.length, 4);
});

test('header-bound fields cannot smuggle extra mail headers', async () => {
  const { call, solved, sent } = setup();
  await call('POST', { ...FIELDS, name: 'Ada\r\nBcc: victim@example.test', altcha: await solved() });
  const mail = buildMail(sent[0], { from: 'me@example.test', to: 'inbox@example.test' });
  assert.ok(!/[\r\n]/.test(mail.subject));
  assert.ok(!/[\r\n]/.test(mail.replyTo.name));
});

test('delivery failures surface as 502', async () => {
  const { call, solved } = setup({ sendMail: async () => { throw new Error('smtp down'); } });
  assert.equal((await call('POST', { ...FIELDS, altcha: await solved() })).status, 502);
});
