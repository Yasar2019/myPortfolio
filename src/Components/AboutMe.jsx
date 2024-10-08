// src/Components/AboutMe.jsx

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 0;
  background-color: #f9f9f9;
  color: #333;
  text-align: center;
  margin-top: 80px; // Leave space for header
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

const AboutMe = () => (
  <AboutSection id="about">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <AboutContent>
        <h2>About Me</h2>
        <p>
          I am a recent graduate in Software Engineering from École de Technologie Supérieure, Montreal, 
          with a passion for AI integration, software development, and cloud computing. My goal is to deliver 
          scalable and impactful solutions that use cutting-edge technologies.
        </p>
      </AboutContent>
    </motion.div>
  </AboutSection>
);

export default AboutMe;
