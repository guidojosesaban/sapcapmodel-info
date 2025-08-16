import React, { useState } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import AudioPlayer from './components/AudioPlayer'; // 1. Importar el nuevo componente
import globalStyles from './styles/globalStyles';
import theme from './styles/theme';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  padding-top: ${theme.header.height};
`;

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // 2. Añadir estado para el reproductor de audio
  const [isAudioPlayerOpen, setAudioPlayerOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // 3. Crear funciones para abrir y cerrar el reproductor
  const openAudioPlayer = () => setAudioPlayerOpen(true);
  const closeAudioPlayer = () => setAudioPlayerOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {/* 4. Renderizar el reproductor de audio */}
      <AudioPlayer isOpen={isAudioPlayerOpen} onClose={closeAudioPlayer} />
      
      <AppContainer>
        <Header onMenuClick={toggleSidebar} />
        <MainContainer>
          {/* 5. Pasar la función para abrir el reproductor al Sidebar */}
          <Sidebar 
            isOpen={isSidebarOpen} 
            onLinkClick={closeSidebar} 
            onOpenAudioPlayer={openAudioPlayer} 
          />
          <Content />
        </MainContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;