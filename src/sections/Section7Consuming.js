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

const Section7Consuming = () => {
    return (
        <section id="section-7">
            <h2><span className="section-number">7</span>Consumo de Servicios Externos</h2>
            <Paragraph>
                Las aplicaciones rara vez viven aisladas. A menudo, necesitan consumir datos de otros sistemas, como una API de SAP S/4HANA o un servicio de terceros. CAP simplifica enormemente este proceso.
            </Paragraph>

            <SubHeading>Importación y Definición del Servicio Remoto</SubHeading>
            <Paragraph>
                Para consumir una API OData externa, primero importas su definición (archivo `$metadata`) a tu proyecto con el comando `cds import`. Esto genera un archivo `.cds` que describe el servicio externo.
            </Paragraph>
            <Paragraph>
                Luego, configuras este servicio en tu `package.json` para que CAP sepa cómo conectarse a él en producción.
            </Paragraph>
            <CodeSnippet language="json">
            {`// en package.json, dentro de "cds": { "requires": { ... } }
"API_BUSINESS_PARTNER": {
    "kind": "odata-v2",
    "model": "srv/external/API_BUSINESS_PARTNER",
    "credentials": {
        "destination": "MyS4HANA"
    }
}`}
            </CodeSnippet>

            <SubHeading>Uso del Servicio en la Lógica de Negocio</SubHeading>
            <Paragraph>
                Una vez configurado, puedes interactuar con el servicio externo de forma nativa en tu lógica de negocio, usando las mismas APIs de CAP que usas para tu propia base de datos.
            </Paragraph>
            <CodeSnippet language="javascript">
            {`// en srv/processor-service.js
module.exports = async (srv) => {
    // Conectar al servicio remoto
    const bupa = await cds.connect.to('API_BUSINESS_PARTNER');

    srv.on('READ', 'Suppliers', async (req) => {
        // Ejecutar una consulta en el servicio remoto
        return bupa.run(req.query);
    });
}`}
            </CodeSnippet>
        </section>
    );
};

export default Section7Consuming;