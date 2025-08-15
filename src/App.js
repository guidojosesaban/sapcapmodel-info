import React, { useState } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
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

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <AppContainer>
        <Header onMenuClick={toggleSidebar} />
        <MainContainer>
          <Sidebar isOpen={isSidebarOpen} onLinkClick={closeSidebar} />
          <Content />
        </MainContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;