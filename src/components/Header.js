import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 1.25rem 2.5rem;
  width: 100vw;
  height: 4rem;
  box-shadow: ${props => props.theme.shadows.md};
  z-index: 1000; /* Aseguramos que esté por encima de todo */
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
    font-size: 1.2rem; /* Ajustamos un poco el tamaño */
  }
`;

// 1. Creamos el componente para el botón de hamburguesa
const HamburgerButton = styled.button`
  display: none; /* Oculto por defecto en desktop */
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

  /* 2. Hacemos visible el botón en pantallas pequeñas */
  @media (max-width: 992px) {
    display: block;
  }
`;

// 3. Recibimos 'onMenuClick' como prop
const Header = ({ onMenuClick }) => {
  return (
    <HeaderContainer>
      {/* 4. Añadimos el botón y le asignamos el evento onClick */}
      <HamburgerButton onClick={onMenuClick} aria-label="Abrir menú">
        <span />
        <span />
        <span />
      </HamburgerButton>

      <h1>SAP CAP MODEL</h1>

      {/* Un div vacío para ayudar a centrar el título si es necesario */}
      <div style={{ width: '45px' }}></div> 
    </HeaderContainer>
  );
};

export default Header;