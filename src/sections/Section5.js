import React from 'react';
import styled from '@emotion/styled';
import CodeSnippet from '../components/CodeSnippet';

const SubHeading = styled.h3`
  font-size: 1.5rem; color: ${props => props.theme.colors.primary}; margin-top: 2.5rem; margin-bottom: 1rem; border-bottom: 1px solid ${props => props.theme.colors.borderColor}; padding-bottom: 0.5rem;
`;
const Paragraph = styled.p`
  line-height: 1.7; color: ${props => props.theme.colors.textSecondary}; font-size: 1rem;
`;

const Section5 = () => {
    return (
        <section id="section-5">
            <h2><span className="section-number">5</span>Lógica de Negocio</h2>
            <Paragraph>
                Las aplicaciones empresariales reales necesitan lógica de negocio personalizada. CAP proporciona un marco de eventos para inyectar tu lógica a través de <strong>manejadores de eventos (Event Handlers)</strong> en archivos `.js`.
            </Paragraph>

            <SubHeading>El Ciclo de Vida de los Eventos en CAP</SubHeading>
            <Paragraph>
                CAP procesa las solicitudes en tres fases:
            </Paragraph>
            <ol className='ol-list'>
                <li><strong>Fase BEFORE:</strong> Ideal para <strong>validación</strong> de datos de entrada.</li>
                <li><strong>Fase ON:</strong> Es la ejecución principal. Aquí puedes <strong>sobrescribir</strong> la lógica por defecto.</li>
                <li><strong>Fase AFTER:</strong> Ideal para <strong>enriquecer</strong> los datos antes de enviarlos al cliente.</li>
            </ol>
            
            <SubHeading>Validación con <code>srv.before()</code></SubHeading>
            <Paragraph>Se usa para validar los datos de entrada antes de que toquen la base de datos.</Paragraph>
            <CodeSnippet language="javascript">
                {`// En srv/service.js
const cds = require('@sap/cds');
module.exports = (srv) => {
    const { Incidents } = srv.entities;
    srv.before('CREATE', Incidents, (req) => {
        const { title } = req.data;
        if (title.toLowerCase().includes('urgente')) {
            // req.error() detiene el proceso y devuelve un error
            return req.error(400, 'Use el campo Urgencia, no el título.');
        }
    });
};`}
            </CodeSnippet>
        </section>
    );
};

export default Section5;