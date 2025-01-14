// src/Components/Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 4rem 1rem; /* Adjust padding for smaller screens */
  background-color: #f9f9f9;
  color: #333;
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
    gap: 1.5rem; /* Smaller gap for mobile */
  }
`;

const ProjectCard = styled(motion.div)`
  width: 300px;
  padding: 1rem;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  @media (max-width: 768px) {
    width: 90%; /* Take most of the screen width on mobile */
  }
`;

const Projects = () => (
  <ProjectsSection id="projects">
    <h2>Projects</h2>
    <ProjectsList>
      {[
        {
          title: "Microservices for STM & TomTom Data Integration",
          description: "Developed a microservice architecture to compare travel times.",
          technologies: "Python, Kafka, Microservices",
        },
        {
          title: "TBrain Competition: Go Power Imitation",
          description: "Built machine learning networks for Go game imitation.",
          technologies: "CNN, RNN, LSTM",
        },
        {
          title: "Document Similarity Detection using LSH and MapReduce on Apache Spark",
          description: "Finding similar documents using LSH with MapReduce on multi-node Spark Cluster",
          technologies: "Apache Spark, MapReduce, LSH, Hadoop, Python, Scala",
        },
      ].map((project) => (
        <ProjectCard
          key={project.title}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <small>Technologies: {project.technologies}</small>
        </ProjectCard>
      ))}
    </ProjectsList>
  </ProjectsSection>
);

export default Projects;
