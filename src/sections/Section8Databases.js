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
const TableContainer = styled.div`
  @media (max-width: 992px) { overflow-x: auto; width: 100%; -webkit-overflow-scrolling: touch; }
`;
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  box-shadow: ${props => props.theme.shadows.md};
  font-size: 0.9rem;
  @media (max-width: 992px) { min-width: 700px; }
  th, td { border: 1px solid ${props => props.theme.colors.borderColor}; padding: 12px 15px; text-align: left; }
  thead th { background-color: ${props => props.theme.colors.background}; color: ${props => props.theme.colors.primary}; font-weight: 600; }
  tbody tr:nth-of-type(even) { background-color: ${props => props.theme.colors.background}; }
`;

const Section8Databases = () => {
    return (
        <section id="section-8">
            <h2><span className="section-number">8</span>Guía de Bases de Datos</h2>
            <Paragraph>
                Una de las mayores fortalezas de CAP es su abstracción de la base de datos. Defines tu modelo una vez en CDS, y CAP se encarga de traducirlo a diferentes bases de datos, permitiéndote cambiar de una a otra con una configuración mínima.
            </Paragraph>
            
            <SubHeading>Desarrollo Local vs. Producción</SubHeading>
            <Paragraph>
                CAP está optimizado para un ciclo de desarrollo rápido. Por ello, soporta bases de datos en memoria o basadas en archivos que no requieren instalación.
            </Paragraph>
            <TableContainer>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Base de Datos</th>
                            <th>Entorno Típico</th>
                            <th>Ventajas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>SQLite</strong></td>
                            <td>Desarrollo (Node.js)</td>
                            <td>Basada en archivo, configuración cero, ideal para prototipado rápido.</td>
                        </tr>
                        <tr>
                            <td><strong>H2</strong></td>
                            <td>Desarrollo (Java)</td>
                            <td>Base de datos en memoria, muy rápida para pruebas.</td>
                        </tr>
                        <tr>
                            <td><strong>SAP HANA</strong></td>
                            <td>Producción</td>
                            <td>Alto rendimiento, capacidades analíticas avanzadas, integración nativa con BTP.</td>
                        </tr>
                    </tbody>
                </StyledTable>
            </TableContainer>

            <SubHeading>Desplegando a SAP HANA</SubHeading>
            <Paragraph>
                El comando `cds deploy --to hana` es el encargado de desplegar tu modelo de datos a una base de datos SAP HANA. Este comando compila tus archivos `.cds` a artefactos de HANA (como `.hdbtable` y `.hdbview`) y los sube a un "HDI Container".
            </Paragraph>
            <Paragraph>
                El <strong>HDI Container</strong> es un esquema de base de datos aislado y gestionado por la plataforma. Asegura que los objetos de tu aplicación (tablas, vistas, etc.) no entren en conflicto con los de otras aplicaciones que puedan compartir la misma base de datos HANA.
            </Paragraph>
        </section>
    );
};

export default Section8Databases;