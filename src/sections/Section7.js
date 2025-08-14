import React from 'react';
import styled from '@emotion/styled';
import CodeSnippet from '../components/CodeSnippet';

const SubHeading = styled.h3`
  font-size: 1.5rem; color: ${props => props.theme.colors.primary}; margin-top: 2.5rem; margin-bottom: 1rem; border-bottom: 1px solid ${props => props.theme.colors.borderColor}; padding-bottom: 0.5rem;
`;
const Paragraph = styled.p`
  line-height: 1.7; color: ${props => props.theme.colors.textSecondary}; font-size: 1rem;
`;

const Section7 = () => {
    return (
        <section id="section-7">
            <h2><span className="section-number">7</span>Conexiones y Pruebas</h2>
            <Paragraph>Las aplicaciones empresariales rara vez viven en una isla. CAP facilita la conexión con sistemas externos y, lo que es igualmente importante, permite un desarrollo local rápido sin esas dependencias.</Paragraph>

            <SubHeading>Consumiendo APIs Remotas con <code>cds import</code></SubHeading>
            <Paragraph>Para consumir una API OData externa, necesitas su documento de metadatos (archivo <code>.edmx</code>) y luego usar la CLI de CAP para convertirlo en un archivo <code>.cds</code>.</Paragraph>
            <CodeSnippet language="bash">
                {`# Convierte la definición externa en un archivo .cds
cds import srv/external/ProductCatalog.edmx`}
            </CodeSnippet>

            <SubHeading>Desarrollo en Modo Avión: Mocking y Datos CSV</SubHeading>
            <Paragraph>Una de las características más productivas de CAP es su capacidad para <strong>simular (mock)</strong> dependencias. Cuando ejecutas <code>cds watch</code>, CAP activa el mocking por defecto. Para poblar los servicios simulados con datos, CAP puede leerlos desde archivos <code>.csv</code> al arrancar, siguiendo una convención de nombres y ubicación específica (ej. <code>db/data/</code>).</Paragraph>
            <CodeSnippet language="csv">
                {`// db/data/sap.capire.incidents-Status.csv
code;descr;criticality
N;New;3
I;In Process;2
C;Closed;1`}
            </CodeSnippet>
            
            <SubHeading>Asegurando la Calidad: Pruebas Unitarias</SubHeading>
            <Paragraph>Las pruebas unitarias son esenciales. El flujo típico en un proyecto CAP Node.js es instalar un framework de pruebas como Jest, crear las pruebas en una carpeta <code>/tests</code> y configurar el comando de ejecución en <code>package.json</code>.</Paragraph>
        </section>
    );
};

export default Section7;