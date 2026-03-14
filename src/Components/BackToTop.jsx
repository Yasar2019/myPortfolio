import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 1.5rem;
  z-index: 999;
  background: #ff6f61;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '20px')});
  transition: opacity 0.3s, transform 0.3s, background 0.2s;

  &:hover {
    background: #e65a51;
  }
`;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BackToTopButton
      $visible={visible}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </BackToTopButton>
  );
};

export default BackToTop;
