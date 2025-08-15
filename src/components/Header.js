import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  background-color: #252525;
  color: white;
  padding: 0 2rem;
  box-shadow: ${props => props.theme.shadows.md};
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.theme.header.height};
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
  }

  @media (max-width: 1000px) {
    padding: 0 1rem; /* Alineamos el padding con el body */
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 1000px) {
    display: block;
  }
`;

const Header = ({ onMenuClick }) => {
  return (
    <HeaderContainer>
      <HamburgerButton onClick={onMenuClick} aria-label="Abrir menú">
        <span />
        <span />
        <span />
      </HamburgerButton>

      <h1>Manual Definitivo de SAP CAP</h1>

      <div style={{ width: '45px' }}></div> 
    </HeaderContainer>
  );
};

export default Header;