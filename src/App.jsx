import { MotionConfig } from 'motion/react';
import { Cursor, Footer, Nav } from './components/Chrome.jsx';
import { Contact } from './components/Contact.jsx';
import { Hero, Manifesto } from './components/Hero.jsx';
import { Expertise, Journey, Toolbox, Work, Writing } from './components/Sections.jsx';
import { useSmoothScroll } from './scroll.js';

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
      <Footer />
    </MotionConfig>
  );
}
