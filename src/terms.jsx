import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig, motion } from 'motion/react';
import '@fontsource-variable/bricolage-grotesque/standard.css';
import '@fontsource-variable/jetbrains-mono/index.css';
import '@fontsource/instrument-serif/400-italic.css';
import './styles.css';
import { EASE, Reveal } from './components/Text.jsx';
import terms from './resources/terms.json';

// The legal text is rendered exactly as stored in resources/terms.json.
// Short lines without a full stop are the section titles of that text.
const isHeading = (text) => text.length < 60 && !text.trim().endsWith('.');

function Terms() {
  return (
    <MotionConfig reducedMotion="user">
      <header className="nav">
        <a className="nav__brand" href="/">
          alberto<span>.gm</span>
        </a>
        <a className="nav__toggle" href="/">
          <span className="nav__dot" />
          Back
        </a>
      </header>
      <main className="section terms">
        <Reveal as="h1" className="chapter__title" text="Terms *and conditions" />
        <motion.div
          className="terms__body"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
        >
          <p className="terms__header">{terms.header}</p>
          {terms.paragraphs.map((text, i) => (isHeading(text) ? <h2 key={i}>{text}</h2> : <p key={i}>{text}</p>))}
        </motion.div>
      </main>
    </MotionConfig>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Terms />
  </StrictMode>,
);
