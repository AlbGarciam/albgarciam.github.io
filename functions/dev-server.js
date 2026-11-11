// Local stand-in for the deployed function: same handler, but the mail is
// printed to the terminal instead of being sent. Run with `npm run dev:api`.
import { createServer } from 'node:http';
import { buildMail, createContactHandler } from './core.js';

const PORT = Number(process.env.PORT ?? 8787);

const handle = createContactHandler({
  hmacSecret: 'local-development-only',
  allowedOrigins: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  sendMail: async (mail) => {
    console.log('\n--- mail that would be sent ---');
    console.log(buildMail(mail, { from: 'sender@example.test', to: 'inbox@example.test' }));
  },
});

createServer(async (req, res) => {
  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 64_000) break;
  }
  let body;
  try {
    body = raw ? JSON.parse(raw) : undefined;
  } catch {
    body = undefined;
  }
  const result = await handle({
    method: req.method,
    origin: req.headers.origin,
    ip: req.socket.remoteAddress,
    body,
  });
  res.writeHead(result.status, { ...result.headers, 'Content-Type': 'application/json' });
  res.end(result.body === null ? undefined : JSON.stringify(result.body));
}).listen(PORT, () => console.log(`contact dev endpoint on http://localhost:${PORT}`));
