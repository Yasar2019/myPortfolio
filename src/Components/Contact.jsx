import React, { useRef, useState } from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  background-color: var(--bg-primary);
  text-align: center;
  padding-top: 1rem;

  h2 {
    color: var(--text-secondary);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 3rem 0;

  input,
  textarea {
    width: 60%;
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid var(--border);
    border-radius: 5px;
    background-color: var(--bg-card);
    color: var(--text-primary);

    &::placeholder {
      color: var(--text-muted);
    }

    &:focus {
      outline: 2px solid var(--accent);
      outline-offset: 1px;
    }
  }

  textarea {
    height: 150px;
  }

  button {
    width: 60%;
    padding: 1rem;
    background-color: var(--accent);
    color: #fff;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--accent-hover);
    }
  }
`;
const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    fetch("https://formspree.io/f/xovqarqp", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus("SUCCESS");
          formRef.current.reset(); // Reset form after successful submission
        } else {
          setStatus("ERROR");
        }
      })
      .catch(() => setStatus("ERROR"));
  };

  return (
    <ContactSection>
      <h2>Contact Me</h2>
      <ContactForm id="Contact" ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </ContactForm>

      {/* Status Message */}
      {status === "SUCCESS" && <p>Thank you! Your message has been sent.</p>}
      {status === "ERROR" && <p>Oops! There was an error sending your message.</p>}
    </ContactSection>
  );
};

export default Contact;
