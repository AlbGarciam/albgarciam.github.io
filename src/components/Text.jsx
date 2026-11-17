import { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// House easing: fast departure, long soft landing.
export const EASE = [0.16, 1, 0.3, 1];

const parse = (text) =>
  text.split(' ').map((word) => (word.startsWith('*') ? { text: word.slice(1), accent: true } : { text: word }));

const wordVariants = {
  hidden: { y: '115%', rotate: 3 },
  shown: { y: '0%', rotate: 0, transition: { duration: 0.95, ease: EASE } },
};

/** Words rise from behind a mask, one after another, when the block scrolls into view. */
export function Reveal({ text, as = 'p', className = '', delay = 0, stagger = 0.045 }) {
  const Tag = motion[as];
  return (
    <Tag
      className={`reveal ${className}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {parse(text).map((word, i) => (
        <Fragment key={i}>
          <span className="reveal__mask">
            <motion.span className={word.accent ? 'accent' : undefined} variants={wordVariants}>
              {word.text}
            </motion.span>
          </span>{' '}
        </Fragment>
      ))}
    </Tag>
  );
}

/** Fade + lift for blocks that are not headline type. */
export function FadeUp({ children, as = 'div', className, delay = 0, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function ScrollWord({ word, range, progress }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className={word.accent ? 'accent' : undefined}>
      {word.text}{' '}
    </motion.span>
  );
}

/** Each word lights up as the reader scrolls: the scroll position is the timeline. */
export function ScrollWords({ text, as: Tag = 'p', className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words = parse(text);
  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <ScrollWord
          key={i}
          word={word}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        />
      ))}
    </Tag>
  );
}

/** Numbered chapter opener: a rule draws itself, then the title rises. */
export function ChapterHead({ index, label, title }) {
  return (
    <header className="chapter">
      <motion.div
        className="chapter__rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE }}
      />
      <FadeUp className="chapter__meta">
        <span>{index}</span>
        <span>{label}</span>
      </FadeUp>
      <Reveal as="h2" className="chapter__title" text={title} />
    </header>
  );
}
