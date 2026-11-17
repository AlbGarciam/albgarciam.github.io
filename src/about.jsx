import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import '@fontsource-variable/bricolage-grotesque/standard.css';
import '@fontsource-variable/jetbrains-mono/index.css';
import '@fontsource/instrument-serif/400-italic.css';
import './styles.css';
import { Footer } from './components/Chrome.jsx';
import { Contact } from './components/Contact.jsx';
import { FadeUp, Reveal } from './components/Text.jsx';
import { education, journey, person } from './content.js';

function About() {
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
      <main className="section about">
        <Reveal as="h1" className="chapter__title" text="The road *so *far" />
        <p className="about__intro">
          {person.role}, based in {person.location}. {person.tagline}
        </p>

        <ol className="timeline">
          {journey.map((job, i) => (
            <FadeUp as="li" className="stop" key={job.period + job.role} data-current={i === 0} delay={0.04}>
              <span className="stop__period">{job.period}</span>
              <div>
                <h2 className="stop__company">{job.company}</h2>
                <p className="stop__role">{job.role}</p>
                <p className="stop__body">{job.body}</p>
              </div>
            </FadeUp>
          ))}
        </ol>

        <h2 className="about__sub">Credentials</h2>
        <ol className="timeline">
          {education.map((item) => (
            <FadeUp as="li" className="stop" key={item.title}>
              <span className="stop__period">{item.period}</span>
              <div>
                <h3 className="stop__company">{item.title}</h3>
                <p className="stop__role">{item.place}</p>
                {item.note && <p className="stop__note">{item.note}</p>}
              </div>
            </FadeUp>
          ))}
        </ol>
      </main>
      <Contact />
      <Footer />
    </MotionConfig>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <About />
  </StrictMode>,
);
