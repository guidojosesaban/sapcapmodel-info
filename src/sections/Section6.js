import React from 'react';
import styled from '@emotion/styled';
import CodeSnippet from '../components/CodeSnippet';

const SubHeading = styled.h3`
  font-size: 1.5rem; color: ${props => props.theme.colors.primary}; margin-top: 2.5rem; margin-bottom: 1rem; border-bottom: 1px solid ${props => props.theme.colors.borderColor}; padding-bottom: 0.5rem;
`;
const Paragraph = styled.p`
  line-height: 1.7; color: ${props => props.theme.colors.textSecondary}; font-size: 1rem;
`;
const HighlightBox = styled.div`
  background-color: ${props => props.theme.colors.background}; padding: 1px 1.5rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid ${props => props.theme.colors.borderColor};
`;

const Section6 = () => {
    return (
        <section id="section-6">
            <h2><span className="section-number">6</span>Seguridad con XSUAA</h2>
            <Paragraph>
                La seguridad es un aspecto no negociable. En SAP BTP, el servicio central para la autenticación y autorización es el <strong>SAP Authorization and Trust Management service</strong>, comúnmente conocido como <strong>XSUAA</strong>.
            </Paragraph>
            <Paragraph>
                XSUAA es un proveedor de identidad basado en OAuth 2.0 que se encarga de dos tareas:
            </Paragraph>
            <ul>
                <li><strong>Autenticación:</strong> Verificar quién es el usuario (¿quién eres?), delegando en un proveedor de identidad de confianza (IdP).</li>
                <li><strong>Autorización:</strong> Determinar qué tiene permitido hacer ese usuario dentro de tu aplicación (¿qué puedes hacer?).</li>
            </ul>

            <SubHeading>El Modelo de Seguridad: La Jerarquía de Permisos</SubHeading>
            <ol>
                <li><strong>Ámbito (Scope):</strong> Es el permiso más granular y técnico, como "leer incidencias". <br/><strong>Analogía:</strong> Una llave 🔑 para una única puerta.</li>
                <li><strong>Rol (Role Template):</strong> Una agrupación lógica de ámbitos que representa una función de negocio, como "Procesador de Incidencias". <br/><strong>Analogía:</strong> Un llavero que agrupa varias llaves.</li>
                <li><strong>Colección de Roles (Role Collection):</strong> Una colección de roles. Este es el único artefacto que se asigna directamente a los usuarios en el BTP Cockpit. <br/><strong>Analogía:</strong> La persona 👤 a la que le das el llavero.</li>
            </ol>
            <HighlightBox>
                <Paragraph>La jerarquía es: <strong>Usuario → Colección de Roles → Rol → Ámbito</strong>.</Paragraph>
            </HighlightBox>

            <SubHeading>Inmersión Profunda: El Descriptor `xs-security.json`</SubHeading>
            <Paragraph>
                Este archivo es el plano de la seguridad de tu aplicación; le dice a XSUAA qué permisos existen y cómo se agrupan. Se genera con el comando <code>cds add xsuaa</code>, que lee las anotaciones de seguridad (ej: `@requires`, `@restrict`) de tus archivos CDS.
            </Paragraph>
            <CodeSnippet language="json">
            {`{
  // Nombre único de la app, usado para prefijar los ámbitos
  "xsappname": "incident-management",
  "tenant-mode": "dedicated",
  "description": "Security profile for Incident Management",

  // Lista de todos los permisos granulares (las "llaves")
  "scopes": [
    {
      "name": "$XSAPPNAME.IncidentProcessor",
      "description": "Permiso para procesar incidencias"
    },
    {
      "name": "$XSAPPNAME.IncidentManager",
      "description": "Permiso para gestionar incidencias"
    }
  ],

  // Lista de atributos que se pueden pasar en el token de seguridad
  "attributes": [
    {
      "name": "country",
      "description": "País del usuario",
      "valueType": "string"
    }
  ],

  // Plantillas de roles (los "llaveros")
  "role-templates": [
    {
      "name": "IncidentProcessor",
      "description": "Función de negocio para procesar incidencias",
      "scope-references": [ "$XSAPPNAME.IncidentProcessor" ]
    },
    {
      "name": "IncidentManager",
      "description": "Función de negocio para gestionar incidencias",
      "scope-references": [
        "$XSAPPNAME.IncidentManager",
        "$XSAPPNAME.IncidentProcessor"
       ],
       "attribute-references": [ "country" ]
    }
  ]
}`}
            </CodeSnippet>
            <Paragraph>
                Las <strong>colecciones de roles</strong> (`role-collections`) no se definen aquí, sino que se crean en el BTP Cockpit, donde un administrador puede agrupar las plantillas de roles (`role-templates`) y asignarlas a los usuarios finales.
            </Paragraph>
        </section>
    );
};

export default Section6;