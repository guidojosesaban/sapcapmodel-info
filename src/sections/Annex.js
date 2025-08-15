import React from 'react';
import styled from '@emotion/styled';

const TableContainer = styled.div`
  @media (max-width: 992px) { overflow-x: auto; width: 100%; -webkit-overflow-scrolling: touch; }
`;
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  box-shadow: ${props => props.theme.shadows.md};
  font-size: 0.9rem;
  @media (max-width: 992px) { min-width: 600px; }
  th, td { border: 1px solid ${props => props.theme.colors.borderColor}; padding: 12px 15px; text-align: left; }
  thead th { background-color: ${props => props.theme.colors.background}; color: ${props => props.theme.colors.primary}; font-weight: 600; }
  tbody tr:nth-of-type(even) { background-color: ${props => props.theme.colors.background}; }
  .table-subheader { background-color: #e2e8f0; font-weight: 600; color: ${props => props.theme.colors.primary}; }
  code { background-color: #e2e8f0; padding: 2px 4px; border-radius: 4px; font-family: 'Courier New', Courier, monospace; color: #334155; }
`;

const Annex = () => {
    return (
        <section id="annex">
            <h2>Anexo: Glosario y Herramientas</h2>
            <TableContainer>
              <StyledTable>
                <thead>
                  <tr>
                    <th>Comando / Archivo / Concepto</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td colSpan="2" className="table-subheader">Comandos de la CLI (`cds ...`)</td></tr>
                  <tr><td><code>init</code></td><td>Inicializa un nuevo proyecto CAP.</td></tr>
                  <tr><td><code>watch</code></td><td>Inicia un servidor de desarrollo local con recarga automática.</td></tr>
                  <tr><td><code>add</code></td><td>Añade configuración para una característica (ej: `cds add hana`).</td></tr>
                  <tr><td><code>deploy</code></td><td>Despliega el modelo de datos a la base de datos (ej: `cds deploy --to hana`).</td></tr>
                  <tr><td colSpan="2" className="table-subheader">Archivos Clave</td></tr>
                  <tr><td><code>package.json</code></td><td>Manifiesto del proyecto. Define dependencias, scripts y la configuración central de CAP.</td></tr>
                  <tr><td><code>.cdsrc.json</code></td><td>Archivo opcional para externalizar la configuración de la sección `cds` del `package.json`.</td></tr>
                  <tr><td><code>db/schema.cds</code></td><td>Define el modelo de datos principal de la aplicación.</td></tr>
                  <tr><td><code>srv/service.js</code></td><td>Implementa la lógica de negocio personalizada.</td></tr>
                  <tr><td><code>xs-security.json</code></td><td>Descriptor de seguridad que define los ámbitos y roles para el servicio XSUAA.</td></tr>
                  <tr><td><code>mta.yaml</code></td><td>Descriptor de despliegue de la Multi-Target Application.</td></tr>
                </tbody>
              </StyledTable>
            </TableContainer>
        </section>
    );
};

export default Annex;