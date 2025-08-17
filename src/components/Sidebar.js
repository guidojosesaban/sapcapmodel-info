import React from 'react';
import styled from '@emotion/styled';
import { FaHeadphonesAlt, FaCertificate } from 'react-icons/fa';

const SidebarContainer = styled.aside`
  background-color: ${props => props.theme.colors.contentBg};
  width: ${props => props.theme.sidebar.width};
  flex-shrink: 0;
  border-right: 1px solid ${props => props.theme.colors.borderColor};
  height: calc(100vh - ${props => props.theme.header.height});
  position: fixed;
  left: 0;
  top: ${props => props.theme.header.height};
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  z-index: 900;
  padding: 1.5rem 0;

  @media (max-width: 1000px) {
    transform: translateX(${props => (props.isOpen ? '0' : '-100%')});
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const NavGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const GroupTitle = styled.h4`
  color: #252525;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.75rem 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-bottom: 4px solid #003cffff;
`;

const NavLink = styled.a`
    display: block;
    padding: 0.6rem 1.5rem;
    color: ${props => props.theme.colors.textPrimary};
    text-decoration: none;
    font-size: 0.95rem;
    position: relative;
    transition: color 0.2s ease-in-out;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background-color: ${props => props.theme.colors.accent};
      transform: scaleY(0);
      transition: transform 0.2s ease-in-out;
    }

    &:hover {
      color: ${props => props.theme.colors.primary};
      background-color: #E9ECEF;
      &::before {
        transform: scaleY(1);
      }
    }
`;

const AudioButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: calc(100% - 3rem);
  margin: 0 1.5rem;
  padding: 0.75rem 1rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #004c80;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: calc(100% - 3rem);
  margin: 0 1.5rem 0.5rem 1.5rem; /* Añadido margen inferior */
  padding: 0.75rem 1rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #004c80;
  }
`;

const Sidebar = ({ isOpen, onLinkClick, onOpenAudioPlayer, onOpenCertModal }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <NavGroup>
        <GroupTitle>Extras</GroupTitle>
             <ActionButton onClick={onOpenCertModal}>
          <FaCertificate />
          Info. Certificación
        </ActionButton>
        <AudioButton onClick={onOpenAudioPlayer}>
          <FaHeadphonesAlt />
          Audioresumen
        </AudioButton>
      </NavGroup>

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