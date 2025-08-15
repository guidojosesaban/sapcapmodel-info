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

const Section13Fiori = () => {
    return (
        <section id="section-13">
            <h2><span className="section-number">13</span>SAP Fiori Elements</h2>
            <Paragraph>
                Una de las mayores ventajas de CAP es su integración perfecta con <strong>SAP Fiori Elements</strong>. Fiori Elements es un framework que puede generar UIs Fiori completas y ricas en funcionalidades directamente a partir de los metadatos de un servicio OData, sin necesidad de escribir código de UI.
            </Paragraph>
            <SubHeading>La Magia de las Anotaciones</SubHeading>
            <Paragraph>
                ¿Cómo funciona? Añadiendo "anotaciones" de UI a tus definiciones de servicio CDS. Estas anotaciones, que empiezan con `@UI`, actúan como instrucciones para Fiori Elements.
            </Paragraph>
            <CodeSnippet language="javascript">
            {`// en un archivo app/annotations.cds
using ProcessorService from '../srv/processor-service';

annotate ProcessorService.Incidents with @(
    UI: {
        // Instrucción: "Crea una tabla con estas columnas"
        LineItem: [
            { Value: title },
            { Value: status.descr, Label: 'Status' }
        ],
        // Instrucción: "Crea estos campos de filtro"
        SelectionFields: [ status_code ]
    }
);`}
            </CodeSnippet>
            <ProcessFlow>
                <ol>
                    <li>CAP inserta estas anotaciones en el documento `$metadata` del servicio OData.</li>
                    <li>Fiori Elements lee el `$metadata`.</li>
                    <li>Fiori Elements renderiza la tabla, los filtros y las páginas de detalle según las "instrucciones" que encontró.</li>
                </ol>
            </ProcessFlow>
        </section>
    );
};

export default Section13Fiori;