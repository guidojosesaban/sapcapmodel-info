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

const Section5Services = () => {
    return (
        <section id="section-5">
            <h2><span className="section-number">5</span>Provisión de Servicios</h2>
            <Paragraph>
                Una vez que tienes un modelo de datos, necesitas exponerlo de forma segura y estandarizada. Aquí es donde entra la capa de servicio. CAP brilla al generar automáticamente servicios <strong>OData</strong> a partir de definiciones simples en CDS.
            </Paragraph>

            <SubHeading>Definición de Servicios en CDS</SubHeading>
            <Paragraph>
                En la carpeta `srv/`, creas un archivo `.cds` para definir tu servicio. Generalmente, no expones tus tablas de base de datos directamente, sino "proyecciones" sobre ellas. Una proyección es como una vista o una fachada que te permite elegir qué entidades y campos mostrar, y si son de solo lectura.
            </Paragraph>
            <CodeSnippet language="javascript">
            {`// en srv/processor-service.cds
using { sap.capire.incidents as my } from '../db/schema';

// 'service' es la palabra clave para definir un punto de entrada de API
service ProcessorService {

    // Expone la entidad 'Incidents' como una proyección. Se habilitan todas las operaciones CRUD.
    entity Incidents as projection on my.Incidents;

    // Expone 'Urgency' y 'Status', pero solo para lectura.
    @readonly
    entity Urgencies as projection on my.Urgency;

    @readonly
    entity Statuses as projection on my.Status;

    // Define una 'acción' personalizada que puede ser llamada en el servicio
    action closeIncident (incidentID: UUID);
}`}
            </CodeSnippet>
            <Paragraph>
                Con solo este código, CAP inicia un servidor web con un endpoint OData V4 que ya soporta consultas complejas como `$filter`, `$expand` y `$orderby` sin que escribas una sola línea de lógica de API.
            </Paragraph>
        </section>
    );
};

export default Section5Services;