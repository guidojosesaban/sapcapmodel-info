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

const Section12Deployment = () => {
    return (
        <section id="section-12">
            <h2><span className="section-number">12</span>Despliegue con MTA</h2>
            <Paragraph>
                El mecanismo estándar para desplegar aplicaciones complejas en SAP BTP es el modelo <strong>MTA (Multi-Target Application)</strong>. Un MTA permite describir todos los módulos de tu app (base de datos, servicio, UI) y sus dependencias en un único archivo, `mta.yaml`.
            </Paragraph>

            <SubHeading>El Plano del Despliegue: `mta.yaml`</SubHeading>
            <Paragraph>
                Este archivo, generado con `cds add mta`, define los <strong>módulos</strong> (el código a desplegar) y los <strong>recursos</strong> (los servicios de la plataforma que la app necesita, como la base de datos HANA o el servicio de seguridad XSUAA).
            </Paragraph>
            
            <SubHeading>El Proceso en Dos Pasos</SubHeading>
            <ol>
                <li><strong><code>mbt build</code></strong>: Este comando lee el `mta.yaml`, construye cada módulo y empaqueta todo en un único archivo `.mtar`.</li>
                <li><strong><code>cf deploy</code></strong>: Este comando sube el archivo `.mtar` a BTP. La plataforma se encarga de crear los servicios, desplegar los módulos y vincularlos.</li>
            </ol>
        </section>
    );
};

export default Section12Deployment;