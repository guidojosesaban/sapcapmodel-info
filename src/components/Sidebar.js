import React from 'react';
import styled from '@emotion/styled';

const SidebarContainer = styled.aside`
  background-color: ${props => props.theme.colors.contentBg};
  width: 300px;
  flex-shrink: 0; /* Evita que se encoja */
  border-right: 1px solid ${props => props.theme.colors.borderColor};
  height: calc(100vh - ${props => props.theme.header.height});
  position: fixed; /* Sidebar fija */
  left: 0;
  top: ${props => props.theme.header.height};
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  z-index: 900;
  padding: 1.5rem;

  @media (max-width: 992px) {
    transform: translateX(${props => (props.isOpen ? '0' : '-100%')});
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const NavGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const GroupTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const NavLink = styled.a`
    display: block;
    padding: 0.6rem 1rem;
    color: ${props => props.theme.colors.textSecondary};
    text-decoration: none;
    border-radius: 6px;
    font-size: 0.9rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.primary};
      transform: translateX(5px);
    }
`;

const Sidebar = ({ isOpen, onLinkClick }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <NavGroup>
        <GroupTitle>Fundamentos</GroupTitle>
        <ul>
          <li><NavLink href="#section-1" onClick={onLinkClick}>1. ¿Qué es SAP CAP?</NavLink></li>
          <li><NavLink href="#section-2" onClick={onLinkClick}>2. Filosofía y Principios</NavLink></li>
          <li><NavLink href="#section-3" onClick={onLinkClick}>3. Características Principales</NavLink></li>
        </ul>
      </NavGroup>

      <NavGroup>
        <GroupTitle>Desarrollo Core</GroupTitle>
        <ul>
            <li><NavLink href="#section-4" onClick={onLinkClick}>4. Modelado con CDS</NavLink></li>
            <li><NavLink href="#section-5" onClick={onLinkClick}>5. Provisión de Servicios</NavLink></li>
            <li><NavLink href="#section-6" onClick={onLinkClick}>6. Lógica de Negocio</NavLink></li>
            <li><NavLink href="#section-7" onClick={onLinkClick}>7. Consumo de Servicios</NavLink></li>
        </ul>
      </NavGroup>

      <NavGroup>
        <GroupTitle>Cualidades Empresariales</GroupTitle>
        <ul>
            <li><NavLink href="#section-8" onClick={onLinkClick}>8. Guía de Bases de Datos</NavLink></li>
            <li><NavLink href="#section-9" onClick={onLinkClick}>9. Seguridad con XSUAA</NavLink></li>
            <li><NavLink href="#section-10" onClick={onLinkClick}>10. Multitenancy</NavLink></li>
            <li><NavLink href="#section-11" onClick={onLinkClick}>11. Localización (i18n)</NavLink></li>
        </ul>
      </NavGroup>
      
      <NavGroup>
        <GroupTitle>Despliegue y UI</GroupTitle>
        <ul>
            <li><NavLink href="#section-12" onClick={onLinkClick}>12. Despliegue con MTA</NavLink></li>
            <li><NavLink href="#section-13" onClick={onLinkClick}>13. SAP Fiori Elements</NavLink></li>
            <li><NavLink href="#section-14" onClick={onLinkClick}>14. Extensibilidad</NavLink></li>
        </ul>
      </NavGroup>

      <NavGroup>
        <GroupTitle>Anexos</GroupTitle>
        <ul>
          <li><NavLink href="#annex" onClick={onLinkClick}>Glosario y Herramientas</NavLink></li>
        </ul>
      </NavGroup>
    </SidebarContainer>
  );
};

export default Sidebar;