import { MotionConfig } from 'motion/react';
import { Cursor, Nav } from './components/Chrome.jsx';
import { Contact } from './components/Contact.jsx';
import { Hero, Manifesto } from './components/Hero.jsx';
import { Expertise, Journey, Toolbox, Work, Writing } from './components/Sections.jsx';
import { person, socials } from './content.js';
import { scrollToId, useSmoothScroll } from './scroll.js';

export default function App() {
  useSmoothScroll();

  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <Cursor />
      <main>
        <Hero />
        <Manifesto />
        <Expertise />
        <Journey />
        <Work />
        <Toolbox />
        <Writing />
        <Contact />
      </main>
      <footer className="footer">
        <p className="footer__name">{person.name}</p>
        <ul>
          {socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
          <li>
            <a className="link" href="/terms/">
              Terms and conditions
            </a>
          </li>
        </ul>
        <p className="footer__note">Built with React. No cookies, no trackers, nothing loaded from elsewhere.</p>
        <button className="link footer__top" onClick={() => scrollToId('top')}>
          Back to top ↑
        </button>
      </footer>
    </MotionConfig>
  );
}
