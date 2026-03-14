import React from "react";
import styled from "styled-components";
import itilCertificate from "../images/itil-4-certificate.png";

const Section = styled.section`
  padding: 4rem 0;
  background-color: var(--bg-primary);
  text-align: center;
`;

const CertificationCard = styled.div`
  display: inline-block;
  background-color: var(--bg-card);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 8px var(--shadow);
  border: 1px solid var(--border);
  margin: 1rem auto;
  width: 50%;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
  }

  p {
    color: var(--text-muted);
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
        <a
          href="https://www.credly.com/badges/1755ae09-3878-4274-bb2d-88e292cd0b5b?source=linked_in_profile"
          target="_blank"
          rel="noreferrer"
        >
          View Certificate
        </a>
      </CertificationCard>
      <CertificationCard>
        <h3>ITIL 4 Foundation Certificate in IT Service Management</h3>
        <p>PeopleCert</p>
        <p>Issued Apr 2025 · Expires Apr 2028</p>
        <p>Credential ID ITIL 4 Foundation Certificate in IT Service Management</p>
        <a href={itilCertificate} target="_blank" rel="noreferrer">
          View Certificate
        </a>
      </CertificationCard>
    </Section>
  );
};

export default Certifications;
