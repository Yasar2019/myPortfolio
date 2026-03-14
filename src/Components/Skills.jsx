import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaJava, FaPython, FaJsSquare, FaReact, FaDocker, FaMicrosoft } from 'react-icons/fa'; // Import relevant icons
import { skills } from '../data/skills';

const ICONS = {
  Java: <FaJava />,
  Python: <FaPython />,
  JavaScript: <FaJsSquare />,
  React: <FaReact />,
  Docker: <FaDocker />,
  Azure: <FaMicrosoft />,
};

const SkillsSection = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  background-color: var(--section-bg, #f9f9f9);

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--text-color, #333);
  }

  .skills-container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SkillRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
`;

const SkillLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.05rem;
  color: var(--text-color, #333);

  svg {
    font-size: 1.3rem;
    color: #ff6f61;
  }
`;

const LevelPercentage = styled.span`
  margin-left: auto;
  color: #ff6f61;
  font-size: 0.9rem;
`;

const BarTrack = styled.div`
  width: 100%;
  background-color: var(--card-bg, #e0e0e0);
  border-radius: 8px;
  height: 10px;
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(90deg, #ff6f61, #ff9a8b);
  width: ${({ $animated, $level }) => ($animated ? `${$level}%` : '0%')};
  transition: width 1s ease-out;
`;

const Skills = () => {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SkillsSection ref={sectionRef}>
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map(({ name, level }) => (
          <SkillRow key={name}>
            <SkillLabel>
              {ICONS[name]} {name} <LevelPercentage>{level}%</LevelPercentage>
            </SkillLabel>
            <BarTrack>
              <BarFill $animated={animated} $level={level} />
            </BarTrack>
          </SkillRow>
        ))}
      </div>
    </SkillsSection>
  );
};

export default Skills;
