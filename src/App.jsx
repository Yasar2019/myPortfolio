import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaSun,
  FaMoon,
  FaJava,
  FaPython,
  FaReact,
  FaDocker,
  FaMicrosoft,
  FaJsSquare,
} from "react-icons/fa";
import SystemScene from "./Components/SystemScene";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Certifications from "./Components/Certifications";
import profile from "./images/profile-pic.png";
import { projects } from "./data/projects";
import { experiences } from "./data/experience";
import "./redesign.css";

const links = [
  ["projects", "Work"],
  ["about", "About"],
  ["skills", "Stack"],
  ["experience", "Experience"],
];
const skills = [
  [FaJava, "Java", "Application development"],
  [FaPython, "Python", "AI & data engineering"],
  [FaJsSquare, "JavaScript", "Interactive experiences"],
  [FaReact, "React", "Frontend development"],
  [FaDocker, "Docker", "Containerized services"],
  [FaMicrosoft, "Azure", "Cloud & AI services"],
];

function Repositories() {
  const [state, setState] = useState({ loading: true, repos: [], error: false });
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    fetch("https://api.github.com/users/Yasar2019/repos?sort=updated&per_page=3", {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Unavailable");
        return response.json();
      })
      .then((repos) => {
        if (!Array.isArray(repos)) throw new Error("Invalid response");
        setState({ loading: false, repos, error: false });
      })
      .catch(() => setState({ loading: false, repos: [], error: true }))
      .finally(() => clearTimeout(timeout));
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);
  return (
    <div className="repo-panel">
      <div className="repo-heading">
        <h3>
          <FaGithub /> From the repository
        </h3>
        <a href="https://github.com/Yasar2019" target="_blank" rel="noreferrer">
          All repositories ↗
        </a>
      </div>
      {state.loading && <p role="status">Loading latest repositories…</p>}
      {state.error && (
        <p role="status">
          Live repositories are unavailable.{" "}
          <a href="https://github.com/Yasar2019">Explore my work on GitHub ↗</a>
        </p>
      )}
      {!state.loading && !state.error && !state.repos.length && (
        <p>No public repositories to display.</p>
      )}
      <div className="repo-grid">
        {state.repos.map((repo) => (
          <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer">
            <strong>{repo.name} ↗</strong>
            <p>{repo.description || "Explore the code on GitHub."}</p>
            <small>{repo.language || "Repository"}</small>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* Theme works without storage. */
    }
  }, [theme]);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-nav">
        <a className="wordmark" href="#home" aria-label="Yasar Nazzarian home">
          yn<span>.</span>
        </a>
        <nav
          id="navigation"
          className={menu ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenu(false)}>
            Let’s talk ↗
          </a>
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menu}
            aria-controls="navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="hero page-width" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> SOFTWARE ENGINEER · MONTRÉAL
            </div>
            <p className="intro">Hi, I’m Yasar Nazzarian.</p>
            <h1>
              Turning ideas
              <br />
              into <em>intelligent</em>
              <br />
              experiences<span>.</span>
            </h1>
            <p className="hero-description">
              I connect software, AI, and cloud technologies to build thoughtful solutions for
              real-world problems.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work <FaArrowRight />
              </a>
              <a className="button quiet" href="#contact">
                Get in touch ↗
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/Yasar2019" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yasarnazzarian-98"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <span>Always learning. Always building.</span>
            </div>
          </div>
          <SystemScene />
        </section>
        <div className="discipline-strip">
          <div className="page-width">
            <span>SOFTWARE DEVELOPMENT</span>
            <i>✳</i>
            <span>ARTIFICIAL INTELLIGENCE</span>
            <i>✳</i>
            <span>CLOUD COMPUTING</span>
            <i>✳</i>
            <span>DATA ENGINEERING</span>
          </div>
        </div>
        <section className="section page-width" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>
                Built with purpose<span>.</span>
              </h2>
            </div>
            <p>
              From distributed systems to machine learning.
              <br />A few problems I’ve enjoyed solving.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-${index}`} key={project.title}>
                <div className="project-art" aria-hidden="true">
                  <span className="art-index">0{index + 1}</span>
                  {index === 0 ? (
                    <div className="pipeline">
                      <b>STM</b>
                      <span>↔</span>
                      <b>API</b>
                      <span>↔</span>
                      <b>TomTom</b>
                    </div>
                  ) : index === 1 ? (
                    <div className="go-board">
                      {Array.from({ length: 25 }, (_, i) => (
                        <span
                          key={i}
                          className={
                            [6, 8, 12, 17].includes(i)
                              ? "stone white"
                              : [7, 11, 13, 18].includes(i)
                              ? "stone black"
                              : ""
                          }
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="data-stack">
                      <span />
                      <span />
                      <span />
                      <b>≈</b>
                    </div>
                  )}
                  <span className="art-caption">
                    {["DISTRIBUTED SYSTEMS", "MACHINE LEARNING", "DATA AT SCALE"][index]}
                  </span>
                </div>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.technologies.split(", ").map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <Repositories />
        </section>
        <section className="about-band" id="about">
          <div className="page-width about-layout">
            <div className="portrait-frame">
              <img src={profile} alt="Yasar Nazzarian" loading="lazy" />
              <span>MONTRÉAL, QC / CANADA</span>
            </div>
            <div>
              <p className="eyebrow">02 / THE PERSON BEHIND THE CODE</p>
              <h2>
                Curiosity drives me.
                <br />
                <em>Building defines me.</em>
              </h2>
              <p>
                I am a recent graduate in Software Engineering from École de Technologie Supérieure,
                Montreal, with a passion for AI integration, software development, and cloud
                computing.
              </p>
              <p>
                My goal is to deliver scalable and impactful solutions that use cutting-edge
                technologies.
              </p>
              <a className="text-link" href="#experience">
                Explore my experience <FaArrowRight />
              </a>
            </div>
          </div>
        </section>
        <section className="section page-width" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / MY TOOLKIT</p>
              <h2>
                The tools behind the ideas<span>.</span>
              </h2>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map(([Icon, name, description]) => (
              <div className="skill-tile" key={name}>
                <Icon aria-hidden="true" />
                <div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section page-width experience-section" id="experience">
          <div>
            <p className="eyebrow">04 / THE JOURNEY</p>
            <h2>
              Experience that
              <br />
              shapes my work<span>.</span>
            </h2>
            <p>
              Building, supporting, and connecting
              <br />
              technology across different teams.
            </p>
          </div>
          <div className="timeline">
            {experiences.map((item) => (
              <article key={item.company}>
                <p className="eyebrow">{item.period}</p>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.responsibilities}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="legacy-cert page-width">
          <Certifications />
        </div>
        <section className="contact-layout page-width section" id="contact">
          <div>
            <p className="eyebrow">05 / LET’S CONNECT</p>
            <h2>
              Have something
              <br />
              in mind?
              <br />
              <em>Let’s build it.</em>
            </h2>
            <p>
              Have a project, an opportunity, or an interesting idea?
              <br />
              I’d love to hear about it.
            </p>
            <a className="text-link" href="mailto:yasar20111926@hotmail.com">
              yasar20111926@hotmail.com ↗
            </a>
          </div>
          <Contact />
        </section>
      </main>
      <div className="legacy-footer">
        <Footer />
      </div>
    </>
  );
}
