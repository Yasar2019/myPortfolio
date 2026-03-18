// src/styles/GlobalStyles.js

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --scroll-progress: 0;

    /* Light theme (default) */
    --bg-primary: #f8f8f8;
    --bg-secondary: #ffffff;
    --bg-card: #ffffff;
    --bg-muted: #f0f0f0;
    --text-primary: #222;
    --text-secondary: #333;
    --text-muted: #666;
    --accent: #ff6f61;
    --accent-secondary: #ff9a8b;
    --accent-hover: #e65a51;
    --border: #ddd;
    --shadow: rgba(0, 0, 0, 0.1);
    --header-bg: #f8f8f8;
    --experience-card-bg: #eaeaea;
    --footer-bg: #333;
    --footer-text: #fff;
    --footer-muted: #ccc;
    --skill-bg: #f0f0f0;
    --skill-hover: #e0e0e0;
  }

  [data-theme='dark'] {
    --bg-primary: #121212;
    --bg-secondary: #1e1e1e;
    --bg-card: #1e1e1e;
    --bg-muted: #2a2a2a;
    --text-primary: #e0e0e0;
    --text-secondary: #cfcfcf;
    --text-muted: #999;
    --accent: #ff6f61;
    --accent-secondary: #ffb3a7;
    --accent-hover: #e65a51;
    --border: #3a3a3a;
    --shadow: rgba(0, 0, 0, 0.4);
    --header-bg: #121212;
    --experience-card-bg: #2a2a2a;
    --footer-bg: #1a1a1a;
    --footer-text: #e0e0e0;
    --footer-muted: #aaa;
    --skill-bg: #2a2a2a;
    --skill-hover: #333;
  }

  body,
  section,
  header,
  footer,
  div,
  p,
  h1,
  h2,
  h3,
  h4,
  span,
  button,
  input,
  textarea,
  a,
  ul,
  li {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
  }

  body::before,
  body::after {
    content: '';
    position: fixed;
    inset: -20%;
    pointer-events: none;
    z-index: -1;
    transition: transform 0.25s ease-out;
  }

  body::before {
    background: radial-gradient(circle at top, rgba(255, 255, 255, 0.85), transparent 60%),
      radial-gradient(circle at 25% 20%, rgba(255, 111, 97, 0.25), transparent 55%),
      radial-gradient(circle at 80% 10%, rgba(73, 135, 255, 0.2), transparent 45%);
    transform: translate3d(
        0,
        calc(var(--scroll-progress) * 80px),
        0
      )
      scale(1.02);
    filter: blur(0px);
  }

  body::after {
    background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(248, 248, 248, 0.9) 45%,
        rgba(240, 240, 240, 0.9) 100%
      ),
      repeating-linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.035) 0,
        rgba(0, 0, 0, 0.035) 1px,
        transparent 1px,
        transparent 12px
      );
    opacity: 0.25;
    transform: translate3d(
        0,
        calc(var(--scroll-progress) * -60px),
        0
      )
      rotate(calc(var(--scroll-progress) * 2deg));
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
  }

  p, small {
    color: var(--text-muted);
  }
`;

export default GlobalStyles;
