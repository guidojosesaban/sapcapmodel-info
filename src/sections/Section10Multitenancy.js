import React from 'react';
import styled from '@emotion/styled';

const Paragraph = styled.p`
  line-height: 1.7;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1rem;
`;
const AnalogyBox = styled.div`
  background-color: #F6FFED; 
  border-left: 4px solid #52C41A; 
  padding: 1rem 1.5rem; 
  margin: 1.5rem 0; 
  border-radius: 0 4px 4px 0;
`;

const Section10Multitenancy = () => {
    return (
        <section id="section-10">
            <h2><span className="section-number">10</span>Multitenancy</h2>
            <Paragraph>
                Multitenancy es la cualidad que permite a una única instancia de una aplicación servir a múltiples clientes (o "tenants") de forma segura y aislada. Es la base de la mayoría de las aplicaciones SaaS (Software as a Service).
            </Paragraph>
            <AnalogyBox>
                <strong>Analogía del Edificio de Apartamentos 🏢</strong>
                <Paragraph>
                    Una aplicación single-tenant es como una casa unifamiliar: un solo cliente vive ahí. Una aplicación multi-tenant es como un edificio de apartamentos: muchos inquilinos (tenants) comparten la misma infraestructura (el edificio), pero cada uno tiene su propio espacio privado y seguro (su apartamento).
                </Paragraph>
            </AnalogyBox>
            <Paragraph>
                CAP proporciona soporte nativo para construir aplicaciones multi-tenant en SAP BTP. Se encarga de aislar los datos de cada tenant en la base de datos y de dirigir las solicitudes al tenant correcto, basándose en la información del usuario que ha iniciado sesión.
            </Paragraph>
        </section>
    );
};

export default Section10Multitenancy;