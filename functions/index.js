import { onRequest } from 'firebase-functions/v2/https';
import { defineSecret, defineString } from 'firebase-functions/params';
import nodemailer from 'nodemailer';
import { buildMail, createContactHandler } from './core.js';

// Secrets live in Google Secret Manager — set them with `firebase functions:secrets:set NAME`.
const CONTACT_TO = defineSecret('CONTACT_TO'); // inbox that receives the messages
const SMTP_USER = defineSecret('SMTP_USER'); // e.g. the Gmail account used to send
const SMTP_PASS = defineSecret('SMTP_PASS'); // e.g. a Gmail app password
const ALTCHA_HMAC_SECRET = defineSecret('ALTCHA_HMAC_SECRET'); // any long random string

const SMTP_HOST = defineString('SMTP_HOST', { default: 'smtp.gmail.com' });
const ALLOWED_ORIGINS = defineString('ALLOWED_ORIGINS', { default: 'https://albgarciam.github.io' });

let handler;
function getHandler() {
  if (handler) return handler;
  const transport = nodemailer.createTransport({
    host: SMTP_HOST.value(),
    port: 465,
    secure: true,
    auth: { user: SMTP_USER.value(), pass: SMTP_PASS.value() },
  });
  handler = createContactHandler({
    hmacSecret: ALTCHA_HMAC_SECRET.value(),
    allowedOrigins: ALLOWED_ORIGINS.value().split(',').map((origin) => origin.trim()).filter(Boolean),
    sendMail: (mail) => transport.sendMail(buildMail(mail, { from: SMTP_USER.value(), to: CONTACT_TO.value() })),
  });
  return handler;
}

// Google's front end appends the real client address as the last X-Forwarded-For
// entry; earlier entries are whatever the caller typed and cannot be trusted.
function clientIp(req) {
  const forwarded = String(req.headers['x-forwarded-for'] ?? '').split(',').map((part) => part.trim()).filter(Boolean);
  return forwarded.at(-1) ?? req.ip ?? 'unknown';
}

export const contact = onRequest(
  {
    region: 'europe-west1',
    secrets: [CONTACT_TO, SMTP_USER, SMTP_PASS, ALTCHA_HMAC_SECRET],
    // One small instance: caps the bill under a flood and keeps the in-memory
    // rate limits and used-challenge list authoritative.
    maxInstances: 1,
    concurrency: 40,
    memory: '256MiB',
    timeoutSeconds: 20,
    invoker: 'public',
  },
  async (req, res) => {
    const { status, headers, body } = await getHandler()({
      method: req.method,
      origin: req.headers.origin,
      ip: clientIp(req),
      body: req.body,
    });
    res.set(headers).status(status);
    if (body === null) res.end();
    else res.json(body);
  },
);
