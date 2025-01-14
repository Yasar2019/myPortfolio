import React from 'react';
import styled from 'styled-components';
import { FaJava, FaPython, FaJsSquare, FaReact, FaDocker, FaMicrosoft } from 'react-icons/fa'; // Import relevant icons

const SkillsSection = styled.section`
  padding: 3rem 0;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .skills-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .skill {
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    padding: 0.8rem 1.5rem;
    border-radius: 15px;
    font-size: 1.2rem;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }

    svg {
      margin-right: 0.5rem;
      font-size: 1.5rem;
    }
  }
`;

const Skills = () => {
  return (
    <SkillsSection>
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <FaJava /> Java
        </div>
        <div className="skill">
          <FaPython /> Python
        </div>
        <div className="skill">
          <FaJsSquare /> JavaScript
        </div>
        <div className="skill">
          <FaReact /> React
        </div>
        <div className="skill">
          <FaDocker /> Docker
        </div>
        <div className="skill">
          <FaMicrosoft /> Azure
        </div>
      </div>
    </SkillsSection>
  );
};

export default Skills;
