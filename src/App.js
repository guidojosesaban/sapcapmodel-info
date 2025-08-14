import React, { useState } from 'react'; // Importar useState
import { Global, css, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

// --- Paleta de Colores y Estilos (Sin cambios) ---
const theme = {
  colors: {
    primary: '#0A2540', background: '#F6F9FC', contentBg: '#FFFFFF', accent: '#00D9A6',
    textPrimary: '#334155', textSecondary: '#64748B', borderColor: '#E2E8F0', codeBg: '#1E293B',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  }
};
const GlobalStyles = css`
  /* ... (sin cambios aquí) ... */
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const MainContainer = styled.div`
  display: flex;
  flex: 1;
`;

function App() {
  // 1. Añadimos un estado para controlar la visibilidad del sidebar en móvil
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // 2. Creamos una función para alternar el estado (abrir/cerrar)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // 3. Creamos una función para cerrar el sidebar (se usará al hacer clic en un enlace)
  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <AppContainer>
        {/* 4. Pasamos la función de 'toggle' al Header */}
        <Header onMenuClick={toggleSidebar} />
        <MainContainer>
          {/* 5. Pasamos el estado 'isOpen' y la función de cierre al Sidebar */}
          <Sidebar isOpen={isSidebarOpen} onLinkClick={closeSidebar} />
          <Content />
        </MainContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;