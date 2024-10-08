// src/App.js

import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
