import { useEffect, useRef, useState } from 'react';
import { solveChallenge } from 'altcha-lib';
import { deriveKey } from 'altcha-lib/algorithms/web/pbkdf2';
import { contactTopics, socials } from '../content.js';
import { ChapterHead, FadeUp, Reveal } from './Text.jsx';

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;
// Challenges live for five minutes on the server; refresh ours a little earlier.
const PROOF_MAX_AGE = 4 * 60_000;

const MESSAGES = {
  rate_limited: 'That’s a lot of messages in a short time. Please try again later.',
  delivery_failed: 'The message could not be delivered. Please try again in a moment.',
  invalid: 'Some fields need another look.',
  network: 'Could not reach the server. Check your connection and try again.',
  default: 'Something went wrong on my side. Please try again.',
};

/** Fetches a proof-of-work challenge and solves it in the background. */
async function fetchProof() {
  const response = await fetch(ENDPOINT);
  if (!response.ok) throw new Error(response.status === 429 ? 'rate_limited' : 'default');
  const challenge = await response.json();
  const solution = await solveChallenge({ challenge, deriveKey });
  if (!solution) throw new Error('default');
  return { payload: { challenge, solution }, at: Date.now() };
}

export function Contact() {
  const [status, setStatus] = useState('idle'); // idle | working | sent | error
  const [note, setNote] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const proof = useRef(null);

  // Start the proof of work as soon as the visitor shows intent, so by the
  // time they press send it is usually done.
  const warmUp = () => {
    if (!ENDPOINT || proof.current) return;
    proof.current = fetchProof();
    proof.current.catch(() => {
      proof.current = null;
    });
  };

  useEffect(() => () => { proof.current = null; }, []);

  const getProof = async () => {
    let current = proof.current && (await proof.current.catch(() => null));
    if (!current || Date.now() - current.at > PROOF_MAX_AGE) current = await fetchProof();
    proof.current = null; // single use
    return current.payload;
  };

  const submit = async (event) => {
    event.preventDefault();
    if (status === 'working') return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('working');
    setFieldErrors({});
    setNote('Checking you’re human — no puzzles, your browser does the work…');

    try {
      const altcha = await getProof();
      setNote('Sending…');
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, altcha }),
      }).catch(() => {
        throw new Error('network');
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        if (result.fields) setFieldErrors(result.fields);
        throw new Error(result.error ?? 'default');
      }
      form.reset();
      setStatus('sent');
      setNote('Message sent. I’ll get back to you soon.');
    } catch (error) {
      const key = error instanceof TypeError ? 'network' : error.message;
      setStatus('error');
      setNote(MESSAGES[key] ?? MESSAGES.default);
    }
  };

  const error = (name) =>
    fieldErrors[name] && (
      <span className="field__error" id={`${name}-error`}>
        {fieldErrors[name]}
      </span>
    );

  return (
    <section className="section tone-flare contact" id="contact">
      <ChapterHead index="06" label="Contact" title="Let’s build something *worth *keeping" />

      <div className="contact__grid">
        <div className="contact__aside">
          <Reveal
            text="Have a role, a project or a hard problem in mind? Write to me here — it lands straight in my inbox."
            stagger={0.014}
          />
          <FadeUp as="ul" className="contact__socials" delay={0.2}>
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </FadeUp>
        </div>

        {ENDPOINT ? (
          <FadeUp as="form" className="form" onSubmit={submit} onFocus={warmUp} noValidate={false}>
            <label className="field">
              <span>Your name</span>
              <input name="name" autoComplete="name" required minLength={2} maxLength={80} aria-describedby="name-error" />
              {error('name')}
            </label>
            <label className="field">
              <span>Your email</span>
              <input name="email" type="email" autoComplete="email" required maxLength={120} aria-describedby="email-error" />
              {error('email')}
            </label>

            <fieldset className="field field--wide chips">
              <legend>What is it about?</legend>
              {contactTopics.map((topic, i) => (
                <label key={topic} className="chip">
                  <input type="radio" name="topic" value={topic} defaultChecked={i === 0} />
                  <span>{topic}</span>
                </label>
              ))}
              {error('topic')}
            </fieldset>

            <label className="field field--wide">
              <span>Message</span>
              <textarea name="message" rows={5} required minLength={10} maxLength={4000} aria-describedby="message-error" />
              {error('message')}
            </label>

            {/* Honeypot: hidden from people, irresistible to form-filling bots. */}
            <label className="form__trap" aria-hidden="true">
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>

            <div className="form__foot field--wide">
              <button className="pill pill--solid" type="submit" disabled={status === 'working'}>
                {status === 'working' ? 'Working…' : 'Send message'}
              </button>
              <p className="form__note" role="status" data-status={status}>
                {note}
              </p>
              <p className="form__legal">
                Protected by a self-hosted proof-of-work check (ALTCHA): no cookies, no tracking.{' '}
                <a className="link" href="/terms/">
                  Terms and conditions
                </a>
              </p>
            </div>
          </FadeUp>
        ) : (
          <FadeUp className="form form--off">
            <p>The contact form isn’t connected yet. Until it is, LinkedIn is the fastest way to reach me.</p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
