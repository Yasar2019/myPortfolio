// src/Components/Experience.jsx

import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import experienceData from "../data/experience";

const ExperienceSection = styled.section`
  padding: 4rem 0;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  text-align: center;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const ExperienceCard = styled(motion.div)`
  width: 80%;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: var(--experience-card-bg);
  box-shadow: 0px 4px 8px var(--shadow);
  text-align: left;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
  }

  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #00d084;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  small {
    color: var(--text-muted);
  }
`;

const Experience = () => (
  <ExperienceSection id="experience">
    <h2>Experience</h2>
    <ExperienceList>
      {experienceData.experiences.map((job) => (
        <ExperienceCard key={job.company} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <h3>{job.company}</h3>
          <h4>{job.role}</h4>
          <small>{job.period}</small>
          <p>{job.responsibilities}</p>
        </ExperienceCard>
      ))}
    </ExperienceList>
  </ExperienceSection>
);

export default Experience;
