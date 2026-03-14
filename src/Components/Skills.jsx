import React from "react";
import styled, { keyframes } from "styled-components";
import { FaJava, FaPython, FaJsSquare, FaReact, FaDocker, FaMicrosoft } from "react-icons/fa";

const fillAnimation = keyframes`
  from { width: 0%; }
`;

const SkillsSection = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  background-color: var(--bg-primary);

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--text-secondary);
  }

  .skills-container {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto;
  }
`;

const SkillCard = styled.div`
  background-color: var(--skill-bg);
  padding: 1.2rem 1.5rem;
  border-radius: 12px;
  width: 220px;
  box-shadow: 0 2px 8px var(--shadow);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 18px var(--shadow);
  }

  .skill-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-secondary);

    svg {
      font-size: 1.4rem;
      color: var(--accent);
    }
  }

  .skill-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-bottom: 0.4rem;
  }
`;

const ProgressTrack = styled.div`
  background-color: var(--border);
  border-radius: 99px;
  height: 8px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  border-radius: 99px;
  background: linear-gradient(90deg, var(--accent), #ff9a8b);
  width: ${({ $percent }) => $percent}%;
  animation: ${fillAnimation} 1s ease-out forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const skillsData = [
  { icon: <FaJava />, name: "Java", level: "Advanced", percent: 85 },
  { icon: <FaPython />, name: "Python", level: "Advanced", percent: 88 },
  { icon: <FaJsSquare />, name: "JavaScript", level: "Advanced", percent: 82 },
  { icon: <FaReact />, name: "React", level: "Intermediate", percent: 75 },
  { icon: <FaDocker />, name: "Docker", level: "Intermediate", percent: 70 },
  { icon: <FaMicrosoft />, name: "Azure", level: "Intermediate", percent: 72 },
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map(({ icon, name, level, percent }) => (
          <SkillCard key={name}>
            <div className="skill-header">
              {icon} {name}
            </div>
            <div className="skill-meta">
              <span>{level}</span>
              <span>{percent}%</span>
            </div>
            <ProgressTrack>
              <ProgressBar $percent={percent} />
            </ProgressTrack>
          </SkillCard>
        ))}
      </div>
    </SkillsSection>
  );
};

export default Skills;
