import { Global, css } from '@emotion/react';
import theme from './theme';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600;700&display=swap');
  
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
   
    background-color: ${theme.colors.background};
    color: ${theme.colors.textPrimary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
    font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  text-align: justify;
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

  /* --- INICIO DE LA CORRECCIÓN PARA LISTAS --- */
  /* Esta regla se aplica solo a las listas dentro del <main> (nuestro Content.js) */
  main ul, main ol {
    list-style: revert; /* Restaura el estilo por defecto (viñetas/números) */
    padding-left: 2rem; /* Añade el padding para la indentación */
    margin-bottom: 1.5rem;
  }

  main li {
    margin-bottom: 0.75rem;
    padding-left: 0.5rem;
    line-height: 1.7;
    color: ${theme.colors.textSecondary};
  }
  /* --- FIN DE LA CORRECCIÓN --- */
`;

export default globalStyles;