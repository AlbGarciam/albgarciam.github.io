import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring } from 'motion/react';
import { chapters } from '../content.js';
import { lockScroll, scrollToId } from '../scroll.js';
import { EASE } from './Text.jsx';

/** Fixed header, reading-progress bar and the full-screen chapter index. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => {
    lockScroll(open);
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (id) => (event) => {
    event.preventDefault();
    setOpen(false);
    // Wait a frame so the scroll lock is released before moving.
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <>
      <header className="nav">
        <motion.div className="nav__progress" style={{ scaleX: progress }} />
        <a className="nav__brand" href="#top" onClick={go('top')}>
          alberto<span>.gm</span>
        </a>
        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu">
          <span className="nav__dot" data-open={open} />
          {open ? 'Close' : 'Menu'}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu"
            className="menu"
            aria-label="Chapters"
            initial={{ clipPath: 'circle(0% at calc(100% - 3rem) 2rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 3rem) 2rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 3rem) 2rem)' }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <ol className="menu__list">
              {chapters.map((chapter, i) => (
                <li key={chapter.id} className="menu__item">
                  <motion.a
                    href={`#${chapter.id}`}
                    onClick={go(chapter.id)}
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.06 }}
                  >
                    <span className="menu__index">{chapter.index}</span>
                    {chapter.label}
                  </motion.a>
                </li>
              ))}
            </ol>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

/** A dot that trails the pointer and swells over anything interactive. Mouse only. */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    setEnabled(true);
    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setActive(Boolean(event.target.closest?.('a, button, label, [data-cursor]')));
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div className="cursor" style={{ x: sx, y: sy }} aria-hidden>
      <motion.div
        className="cursor__dot"
        animate={{ scale: active ? 3.4 : 1 }}
        transition={{ duration: 0.45, ease: EASE }}
      />
    </motion.div>
  );
}
