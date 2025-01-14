// src/Components/Experience.jsx

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 4rem 0;
  background-color: #ffffff;
  color: #333;
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
  background-color: #eaeaea;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
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
    color: #666;
  }
`;

const Experience = () => (
  <ExperienceSection id="experience">
    <h2>Experience</h2>
    <ExperienceList>
      {[
        {
          company: "Shared Services Canada",
          role: "Software Support Analyst",
          period: "May 2024 – Present",
          responsibilities: "Provided technical support for Power Apps and Power BI, developed interactive dashboards using PowerPlatform.",
        },
        {
          company: "Ville de Laval",
          role: "IT Intern",
          period: "Winter 2023",
          responsibilities: "Integrated AI solutions into existing systems and provided technical analysis.",
        },
        {
          company: "Delight Canada",
          role: "Software Developer",
          period: "Summer 2022",
          responsibilities: "Developed microservices for horticulture lighting systems and enhanced ERP functionalities.",
        },
      ].map((job) => (
        <ExperienceCard
          key={job.company}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
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
