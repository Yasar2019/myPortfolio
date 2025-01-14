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
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

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
