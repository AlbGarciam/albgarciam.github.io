import { useRef } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { education, expertise, journey, projects, toolbox, writing } from '../content.js';
import { ProjectArt } from './Art.jsx';
import { ChapterHead, EASE, FadeUp, Reveal } from './Text.jsx';

const Arrow = () => (
  <svg className="arrow" viewBox="0 0 24 24" aria-hidden>
    <path d="M6 18 18 6M8 6h10v10" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export function Expertise() {
  return (
    <section className="section" id="expertise">
      <ChapterHead index="01" label="Expertise" title="What I’m *good *at" />
      <ol className="rows">
        {expertise.map((item, i) => (
          <FadeUp as="li" className="row" key={item.title} delay={i * 0.06} data-cursor>
            <span className="row__index">0{i + 1}</span>
            <h3 className="row__title">{item.title}</h3>
            <div className="row__detail">
              <p>{item.body}</p>
              <ul className="tags">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </FadeUp>
        ))}
      </ol>
    </section>
  );
}

/** Short career teaser; the full timeline lives on /about/. */
export function Journey() {
  return (
    <section className="section" id="journey">
      <ChapterHead index="02" label="Journey" title="The road *so *far" />
      <div className="teaser">
        {[journey[0], journey[3], journey[4]].map((job, i) => (
          <FadeUp className="teaser__item" key={job.period + job.role} delay={i * 0.08}>
            <span className="teaser__period">{job.period}</span>
            <h3 className="teaser__company">{job.company}</h3>
            <p className="teaser__role">{job.role}</p>
          </FadeUp>
        ))}
      </div>
      <a className="link teaser__more" href="/about/">
        Full career and credentials →
      </a>
    </section>
  );
}

function Project({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // The art drifts inside its mask while the mask itself opens.
  const artY = useTransform(scrollYProgress, [0, 1], ['-9%', '9%']);
  // Observed on the article: a fully clipped frame never reports as visible.
  const frame = useRef(null);
  const seen = useInView(frame, { once: true, amount: 0.3 });

  return (
    <article className="project" ref={ref} data-flip={index % 2 === 1 || undefined}>
      <div className="project__slot" ref={frame}>
        <motion.div
          className="project__frame"
          initial={false}
          animate={{ clipPath: seen ? 'inset(0% 0% 0% 0% round 28px)' : 'inset(100% 0% 0% 0% round 28px)' }}
          transition={{ duration: 1.3, ease: EASE }}
        >
          <motion.div
            className="project__art"
            style={{ y: artY }}
            initial={false}
            animate={{ scale: seen ? 1.12 : 1.4 }}
            transition={{ duration: 1.7, ease: EASE }}
          >
            <ProjectArt id={project.id} />
          </motion.div>
        </motion.div>
      </div>

      <div className="project__text">
        <FadeUp className="project__meta">
          <span>0{index + 1}</span>
          <span>{project.platform}</span>
          <span>{project.period}</span>
        </FadeUp>
        <Reveal as="h3" className="project__name" text={project.name} />
        <Reveal className="project__body" text={project.body} stagger={0.014} delay={0.15} />
        <FadeUp delay={0.3}>
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {project.link && (
            <a className="pill" href={project.link.href} target="_blank" rel="noreferrer">
              {project.link.label}
              <Arrow />
            </a>
          )}
        </FadeUp>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section className="section tone-bone" id="work">
      <ChapterHead index="03" label="Selected work" title="Things I built *for *myself" />
      <div className="projects">
        {projects.map((project, i) => (
          <Project project={project} index={i} key={project.id} />
        ))}
      </div>
      <FadeUp className="work__more">
        <p>More code, experiments and half-finished ideas live on GitHub.</p>
        <a className="pill" href="https://github.com/AlbGarciam" target="_blank" rel="noreferrer">
          Follow on GitHub
          <Arrow />
        </a>
      </FadeUp>
    </section>
  );
}

export function Toolbox() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const left = useTransform(scrollYProgress, [0, 1], ['2%', '-32%']);
  const right = useTransform(scrollYProgress, [0, 1], ['-32%', '2%']);
  const words = [...toolbox.marquee, ...toolbox.marquee];

  return (
    <section className="section section--flush" id="toolbox">
      <div className="section__pad">
        <ChapterHead index="04" label="Toolbox" title="What I *reach *for" />
      </div>

      <div className="marquee" ref={ref} aria-hidden>
        <motion.div className="marquee__row" style={{ x: left }}>
          {words.map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </motion.div>
        <motion.div className="marquee__row marquee__row--outline" style={{ x: right }}>
          {words.map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </motion.div>
      </div>

      <div className="section__pad toolbox">
        {toolbox.groups.map((group, g) => (
          <FadeUp className="toolbox__group" key={group.label} delay={g * 0.08}>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export function Writing() {
  return (
    <section className="section" id="writing">
      <ChapterHead index="05" label="Writing" title="Sharing is how *we *evolve" />
      <ul className="posts">
        {writing.map((post, i) => (
          <FadeUp as="li" key={post.href} delay={i * 0.08}>
            <a className="post" href={post.href} target="_blank" rel="noreferrer">
              <span className="post__index">0{i + 1}</span>
              <span className="post__title">{post.title}</span>
              <span className="post__body">{post.body}</span>
              <span className="post__go">
                Medium <Arrow />
              </span>
            </a>
          </FadeUp>
        ))}
      </ul>
    </section>
  );
}
