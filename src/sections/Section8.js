import React from 'react';
import styled from '@emotion/styled';
import CodeSnippet from '../components/CodeSnippet';

const SubHeading = styled.h3`
  font-size: 1.5rem; color: ${props => props.theme.colors.primary}; margin-top: 2.5rem; margin-bottom: 1rem; border-bottom: 1px solid ${props => props.theme.colors.borderColor}; padding-bottom: 0.5rem;
`;
const Paragraph = styled.p`
  line-height: 1.7; color: ${props => props.theme.colors.textSecondary}; font-size: 1rem;
`;

const Section8 = () => {
    return (
        <section id="section-8">
            <h2><span className="section-number">8</span>Despliegue con MTA</h2>
            <Paragraph>
                El mecanismo estándar para desplegar aplicaciones complejas en Cloud Foundry es el modelo <strong>MTA (Multi-Target Application)</strong>. Un MTA permite describir todos los módulos de tu app y sus dependencias en un único archivo descriptor, para luego empaquetarlo todo en un archivo <code>.mtar</code> y desplegarlo de una sola vez.
            </Paragraph>

            <SubHeading>El Plano del Despliegue: <code>mta.yaml</code></SubHeading>
            <Paragraph>
                El corazón de un MTA es el archivo <code>mta.yaml</code>. Puedes generar este archivo con el comando:
            </Paragraph>
            <CodeSnippet language="bash">
                {`cds add mta`}
            </CodeSnippet>
            <Paragraph>Este archivo define los <strong>módulos</strong> (piezas de código a desplegar) y los <strong>recursos</strong> (servicios de BTP que la app necesita, como la base de datos HANA o el servicio XSUAA).</Paragraph>
            

            <SubHeading>El Proceso de Despliegue en Dos Pasos</SubHeading>
            <ol>
                <li>
                    <strong><code>mbt build</code>:</strong> Construye el proyecto y empaqueta todo en un archivo <code>.mtar</code>.
                </li>
                <li>
                    <strong><code>cf deploy</code>:</strong> Sube el archivo <code>.mtar</code> a BTP, donde la plataforma se encarga de crear los servicios, desplegar los módulos y vincularlos.
                </li>
            </ol>
            <CodeSnippet language="bash">
                {`# 1. Construir el MTA
mbt build -p=cf -t=./
# 2. Desplegar
cf deploy mta_archives/incident-management_1.0.0.mtar`}
            </CodeSnippet>
        </section>
    );
};

export default Section8;