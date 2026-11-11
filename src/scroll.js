import { useEffect } from 'react';
import Lenis from 'lenis';

let lenis = null;

/** Smooth, inertial scrolling. Skipped when the visitor prefers reduced motion. */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    lenis = new Lenis({ autoRaf: true, lerp: 0.11 });
    return () => {
      lenis.destroy();
      lenis = null;
    };
  }, []);
}

export function scrollToId(id) {
  const target = id === 'top' ? 0 : document.getElementById(id);
  if (target === null) return;
  if (lenis) lenis.scrollTo(target, { duration: 1.6 });
  else if (target === 0) window.scrollTo({ top: 0 });
  else target.scrollIntoView();
}

export function lockScroll(locked) {
  if (lenis) (locked ? lenis.stop() : lenis.start());
  document.documentElement.style.overflow = locked ? 'hidden' : '';
}
