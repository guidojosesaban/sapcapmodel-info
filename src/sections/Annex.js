import React from 'react';
import styled from '@emotion/styled';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  box-shadow: ${props => props.theme.shadows.md};
  font-size: 0.9rem;

  th, td {
    border: 1px solid ${props => props.theme.colors.borderColor};
    padding: 12px 15px;
    text-align: left;
  }
  
  thead th {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
  }

  tbody tr:nth-of-type(even) {
    background-color: ${props => props.theme.colors.background};
  }
  
  .table-subheader {
    background-color: #e2e8f0;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }

  code {
    background-color: #e2e8f0;
    padding: 2px 4px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
    color: #334155;
  }
`;

const Annex = () => {
    return (
        <section id="annex">
            <h2>Anexo: Glosario de Comandos y Archivos</h2>
            <StyledTable>
              <thead>
                <tr>
                  <th>Comando / Archivo</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr><td colSpan="2" className="table-subheader">Comandos de la CLI</td></tr>
                <tr><td><code>cds init &lt;nombre&gt;</code></td><td>Inicializa un nuevo proyecto CAP.</td></tr>
                <tr><td><code>cds watch</code></td><td>Inicia un servidor de desarrollo local con recarga automática y mocking.</td></tr>
                <tr><td><code>cds add &lt;feature&gt;</code></td><td>Añade configuración para una característica (ej: hana, xsuaa, mta).</td></tr>
                <tr><td><code>cds import &lt;archivo&gt;</code></td><td>Importa una definición de servicio externo y la convierte a .cds.</td></tr>
                <tr><td><code>mbt build</code></td><td>Construye un archivo .mtar a partir del proyecto y su mta.yaml.</td></tr>
                <tr><td><code>cf deploy &lt;archivo.mtar&gt;</code></td><td>Despliega un archivo .mtar en SAP BTP Cloud Foundry.</td></tr>
                <tr><td colSpan="2" className="table-subheader">Archivos del Proyecto</td></tr>
                <tr><td><code>package.json</code></td><td>Manifiesto del proyecto. Define dependencias, scripts y la configuración central de CAP.</td></tr>
                <tr><td><code>.cdsrc.json</code></td><td>Archivo opcional para externalizar la configuración de la sección `cds` del `package.json`.</td></tr>
                <tr><td><code>db/schema.cds</code></td><td>Define el modelo de datos principal de la aplicación: entidades, tipos y relaciones.</td></tr>
                <tr><td><code>srv/service.js</code></td><td>Implementa la lógica de negocio personalizada para un servicio.</td></tr>
                <tr><td><code>xs-security.json</code></td><td>El descriptor de seguridad. Define los ámbitos y roles para el servicio XSUAA.</td></tr>
                <tr><td><code>mta.yaml</code></td><td>El descriptor de despliegue de la Multi-Target Application.</td></tr>
              </tbody>
            </StyledTable>
        </section>
    );
};

export default Annex;