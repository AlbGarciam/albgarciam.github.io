# albgarciam.github.io

Personal portfolio of Alberto García-Muñoz. React + Vite, deployed to GitHub Pages.
Fonts, scripts and illustrations are all bundled into the build: the page loads
nothing from third parties. The only outside call is the contact form posting to
its own Firebase function.

## Develop

```bash
npm install
npm run dev:api   # local stand-in for the contact function (prints the mail)
npm run dev       # http://localhost:5173
```

`.env.local` must contain `VITE_CONTACT_ENDPOINT=http://localhost:8787` (see `.env.example`).

- Copy and data: `src/content.js`
- Terms and conditions (`/terms/`): `src/resources/terms.json`

## Contact function

`functions/` holds a single HTTPS function, `contact` (region `europe-west1`):

- `GET` issues a signed [ALTCHA](https://altcha.org) proof-of-work challenge (open source, self-hosted, no cookies).
- `POST` verifies the solved challenge, validates the fields and sends the mail over SMTP.

The destination address exists only as a server secret. Abuse protection:
proof of work, single-use challenges that expire after 5 minutes, per-IP and
global send limits, a honeypot field, an origin allow-list, and a single
instance cap (`maxInstances: 1`) so a flood cannot scale the bill.

### Deploy (once)

Requires a Firebase project on the Blaze plan.

```bash
npm install -g firebase-tools
firebase login
firebase use --add                                   # pick the project
firebase functions:secrets:set CONTACT_TO            # inbox that receives messages
firebase functions:secrets:set SMTP_USER             # e.g. the Gmail account that sends
firebase functions:secrets:set SMTP_PASS             # e.g. a Gmail app password
firebase functions:secrets:set ALTCHA_HMAC_SECRET    # any long random string
(cd functions && npm install)
firebase deploy --only functions
```

Then add the function URL as the repository variable `CONTACT_ENDPOINT`
(Settings → Secrets and variables → Actions → Variables). Until it is set, the
site shows a "form not connected" notice instead of the form.

Optional params: `SMTP_HOST` (default `smtp.gmail.com`) and `ALLOWED_ORIGINS`
(default `https://albgarciam.github.io`).

### Test

```bash
cd functions && npm test
```
