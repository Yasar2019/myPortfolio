// src/styles/GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --scroll-progress: 0;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #f8f8f8;
    color: #222;
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
  }

  p, small {
    color: #666;
  }
`;

export default GlobalStyles;
