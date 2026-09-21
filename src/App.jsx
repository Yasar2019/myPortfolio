import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FaArrowDown,
  FaArrowRight,
  FaDocker,
  FaGithub,
  FaJava,
  FaJsSquare,
  FaLinkedin,
  FaMicrosoft,
  FaPython,
  FaReact,
} from "react-icons/fa";
import Contact from "./Components/Contact";
import animePortrait from "./images/anime-portrait.webp";
import { projects } from "./data/projects";
import { experiences } from "./data/experience";
import "./redesign.css";

const sections = ["home", "about", "projects", "stack", "experience", "contact"];
const stack = [
  { icon: FaJava, name: "Java", note: "Reliable applications", x: "7%", y: "22%" },
  { icon: FaPython, name: "Python", note: "AI + data", x: "68%", y: "10%" },
  { icon: FaJsSquare, name: "JavaScript", note: "Web systems", x: "76%", y: "64%" },
  { icon: FaReact, name: "React", note: "Interfaces", x: "15%", y: "68%" },
  { icon: FaDocker, name: "Docker", note: "Containers", x: "45%", y: "78%" },
  { icon: FaMicrosoft, name: "Azure", note: "Cloud services", x: "42%", y: "5%" },
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: 0.18 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 44 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

function CircuitBackdrop() {
  return (
    <div className="circuit-backdrop" aria-hidden="true">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <g className="circuit-lines">
          <path d="M0 168h186l54 54h194l68-68h226l56 56h416" />
          <path d="M0 634h220l80-80h206l72 72h278l52-52h292" />
          <path d="M194 0v120l62 62v146l-58 58v254l72 72v88" />
          <path d="M1004 0v182l-64 64v154l58 58v342" />
          <circle cx="434" cy="222" r="5" />
          <circle cx="578" cy="626" r="5" />
          <circle cx="940" cy="246" r="5" />
          <circle cx="270" cy="712" r="5" />
        </g>
      </svg>
      <div className="code-fragment code-a">const idea = await build();</div>
      <div className="code-fragment code-b">01 · DESIGN / DEVELOP / DEPLOY</div>
      <div className="code-fragment code-c">status: curious</div>
    </div>
  );
}

function PortraitScene() {
  return (
    <motion.div
      className="portrait-scene"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.15 }}
    >
      <div className="portrait-orbit orbit-a" />
      <div className="portrait-orbit orbit-b" />
      <div className="portrait-orbit orbit-c" />
      <div className="portrait-halo" />
      <motion.img
        src={animePortrait}
        alt="Anime portrait of Yasar Nazzarian"
        className="anime-portrait"
        animate={{ y: [0, -12, 0], rotate: [0, 0.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="portrait-card card-role"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>ROLE</span>
        Software Engineer
      </motion.div>
      <motion.div
        className="portrait-card card-location"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <span>BASED IN</span>
        Montréal, Canada
      </motion.div>
      <div className="portrait-status">
        <i /> Available for opportunities
      </div>
    </motion.div>
  );
}

function ProjectVisual({ index }) {
  if (index === 0) {
    return (
      <div className="project-visual visual-network" aria-hidden="true">
        <span className="network-line line-one" />
        <span className="network-line line-two" />
        <b className="node node-stm">STM</b>
        <b className="node node-api">API</b>
        <b className="node node-map">MAP</b>
        <i className="signal signal-one" />
        <i className="signal signal-two" />
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="project-visual visual-neural" aria-hidden="true">
        {[0, 1, 2, 3].map((column) => (
          <div className={`neural-column column-${column}`} key={column}>
            {Array.from({ length: column % 2 ? 4 : 3 }, (_, node) => (
              <i key={node} />
            ))}
          </div>
        ))}
        <svg viewBox="0 0 300 180">
          <path d="M36 40l78 8 68-14 76 34M36 90l78-42 68 46 76-26M36 140l78-42 68-4 76 28M114 48l68 92 76-18M114 98l68-64" />
        </svg>
      </div>
    );
  }
  return (
    <div className="project-visual visual-data" aria-hidden="true">
      <div className="data-cube cube-one">
        <span />
      </div>
      <div className="data-cube cube-two">
        <span />
      </div>
      <div className="data-cube cube-three">
        <span />
      </div>
      <div className="data-beam" />
      <b>≈</b>
    </div>
  );
}

ProjectVisual.propTypes = {
  index: PropTypes.number.isRequired,
};

function OfflineFooter() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const sky = useTransform(scrollYProgress, [0, 0.55, 1], ["#f2a56f", "#55408d", "#071221"]);
  const moonY = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const screenGlow = useTransform(scrollYProgress, [0.15, 0.65, 0.95], [1, 1, 0.08]);
  return (
    <motion.footer ref={ref} className="offline-footer" style={{ backgroundColor: sky }}>
      <motion.div className="moon" style={{ y: moonY }} aria-hidden="true">
        &lt;/&gt;
      </motion.div>
      <div className="stars" aria-hidden="true">
        {Array.from({ length: 22 }, (_, i) => (
          <i key={i} style={{ "--i": i }} />
        ))}
      </div>
      <div className="footer-copy">
        <p className="kicker">END OF TRANSMISSION · 2026</p>
        <h2>
          Let’s build something
          <br />
          <em>worth remembering.</em>
        </h2>
        <a href="mailto:yasar20111926@hotmail.com">
          Start a conversation <FaArrowRight />
        </a>
      </div>
      <div className="hill" aria-hidden="true">
        <div className="laptop">
          <div className="laptop-lid">
            <motion.div className="laptop-screen" style={{ opacity: screenGlow }}>
              <span>YN_OS</span>
              <b>ready to collaborate_</b>
            </motion.div>
          </div>
          <div className="laptop-base">
            <i />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Yasar Nazzarian</span>
        <div>
          <a href="https://github.com/Yasar2019" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yasarnazzarian-98" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </motion.footer>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });
  const characterY = useTransform(smoothProgress, [0, 0.22], [0, 100]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    const viewportTarget = window.scrollY + window.innerHeight * 0.45;
    let current = "home";
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element && element.offsetTop <= viewportTarget) current = id;
    });
    setActive(current);
  });

  useEffect(() => {
    const close = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <motion.div className="scroll-progress" style={{ scaleX: smoothProgress }} />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Yasar Nazzarian home">
          <span>Y</span>N
        </a>
        <nav id="main-navigation" className={menuOpen ? "open" : ""} aria-label="Main navigation">
          {sections.slice(1).map((id, index) => (
            <a
              className={active === id ? "active" : ""}
              href={`#${id}`}
              key={id}
              onClick={() => setMenuOpen(false)}
            >
              <span>0{index + 1}</span>
              {id === "stack" ? "Skills" : id}
            </a>
          ))}
        </nav>
        <div className="header-meta">
          <span>
            <i /> Open to work
          </span>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="scroll-page hero-page" id="home">
          <CircuitBackdrop />
          <div className="hero-layout shell">
            <Reveal className="hero-copy">
              <p className="kicker">
                <span>01</span> SOFTWARE ENGINEER · MONTRÉAL
              </p>
              <h1>
                I turn complex ideas into <em>clear digital systems.</em>
              </h1>
              <p className="hero-lead">
                Software engineering, AI, and cloud computing—designed with curiosity and built with
                purpose.
              </p>
              <div className="hero-actions">
                <a className="cta cta-primary" href="#projects">
                  Explore my work <FaArrowRight />
                </a>
                <a className="cta cta-secondary" href="#contact">
                  Let’s talk
                </a>
              </div>
              <div className="hero-proof">
                <span>AI + DATA</span>
                <span>CLOUD SYSTEMS</span>
                <span>FULL-STACK</span>
              </div>
            </Reveal>
            <motion.div style={{ y: characterY }}>
              <PortraitScene />
            </motion.div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>Scroll to explore</span>
            <FaArrowDown />
          </a>
        </section>

        <section className="scroll-page about-page" id="about">
          <div className="section-number" aria-hidden="true">
            02
          </div>
          <div className="shell about-layout">
            <Reveal className="section-intro">
              <p className="kicker">THE THINKING BEHIND THE WORK</p>
              <h2>
                Engineering starts with <em>understanding.</em>
              </h2>
            </Reveal>
            <Reveal className="about-story" delay={0.12}>
              <p className="story-large">
                I’m Yasar, a software engineer who enjoys turning messy, real-world problems into
                systems people can trust.
              </p>
              <p>
                My work lives where software, data, and people meet. I’ve built microservices,
                experimented with machine learning, supported public-sector platforms, and
                translated technical complexity into useful experiences.
              </p>
              <div className="principles">
                <div>
                  <b>01</b>
                  <span>Think in systems</span>
                  <p>Understand the whole before optimizing the parts.</p>
                </div>
                <div>
                  <b>02</b>
                  <span>Build for people</span>
                  <p>Clarity and reliability are features.</p>
                </div>
                <div>
                  <b>03</b>
                  <span>Stay curious</span>
                  <p>The best solution often starts with a better question.</p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="architecture-line" aria-hidden="true">
            <span>QUESTION</span>
            <i />
            <span>MODEL</span>
            <i />
            <span>BUILD</span>
            <i />
            <span>LEARN</span>
          </div>
        </section>

        <section className="scroll-page projects-page" id="projects">
          <div className="shell">
            <Reveal className="projects-heading">
              <div>
                <p className="kicker">03 · SELECTED PROJECTS</p>
                <h2>
                  Ideas made <em>tangible.</em>
                </h2>
              </div>
              <p>
                A selection of systems built across distributed computing, AI, and large-scale data.
              </p>
            </Reveal>
            <div className="project-deck">
              {projects.map((project, index) => (
                <Reveal className="project-panel" delay={index * 0.1} key={project.title}>
                  <div className="project-top">
                    <span>CASE 0{index + 1}</span>
                    <span>{["SYSTEMS", "AI", "DATA"][index]}</span>
                  </div>
                  <ProjectVisual index={index} />
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div>
                      {project.technologies.split(", ").map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="github-callout">
              <div>
                <FaGithub />
                <span>
                  <b>More experiments live on GitHub.</b>
                  <small>Source code, iterations, and things I’m learning.</small>
                </span>
              </div>
              <a href="https://github.com/Yasar2019" target="_blank" rel="noreferrer">
                Open GitHub <FaArrowRight />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="scroll-page stack-page" id="stack">
          <div className="stack-glow" aria-hidden="true" />
          <div className="shell stack-layout">
            <Reveal className="stack-copy">
              <p className="kicker">04 · TECHNICAL TOOLKIT</p>
              <h2>
                A flexible stack for <em>real problems.</em>
              </h2>
              <p>
                I choose technology for the system it needs to serve—not for the trend it happens to
                follow.
              </p>
              <div className="stack-signature">
                <span>CORE</span>
                <b>Code → Cloud → Intelligence</b>
              </div>
            </Reveal>
            <div className="skill-orbit" aria-label="Technical skills">
              <div className="orbit-ring ring-outer" aria-hidden="true" />
              <div className="orbit-ring ring-inner" aria-hidden="true" />
              <div className="orbit-core">
                <span>YN</span>
                <small>ENGINEERING</small>
              </div>
              {stack.map(({ icon: Icon, name, note, x, y }, index) => (
                <motion.div
                  className="skill-chip"
                  style={{ left: x, top: y }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.08, y: -5 }}
                  key={name}
                >
                  <Icon />
                  <span>
                    <b>{name}</b>
                    <small>{note}</small>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-page experience-page" id="experience">
          <div className="shell experience-layout">
            <Reveal className="experience-title">
              <p className="kicker">05 · EXPERIENCE</p>
              <h2>
                Built through <em>real work.</em>
              </h2>
              <p>
                Different environments, one constant: make technology clearer, more useful, and more
                dependable.
              </p>
              <div className="cert-note">
                <span>+</span>
                <p>
                  <b>Microsoft Azure AI Fundamentals</b>
                  <br />
                  ITIL 4 Foundation
                </p>
              </div>
            </Reveal>
            <div className="experience-list">
              {experiences.map((item, index) => (
                <Reveal
                  className="experience-item"
                  delay={index * 0.1}
                  key={`${item.company}-${item.role}`}
                >
                  <div className="experience-index">0{index + 1}</div>
                  <div>
                    <p className="experience-period">{item.period}</p>
                    <h3>{item.role}</h3>
                    <strong>{item.company}</strong>
                    <p>{item.responsibilities}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-page contact-page" id="contact">
          <div className="shell contact-layout">
            <Reveal className="contact-copy">
              <p className="kicker">06 · START A CONVERSATION</p>
              <h2>
                A good idea deserves a <em>strong build.</em>
              </h2>
              <p>
                Have a role, project, or technical problem in mind? Send me the context. I’d like to
                hear about it.
              </p>
              <div className="contact-links">
                <a href="mailto:yasar20111926@hotmail.com">yasar20111926@hotmail.com</a>
                <a
                  href="https://www.linkedin.com/in/yasarnazzarian-98"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Contact />
            </Reveal>
          </div>
        </section>
      </main>
      <OfflineFooter />
    </>
  );
}
