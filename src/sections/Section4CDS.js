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
const InfoBox = styled.div`
  background-color: #E9ECEF;
  border-left: 4px solid ${props => props.theme.colors.primary};
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 4px 4px 0;
`;

const Section4CDS = () => {
    return (
        <section id="section-4">
            <h2><span className="section-number">4</span>Modelado de Dominio con CDS</h2>
            <Paragraph>
                En el corazón de cada aplicación CAP se encuentra su modelo de dominio, y el lenguaje para esculpirlo es <strong>Core Data Services (CDS)</strong>. CDS es mucho más que un simple lenguaje de definición de datos; es un marco conceptual para definir modelos de datos semánticos, es decir, con significado de negocio.
            </Paragraph>
            <Paragraph>
                Piensa en CDS como un plano arquitectónico. En lugar de escribir SQL, describes tus entidades de negocio, y CAP se encarga de traducirlo a artefactos de base de datos y servicios OData.
            </Paragraph>
            
            <SubHeading>Bloques Fundamentales: Entidades, Tipos y Aspectos</SubHeading>
            <InfoBox>
                <ul>
                    <li><strong>Entidad (<code>entity</code>):</strong> Representa un conjunto de datos estructurados, análogo a una tabla en una base de datos.</li>
                    <li><strong>Tipo (<code>type</code>):</strong> Permite definir tipos de datos reutilizables (simples o estructurados) para mejorar la consistencia.</li>
                    <li><strong>Aspecto (<code>aspect</code>):</strong> Es una colección reutilizable de campos que se pueden "mezclar" en múltiples entidades. CAP proporciona aspectos comunes como <code>cuid</code> (añade un ID) y <code>managed</code> (añade campos de auditoría).</li>
                </ul>
            </InfoBox>
            <CodeSnippet language="javascript">
            {`// en db/schema.cds
namespace sap.capire.incidents;
using { cuid, managed } from '@sap/cds/common';

entity Incidents: cuid, managed {
    title    : String(100);
    urgency  : Association to Urgency;
    status   : Association to Status;
    conversation : Composition of many {
        key ID   : UUID;
        author   : String;
        message  : String;
    }
}

entity Urgency : cuid { descr: String; }
entity Status : cuid { descr: String; }`}
            </CodeSnippet>
        </section>
    );
};

export default Section4CDS;