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
const FileStructure = styled.div`
  background: ${props => props.theme.colors.codeBg};
  color: #f8f8f2;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  font-family: 'Courier New', Courier, monospace;
  pre { margin: 0; white-space: pre-wrap; }
`;
const InfoBox = styled.div`
  background-color: #E9ECEF;
  border-left: 4px solid ${props => props.theme.colors.primary};
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 4px 4px 0;
`;

const Section3Anatomy = () => {
    return (
        <section id="section-3">
            <h2><span className="section-number">3</span>Anatomía de un Proyecto</h2>
            <Paragraph>
                Un proyecto SAP CAP sigue el principio de <strong>"convención sobre configuración"</strong>, asumiendo una estructura estándar que le permite conectar todo automáticamente.
            </Paragraph>
            
            <SubHeading>La Estructura de Carpetas</SubHeading>
            <FileStructure>
                <pre>
                    {`mi-proyecto/
├── app/          -> Capa de Presentación (UI)
├── db/           -> Capa de Datos (Modelo de Dominio)
├── srv/          -> Capa de Servicio (Lógica de API)
└── package.json  -> Manifiesto del Proyecto`}
                </pre>
            </FileStructure>

            <SubHeading>Archivos Clave y su Propósito</SubHeading>
            <InfoBox>
                <h4><code>db/schema.cds</code></h4>
                <Paragraph>
                    <strong>Propósito:</strong> Es el plano de tu base de datos. Aquí defines las entidades (tablas), sus campos y las relaciones entre ellas de forma agnóstica a la base de datos.
                </Paragraph>
            </InfoBox>
            <InfoBox>
                <h4><code>srv/service.cds</code></h4>
                <Paragraph>
                    <strong>Propósito:</strong> Define la API que expones al mundo. Actúa como una fachada sobre tu modelo de datos, permitiéndote controlar qué entidades y campos son accesibles.
                </Paragraph>
            </InfoBox>
            <InfoBox>
                <h4><code>srv/service.js</code></h4>
                <Paragraph>
                    <strong>Propósito:</strong> Aquí es donde vive tu lógica de negocio personalizada. Implementas validaciones, enriquecimiento de datos y cualquier otra lógica que tu aplicación necesite.
                </Paragraph>
            </InfoBox>
            <InfoBox>
                <h4><code>package.json</code></h4>
                <Paragraph>
                    <strong>Propósito:</strong> Es el corazón del proyecto. Define el nombre, la versión, las dependencias de código (librerías) y, crucialmente, la configuración del runtime de CAP en la sección <code>"cds"</code>.
                </Paragraph>
            </InfoBox>
        </section>
    );
};

export default Section3Anatomy;