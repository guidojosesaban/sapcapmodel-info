import React from 'react';
import styled from '@emotion/styled';
import CodeSnippet from '../components/CodeSnippet';

const SubHeading = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding-bottom: 0.5rem;
`;
const Paragraph = styled.p`
  line-height: 1.7;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1rem;
`;
const HighlightBox = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: 1px 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border: 1px solid ${props => props.theme.colors.borderColor};
`;

const Section9Security = () => {
    return (
        <section id="section-9">
            <h2><span className="section-number">9</span>Seguridad con XSUAA</h2>
            <Paragraph>
                En SAP BTP, el servicio central para la seguridad es el <strong>SAP Authorization and Trust Management service (XSUAA)</strong>. Se encarga de la <strong>autenticación</strong> (verificar quién eres) y la <strong>autorización</strong> (determinar qué puedes hacer).
            </Paragraph>

            <SubHeading>El Modelo de Autorización</SubHeading>
            <ol>
                <li><strong>Ámbito (Scope):</strong> Es el permiso más granular y técnico (ej: "leer incidencias"). <strong>Analogía:</strong> Una llave 🔑.</li>
                <li><strong>Rol (Role Template):</strong> Una agrupación lógica de ámbitos (ej: "Procesador de Incidencias"). <strong>Analogía:</strong> Un llavero.</li>
                <li><strong>Colección de Roles (Role Collection):</strong> El artefacto que se asigna a los usuarios en el BTP Cockpit. <strong>Analogía:</strong> La persona 👤 a la que le das el llavero.</li>
            </ol>
            <HighlightBox>
                <Paragraph>La jerarquía es: <strong>Usuario → Colección de Roles → Rol → Ámbito</strong>.</Paragraph>
            </HighlightBox>

            <SubHeading>El Descriptor `xs-security.json`</SubHeading>
            <Paragraph>
                Este archivo, generado con `cds add xsuaa`, es el plano de la seguridad de tu aplicación. Le dice a XSUAA qué permisos existen y cómo se agrupan.
            </Paragraph>
            <CodeSnippet language="json">
            {`{
  "xsappname": "incident-management",
  "tenant-mode": "dedicated",
  "scopes": [
    {
      "name": "$XSAPPNAME.IncidentProcessor",
      "description": "Permiso para procesar incidencias"
    }
  ],
  "role-templates": [
    {
      "name": "IncidentProcessor",
      "description": "Función de negocio para procesar incidencias",
      "scope-references": [ "$XSAPPNAME.IncidentProcessor" ]
    }
  ]
}`}
            </CodeSnippet>
        </section>
    );
};

export default Section9Security;