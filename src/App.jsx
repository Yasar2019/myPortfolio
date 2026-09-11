import React, { useEffect, useState } from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import "./redesign.css";

const profile = "https://raw.githubusercontent.com/Yasar2019/myPortfolio/main/src/images/profile-pic.png";
const projects = [
  { title: "Microservices for STM & TomTom Data Integration", description: "Developed a microservice architecture to compare travel times.", technologies: "Python · Kafka · Microservices" },
  { title: "TBrain Competition: Go Power Imitation", description: "Built machine learning networks for Go game imitation.", technologies: "CNN · RNN · LSTM" },
  { title: "Document Similarity Detection with LSH & Spark", description: "Found similar documents with LSH and MapReduce on a multi-node Spark cluster.", technologies: "Spark · MapReduce · Python · Scala" },
];
const experiences = [
  { company: "Shared Services Canada", role: "Software Support Analyst", period: "May 2024 — Present", responsibilities: "Support Power Apps and Power BI environments and develop interactive dashboards with Microsoft Power Platform." },
  { company: "Ville de Laval", role: "IT Intern", period: "Winter 2023", responsibilities: "Integrated AI solutions into existing systems and delivered technical analysis for internal teams." },
  { company: "Delight Canada", role: "Software Developer", period: "Summer 2022", responsibilities: "Developed microservices for horticulture lighting systems and improved ERP functionality." },
];

const focus = [
  ["01", "Software systems", "Java · Python · APIs · distributed architecture"],
  ["02", "Applied AI", "Machine learning · data pipelines · responsible automation"],
  ["03", "Cloud delivery", "Azure · Docker · Power Platform · observability"],
];

function Project({ project, index }) {
  const labels = ["Transit data, made comparable", "Learning patterns from expert play", "Finding similarity at cluster scale"];
  return <article className="case-study">
    <div className="case-meta"><span>0{index + 1}</span><span>{project.technologies}</span></div>
    <h3>{project.title}</h3>
    <p className="case-hook">{labels[index]}</p>
    <p>{project.description}</p>
    <a href="https://github.com/Yasar2019" target="_blank" rel="noreferrer" aria-label={`Explore ${project.title} on GitHub`}>Explore the code <FaArrowRight /></a>
  </article>;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const onKey = e => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="nav">
      <a className="mark" href="#top" aria-label="Yasar Nazzarian, home">YN</a>
      <button className="menu" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="nav-links">{menu ? "Close" : "Menu"}</button>
      <nav id="nav-links" className={menu ? "open" : ""} aria-label="Main navigation">
        <a href="#work" onClick={() => setMenu(false)}>Work</a><a href="#about" onClick={() => setMenu(false)}>About</a><a href="#experience" onClick={() => setMenu(false)}>Experience</a><a className="nav-cta" href="#contact" onClick={() => setMenu(false)}>Contact</a>
      </nav>
    </header>
    <main id="main">
      <section className="hero shell" id="top">
        <div className="hero-note"><span /> Montréal, Québec<br/>Open to software & AI opportunities</div>
        <div className="hero-title">
          <p>Yasar Nazzarian — Software Engineer</p>
          <h1>I build software that makes <em>complex systems</em> easier to use.</h1>
        </div>
        <div className="hero-foot">
          <p>My work sits between software engineering, applied AI and cloud infrastructure—with a practical bias toward systems people can rely on.</p>
          <div><a className="button" href="#work">See selected work <FaArrowRight /></a><a href="https://www.linkedin.com/in/yasarnazzarian-98" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a></div>
        </div>
      </section>

      <section className="work shell" id="work">
        <header className="section-head"><p>Selected work / 2022—26</p><h2>Three problems.<br/>Three different scales.</h2></header>
        <div className="cases">{projects.map((p, i) => <Project key={p.title} project={p} index={i} />)}</div>
      </section>

      <section className="about" id="about"><div className="shell about-grid">
        <div className="portrait"><img src={profile} alt="Yasar Nazzarian, software engineer in Montréal" loading="lazy" width="620" height="620"/><span>Based in Montréal<br/>Working across code, data & cloud</span></div>
        <div className="about-copy"><p className="kicker">The person behind the work</p><h2>An engineer who likes understanding the whole system.</h2><p>I’m a Software Engineering graduate from École de technologie supérieure. I’ve worked across public-sector support, AI integration and product development—experiences that taught me to ask better questions before writing code.</p><p>I care about readable systems, useful automation and the small details that make technical products feel considered.</p><div className="signature">Yasar N.</div></div>
      </div></section>

      <section className="practice shell" aria-labelledby="practice-title"><p className="kicker">How I contribute</p><h2 id="practice-title">From first question to working system.</h2><div className="focus">{focus.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

      <section className="experience shell" id="experience">
        <header className="section-head"><p>Experience</p><h2>Learning in the real world.</h2></header>
        <div className="timeline">{experiences.map(item => <article key={item.company}><time>{item.period}</time><div><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.responsibilities}</p></div></article>)}</div>
      </section>

      <section className="contact" id="contact"><div className="shell"><p>Have a role, a project, or a good technical problem?</p><h2>Let’s talk.</h2><a href="mailto:yasar20111926@hotmail.com">yasar20111926@hotmail.com <FaArrowRight /></a><div className="social"><a href="https://github.com/Yasar2019" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a><a href="https://www.linkedin.com/in/yasarnazzarian-98" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a></div></div></section>
    </main>
    <footer><div className="shell"><span>© {new Date().getFullYear()} Yasar Nazzarian</span><span>Designed with restraint. Built with React.</span><a href="#top">Back to top ↑</a></div></footer>
  </>;
}
