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
const AnalogyBox = styled.div`
  background-color: #E9ECEF;
  border-left: 4px solid ${props => props.theme.colors.primary};
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 4px 4px 0;
`;

const Section2Tools = () => {
    return (
        <section id="section-2">
            <h2><span className="section-number">2</span>Herramientas y Entorno</h2>
            <Paragraph>
                Para empezar a construir en SAP BTP, necesitas conocer tu caja de herramientas: el entorno de desarrollo y los entornos de ejecución donde vivirá tu aplicación.
            </Paragraph>

            <SubHeading>Entorno de Desarrollo: SAP Business Application Studio (BAS)</SubHeading>
            <Paragraph>
                <strong>SAP Business Application Studio (BAS)</strong> es el IDE (Entorno de Desarrollo Integrado) recomendado por SAP. Es una herramienta potente y basada en la nube, accesible desde tu navegador. Viene preconfigurado con todo lo necesario para el desarrollo con CAP, Fiori y HANA, lo que acelera enormemente la configuración inicial.
            </Paragraph>

            <SubHeading>Entornos de Ejecución: Cloud Foundry vs. Kyma</SubHeading>
            <Paragraph>
                Tu aplicación necesita un lugar donde ejecutarse. SAP BTP ofrece dos entornos principales:
            </Paragraph>
            <AnalogyBox>
                <strong>Cloud Foundry: El Apartamento Amueblado 🛋️</strong>
                <Paragraph>
                    Cloud Foundry es un entorno de Plataforma como Servicio (PaaS) que abstrae toda la infraestructura. Tú simplemente "empujas" tu código, y la plataforma se encarga de compilarlo, empaquetarlo y ejecutarlo. No necesitas saber de Docker o Kubernetes. Es ideal para empezar por su simplicidad.
                </Paragraph>
            </AnalogyBox>
            <AnalogyBox>
                <strong>Kyma: El Terreno con Servicios 🏗️</strong>
                <Paragraph>
                    Kyma está basado en Kubernetes, el estándar de la industria para la orquestación de contenedores. Te da un control mucho más granular, pero requiere que empaquetes tu aplicación en contenedores Docker. Es ideal para arquitecturas de microservicios complejas.
                </Paragraph>
            </AnalogyBox>
        </section>
    );
};

export default Section2Tools;