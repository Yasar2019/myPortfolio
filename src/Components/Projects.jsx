// src/Components/Projects.jsx

import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import projectsData from "../data/projects";

const ProjectsSection = styled.section`
  padding: 4rem 1rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  width: 300px;
  padding: 1rem;
  border-radius: 10px;
  background-color: var(--bg-card);
  box-shadow: 0px 4px 8px var(--shadow);
  text-align: left;
  border: 1px solid var(--border);

  h3 {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Projects = () => (
  <ProjectsSection id="projects">
    <h2>Projects</h2>
    <ProjectsList>
      {projectsData.projects.map((project) => (
        <ProjectCard key={project.title} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <small>Technologies: {project.technologies}</small>
        </ProjectCard>
      ))}
    </ProjectsList>
  </ProjectsSection>
);

export default Projects;
