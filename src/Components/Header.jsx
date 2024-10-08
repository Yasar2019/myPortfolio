import React from 'react';
import styled from 'styled-components';
import profilePic from '../images/profile-pic.png';
const HeaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  background-color: #f8f8f8;
  min-height: 60vh;
`;

const RightSide = styled.div`
  flex: 1;
  text-align: left;
  padding: 2rem;

  h1 {
    font-size: 2.8rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .button-container {
    display: flex;
    gap: 1rem;
  }

  button {
    padding: 0.8rem 1.5rem;
    margin-right: 1rem;
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
  }

  button.secondary {
    background-color: #333;
    
    &:hover {
      background-color: #555;
    }
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderSection>
      <LeftSide>
        <ProfileImage src={profilePic} alt="Yasar Nazzarian" />
      </LeftSide>
      <RightSide>
        <h1>Yasar Nazzarian</h1>
        <p>
          I'm a passionate software engineer with experience in AI integration,
          cloud computing, and software development. Let's create impactful solutions together.
        </p>
        <div className="button-container">
          {/* Scroll to the Projects section */}
          <a href="#projects">
            <button>View Projects</button>
          </a>

          {/* Scroll to the Contact section */}
          <a href="#Contact">
            <button className="secondary">Contact Me</button>
          </a>
        </div>
      </RightSide>
    </HeaderSection>
  );
};

export default Header;
