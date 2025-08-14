import React from 'react';
import styled from '@emotion/styled';

const SidebarContainer = styled.aside`
  /* --- ESTILOS PARA DESKTOP --- */
  width: 300px;
  background-color: ${props => props.theme.colors.contentBg};
  padding: 1.5rem;
  border-right: 1px solid ${props => props.theme.colors.borderColor};
  position: sticky;
    top: 4rem;
  height: calc(100vh - 81px);
  overflow-y: auto;
  transition: transform 0.3s ease-in-out; /* Añadimos transición suave */

  /* --- MEDIA QUERY PARA RESPONSIVE EN MÓVIL --- */
  @media (max-width: 992px) {
    position: fixed; /* 1. Se posiciona sobre el contenido */
    top: 4rem;
    left: 0;
    height: calc(100vh - 4rem);
    z-index: 900;
    box-shadow: ${props => props.theme.shadows.md};
    border-right: none;
    
    /* 2. Oculto por defecto fuera de la pantalla */
    transform: translateX(-100%); 
    
    /* 3. Se hace visible cuando la prop 'isOpen' es true */
    ${props => props.isOpen && `
      transform: translateX(0);
    `}
  }

  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: 0;
    border-bottom: 2px solid ${props => props.theme.colors.accent};
    padding-bottom: 0.5rem;
  }

  nav ul { list-style: none; padding: 0; margin: 0; }
  nav li a {
    display: block; padding: 0.6rem 1rem; color: ${props => props.theme.colors.textSecondary};
    text-decoration: none; border-radius: 6px; font-size: 0.9rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.primary};
      transform: translateX(5px);
    }
  }
`;

// 4. Recibimos las nuevas props: isOpen y onLinkClick
const Sidebar = ({ isOpen, onLinkClick }) => {
  
  // Lista de enlaces para no repetir el código
  const navLinks = [
    { href: "#section-1", text: "1. El Panorama General" },
    { href: "#section-2", text: "2. Anatomía de un Proyecto CAP" },
    { href: "#section-3", text: "3. Core Data Services (CDS)" },
    { href: "#section-4", text: "4. OData: La API Universal" },
    { href: "#section-5", text: "5. Lógica de Negocio" },
    { href: "#section-6", text: "6. Seguridad con XSUAA" },
    { href: "#section-7", text: "7. Conexiones y Pruebas" },
    { href: "#section-8", text: "8. Despliegue con MTA" },
    { href: "#section-9", text: "9. SAP Build Work Zone" },
    { href: "#annex", text: "Anexo: Glosario" },
  ];

  return (
    // 5. Pasamos la prop 'isOpen' al contenedor estilizado
    <SidebarContainer isOpen={isOpen}>
      <h3>Índice de Contenidos</h3>
      <nav>
        <ul>
          {navLinks.map(link => (
            <li key={link.href}>
              {/* 6. Añadimos el evento onClick a cada enlace para cerrar el menú */}
              <a href={link.href} onClick={onLinkClick}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </SidebarContainer>
  );
};

export default Sidebar;