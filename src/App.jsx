// src/App.js

import React, { useEffect, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import GithubRepos from './Components/GithubRepos';
import ProjectsWithGithub from './Components/ProjectsWithGithub';
import ScrollReveal from './Components/ScrollReveal';
import DarkModeToggle from './Components/DarkModeToggle';
import BackToTop from './Components/BackToTop';

function App() {
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem('darkMode') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    try {
      localStorage.setItem('darkMode', isDark);
    } catch {
      // ignore storage errors
    }
  }, [isDark]);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      document.documentElement.style.setProperty(
        '--scroll-progress',
        progress.toFixed(4)
      );
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateScrollProgress();
        ticking = false;
      });
    };

    updateScrollProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <DarkModeToggle isDark={isDark} onToggle={() => setIsDark(d => !d)} />
      <Header />
      <ScrollReveal>
        <AboutMe />
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <Skills />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <ProjectsWithGithub />
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <Experience />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <Certifications />
      </ScrollReveal>
      <ScrollReveal delay={0.25}>
        <Contact />
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <Footer />
      </ScrollReveal>
      <BackToTop />
    </>
  );
}

export default App;
