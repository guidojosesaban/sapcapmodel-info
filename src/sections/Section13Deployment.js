import React from 'react';
import styled from '@emotion/styled';

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

const Section13Deployment = () => {
    return (
        <section id="section-13">
            <h2><span className="section-number">13</span>Despliegue con MTA</h2>
            <Paragraph>
                El modelo <strong>MTA (Multi-Target Application)</strong> permite describir todos los módulos de tu app y sus dependencias en un único archivo, `mta.yaml`.
            </Paragraph>

            <SubHeading>El Rol del App Router</SubHeading>
            <Paragraph>
                El <strong>App Router</strong> actúa como el único punto de entrada para tu aplicación, dirigiendo las solicitudes al servicio correcto (UI o backend) e iniciando el flujo de inicio de sesión.
            </Paragraph>
            
            <SubHeading>El Proceso en Dos Pasos</SubHeading>
            <ol>
                <li><strong><code>mbt build</code></strong>: Empaqueta todo en un archivo `.mtar`.</li>
                <li><strong><code>cf deploy</code></strong>: Sube el archivo `.mtar` a BTP.</li>
            </ol>
        </section>
    );
};

export default Section13Deployment;