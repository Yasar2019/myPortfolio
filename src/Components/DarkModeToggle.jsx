import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = styled.button`
  position: fixed;
  top: 1.2rem;
  right: 1.5rem;
  z-index: 1000;
  background: var(--toggle-bg, #333);
  color: var(--toggle-color, #fff);
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  }
`;

const DarkModeToggle = ({ isDark, onToggle }) => {
  return (
    <ToggleButton onClick={onToggle} aria-label="Toggle dark mode">
      {isDark ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
};

export default DarkModeToggle;
