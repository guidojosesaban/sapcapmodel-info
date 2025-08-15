import { css } from '@emotion/react';
import theme from './theme';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.textPrimary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default globalStyles;