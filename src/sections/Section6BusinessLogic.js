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

const Section6BusinessLogic = () => {
    return (
        <section id="section-6">
            <h2><span className="section-number">6</span>Lógica de Negocio</h2>
            <Paragraph>
                Las aplicaciones empresariales reales necesitan lógica personalizada. CAP proporciona un marco de eventos para inyectar tu código en el ciclo de vida de una solicitud a través de "manejadores de eventos" en archivos JavaScript.
            </Paragraph>
            <Paragraph>
                Por convención, un archivo llamado `service.js` en la misma carpeta que `service.cds` será asociado automáticamente.
            </Paragraph>

            <SubHeading>El Ciclo de Vida de los Eventos: Before, On, After</SubHeading>
            <ol>
                <li><strong>Fase `before`</strong>: Ocurre antes de la operación. Ideal para <strong>validación</strong> de datos y comprobaciones de autorización.</li>
                <li><strong>Fase `on`</strong>: Es la ejecución principal. Aquí puedes <strong>sobrescribir</strong> la lógica por defecto de CAP (por ejemplo, para llamar a una API externa en lugar de a la BD).</li>
                <li><strong>Fase `after`</strong>: Ocurre después de la operación. Ideal para <strong>enriquecer</strong> los datos antes de enviarlos al cliente.</li>
            </ol>
            
            <CodeSnippet language="javascript">
                {`// en srv/processor-service.js
const cds = require('@sap/cds');

module.exports = (srv) => {
    const { Incidents } = srv.entities;

    // MANEJADOR 'BEFORE': Se ejecuta antes de crear una incidencia.
    srv.before('CREATE', Incidents, (req) => {
        const { title } = req.data;
        if (!title) {
            req.error(400, 'El título es obligatorio.');
        }
    });

    // MANEJADOR 'AFTER': Se ejecuta después de leer incidencias para añadir un campo virtual.
    srv.after('READ', Incidents, (incidents) => {
        const results = Array.isArray(incidents) ? incidents : [incidents];
        results.forEach(inc => {
            inc.isUrgent = inc.urgency_code === 'H';
        });
    });

    // MANEJADOR 'ON': Implementa la lógica para la acción 'closeIncident'.
    srv.on('closeIncident', async (req) => {
        const { incidentID } = req.data;
        await UPDATE(Incidents, incidentID).with({ status_code: 'C' });
        return { success: true };
    });
};`}
            </CodeSnippet>
        </section>
    );
};

export default Section6BusinessLogic;