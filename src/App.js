import React, { useState } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import AudioPlayer from './components/AudioPlayer';
import CertificationModal from './components/CertificationModal'; // 1. Importar el nuevo componente
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
  const [isAudioPlayerOpen, setAudioPlayerOpen] = useState(false);
  // 2. Añadir estado para la modal de certificación
  const [isCertModalOpen, setCertModalOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const openAudioPlayer = () => setAudioPlayerOpen(true);
  const closeAudioPlayer = () => setAudioPlayerOpen(false);

  // 3. Crear funciones para la nueva modal
  const openCertModal = () => setCertModalOpen(true);
  const closeCertModal = () => setCertModalOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <AudioPlayer isOpen={isAudioPlayerOpen} onClose={closeAudioPlayer} />
      {/* 4. Renderizar la nueva modal */}
      <CertificationModal isOpen={isCertModalOpen} onClose={closeCertModal} />
      
      <AppContainer>
        <Header onMenuClick={toggleSidebar} />
        <MainContainer>
          {/* 5. Pasar la función para abrir la modal al Sidebar */}
          <Sidebar 
            isOpen={isSidebarOpen} 
            onLinkClick={closeSidebar} 
            onOpenAudioPlayer={openAudioPlayer}
            onOpenCertModal={openCertModal}
          />
          <Content />
        </MainContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;