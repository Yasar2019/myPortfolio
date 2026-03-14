import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleButton = styled.button`
  position: fixed;
  top: 1.2rem;
  right: 1.5rem;
  z-index: 1000;
  background: var(--bg-muted);
  color: var(--text-secondary);
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px var(--shadow);
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;

  &:hover {
    background: var(--accent);
    color: #fff;
    box-shadow: 0 4px 16px rgba(255, 111, 97, 0.4);
  }

  &:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <ToggleButton
      onClick={() => setDark((prev) => !prev)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
};

export default DarkModeToggle;
