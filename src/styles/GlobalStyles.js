// src/styles/GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
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
