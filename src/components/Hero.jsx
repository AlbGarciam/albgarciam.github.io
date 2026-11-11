import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { manifesto, person } from '../content.js';
import { EASE, FadeUp, Reveal, ScrollWords } from './Text.jsx';

function Letters({ text, delay }) {
  return (
    <span className="hero__line" aria-label={text}>
      {[...text].map((char, i) => (
        <span className="hero__char" key={i} aria-hidden>
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, ease: EASE, delay: delay + i * 0.035 }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/**
 * Opening scene. A ball drops in and settles; scrolling inflates it until it
 * fills the screen and becomes the background of the next section.
 */
export function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const ballScale = useTransform(scrollYProgress, [0, 0.85], [1, reduced ? 1 : 24]);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '-18%']);
  const fade = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__sticky">
        <motion.div className="hero__meta" style={{ opacity: fade }}>
          <span> </span>
          <span>{person.location}</span>
        </motion.div>

        <motion.div className="hero__stage" style={{ y: titleY }}>
          <motion.div className="hero__ball" style={{ scale: ballScale }} aria-hidden>
            <div className="hero__ball-body" />
          </motion.div>
          <h1 className="hero__title">
            <Letters text="Alberto" delay={0.2} />
            <Letters text="García-Muñoz" delay={0.35} />
          </h1>
        </motion.div>

        <motion.div className="hero__foot" style={{ opacity: fade }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.5 }}
          >
            <span className="accent">{person.role}.</span> {person.tagline}
          </motion.p>
          <motion.span
            className="hero__scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Scroll
            <i />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}

/** The statement the whole site hangs from, read at scrolling speed. */
export function Manifesto() {
  return (
    <section className="manifesto tone-bone">
      <ScrollWords as="h2" className="manifesto__statement" text={manifesto.statement} />
      <div className="manifesto__grid">
        <Reveal className="manifesto__body" text={manifesto.body} stagger={0.012} />
        <ul className="manifesto__facts">
          {manifesto.facts.map((fact, i) => (
            <FadeUp as="li" key={fact.label} delay={i * 0.12}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
