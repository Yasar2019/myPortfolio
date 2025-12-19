import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profilePic from '../images/profile-pic.png';

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  background-color: #f8f8f8;
  min-height: 80vh;
  position: relative;
  overflow: hidden;
`;

const HeroScene = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  perspective: 1200px;
  z-index: 0;
  transform: translateY(calc(var(--scroll-progress) * 30px));
`;

const Orb = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  transform-style: preserve-3d;
  animation: orbSpin 14s linear infinite;
  opacity: 0.65;

  &::before {
    content: '';
    position: absolute;
    inset: 25px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(255, 111, 97, 0.25));
    box-shadow: 0 0 40px rgba(255, 111, 97, 0.2);
    transform: translateZ(20px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 50px;
    border-radius: 50%;
    border: 1px solid rgba(255, 111, 97, 0.35);
    transform: translateZ(-20px);
  }

  @keyframes orbSpin {
    from {
      transform: rotateX(18deg) rotateY(0deg);
    }
    to {
      transform: rotateX(18deg) rotateY(360deg);
    }
  }
`;

const Ring = styled.span`
  position: absolute;
  inset: 25px;
  border-radius: 50%;
  border: 1px solid rgba(51, 51, 51, 0.15);
  transform-style: preserve-3d;
  animation: ringFloat 7s ease-in-out infinite;

  &:nth-child(1) {
    transform: rotateX(65deg) rotateZ(20deg) translateZ(25px);
  }

  &:nth-child(2) {
    transform: rotateY(75deg) rotateZ(-15deg) translateZ(-10px);
    animation-delay: 1.5s;
  }

  &:nth-child(3) {
    transform: rotateX(80deg) rotateZ(80deg) translateZ(10px);
    animation-delay: 3s;
  }

  @keyframes ringFloat {
    0%,
    100% {
      filter: drop-shadow(0 0 8px rgba(255, 111, 97, 0.2));
    }
    50% {
      filter: drop-shadow(0 0 18px rgba(73, 135, 255, 0.3));
    }
  }
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;

  a {
    text-decoration: none;
  }

  button {
    padding: 0.8rem 1.5rem;
    border: none;
    background-color: #ff6f61;
    color: #fff;
    font-size: 1rem;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e65a51;
    }

    &.secondary {
      background-color: #333;

      &:hover {
        background-color: #555;
      }
    }
  }
`;

const ConnectSection = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  position: relative;
  z-index: 1;

  a {
    color: #ff6f61;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #333;
    }
  }
`;

const Header = () => {
  return (
    <HeaderSection>
      <HeroScene>
        <Orb>
          <Ring />
          <Ring />
          <Ring />
        </Orb>
      </HeroScene>
      <ProfileImage src={profilePic} alt="Yasar Nazzarian" />
      <Name>Yasar Nazzarian</Name>
      <Description>
        I'm a passionate software Developer with experience in AI integration,
        cloud computing, and software development. Let's create impactful solutions together.
      </Description>
      <ButtonContainer>
        <a href="#projects">
          <button>View Projects</button>
        </a>
        <a href="#Contact">
          <button className="secondary">Contact Me</button>
        </a>
      </ButtonContainer>
      <ConnectSection>
        <a
          href="https://github.com/Yasar2019"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yasarnazzarian-98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:yasar20111926@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </ConnectSection>
    </HeaderSection>
  );
};

export default Header;
