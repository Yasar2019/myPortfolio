import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0;
  background-color: #f8f8f8;
  text-align: center;
`;

const CertificationCard = styled.div`
  display: inline-block;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
  width: 50%; 
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  a {
    color: #00d084;
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Certifications = () => {
  return (
    <Section>
      <h2>Certifications</h2>
      <CertificationCard>
        <h3>Microsoft Certified: Azure AI Fundamentals</h3>
        <a href="#" target="_blank">View Certificate</a>
      </CertificationCard>
    </Section>
  );
};

export default Certifications;
