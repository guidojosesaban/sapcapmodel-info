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

const Section12Testing = () => {
    return (
        <section id="section-12">
            <h2><span className="section-number">12</span>Pruebas y Calidad</h2>
            <Paragraph>
                Las pruebas unitarias verifican pequeñas partes aisladas de tu aplicación.
            </Paragraph>

            <SubHeading>Flujo de Trabajo para Pruebas</SubHeading>
            <ol>
                <li><strong>Instalar Dependencias:</strong> Instalas librerías como <strong>Jest</strong> y <strong>Chai</strong>.</li>
                <li><strong>Crear la Estructura:</strong> Las pruebas viven en una carpeta raíz llamada <code>/tests</code>.</li>
                <li><strong>Configurar el Comando:</strong> En `package.json`, añades un script para ejecutar las pruebas.</li>
            </ol>
            <CodeSnippet language="json">
            {`// en package.json
"scripts": {
    "test": "jest tests/"
}`}
            </CodeSnippet>
        </section>
    );
};

export default Section12Testing;