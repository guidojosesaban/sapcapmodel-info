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
const ProcessFlow = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
`;

const Section14Fiori = () => {
    return (
        <section id="section-14">
            <h2><span className="section-number">14</span>SAP Fiori Elements</h2>
            <Paragraph>
                <strong>SAP Fiori Elements</strong> puede generar UIs Fiori completas directamente a partir de los metadatos de un servicio OData, sin necesidad de escribir código de UI.
            </Paragraph>
            <SubHeading>La Magia de las Anotaciones</SubHeading>
            <Paragraph>
                Añadiendo "anotaciones" de UI (<code>@UI</code>) a tus definiciones de servicio CDS, le das instrucciones a Fiori Elements sobre cómo construir la interfaz.
            </Paragraph>
            <CodeSnippet language="javascript">
            {`// en app/annotations.cds
annotate ProcessorService.Incidents with @(
    UI: {
        LineItem: [ { Value: title }, { Value: status.descr } ],
        SelectionFields: [ status_code ]
    }
);`}
            </CodeSnippet>
        </section>
    );
};

export default Section14Fiori;