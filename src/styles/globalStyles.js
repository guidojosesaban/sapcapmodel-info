import { css } from '@emotion/react';
import theme from './theme';

// Eliminamos la importación de 'Global' que no se usaba
// const GlobalStyles = () => ( <Global styles={...} /> )
// Ahora exportamos directamente el objeto css

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600;700&display=swap');
  
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Space Grotesk';
    background-color: ${theme.colors.background};
    color: ${theme.colors.textPrimary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
       font-family: 'Space Grotesk';
       font-weight: 400;
       
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

  @media (max-width: 1000px) {
    body {
      padding: 0 1rem;
    }
  }

  main ul, main ol {
    list-style: revert;
    padding-left: 2rem;
    margin-bottom: 1.5rem;
  }

  main li {
    margin-bottom: 0.75rem;
    padding-left: 0.5rem;
    line-height: 1.7;
    color: ${theme.colors.textSecondary};
  }
`;

export default globalStyles;
