import React from 'react';
import styled from 'styled-components';
import logoPic from '/src/images/logo.png';

const FooterSection = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 4rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Section = styled.div`
  flex: 1;
  margin: 1rem;
  text-align: center;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  p {
    color: #ccc;
    line-height: 1.6;
    max-width: 280px;
    margin: 0 auto;
  }
`;

const SubscribeContainer = styled.div`
  text-align: center;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  input {
    padding: 0.8rem;
    border: none;
    border-radius: 25px;
    width: 250px;
    margin-right: 10px;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.8rem 1.5rem;
    border: none;
    background-color: #ff6f61;
    color: #fff;
    cursor: pointer;
    border-radius: 25px;
    font-size: 1rem;

    &:hover {
      background-color: #8a504a;
    }
  }
`;

const LogoContainer = styled.div`
  text-align: center;
  img {
    width: 150px; /* Increase the width */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 1rem;
  }
`;


const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        color: #00d084;
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    color: #ff6f61;
    font-size: 1.5rem;

    &:hover {
      color: #fff;
    }
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  color: #777;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      {/* Subscription Section */}
      <Section>
        <h3>Stay Updated!</h3>
        <SubscribeContainer>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </SubscribeContainer>
      </Section>

      {/* About Section */}
      <Section>
        <LogoContainer>
          <img src= {logoPic} alt="Logo" /> 
        </LogoContainer>
        <p>
          A passionate software engineer with experience in AI integration, cloud computing, and software development. Let's create impactful solutions together.
        </p>
      </Section>

      {/* Quick Links Section */}
      <Section>
        <h3>Quick Links</h3>
        <QuickLinks>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </QuickLinks>
      </Section>

      {/* Footer Bottom */}
      <FooterBottom>
        <p>© 2024 Yasar Nazzarian. All rights reserved.</p>
      </FooterBottom>
    </FooterSection>
  );
};

export default Footer;
