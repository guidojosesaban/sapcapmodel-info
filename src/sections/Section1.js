import React from 'react';
import styled from '@emotion/styled';
import SAPCAPIMG from '../assets/images/01.png'; // Assuming you have an image for the architecture

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
const ImageContainer = styled.div`
  margin: 2rem 0;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const Section1 = () => {
    return (
        <section id="section-1">
            <h2><span className="section-number">1</span>¿Qué es SAP CAP?</h2>
            <Paragraph>
                El <strong>Modelo de Programación de Aplicaciones en la Nube de SAP (SAP Cloud Application Programming Model - CAP)</strong> es un marco de trabajo integral que contiene lenguajes, librerías y herramientas para construir aplicaciones y servicios de nivel empresarial. Está diseñado para guiar a los desarrolladores con las mejores prácticas y reducir la cantidad de código repetitivo.
            </Paragraph>
            
            <SubHeading>La Arquitectura de CAP</SubHeading>
            <Paragraph>
                La mejor forma de entender CAP es viendo dónde encaja en el ecosistema de desarrollo en la nube. CAP actúa como un "corazón" o "cerebro" que conecta diferentes partes de una aplicación moderna.
            </Paragraph>

            <ImageContainer>
                <img src={SAPCAPIMG} alt="Arquitectura de SAP Cloud Application Programming Model" />
            </ImageContainer>

            <Paragraph>
                Como muestra el diagrama, CAP se sitúa en el centro, orquestando:
            </Paragraph>
            <ul>
                <li><strong>Protocolos de Comunicación:</strong> CAP puede exponer y consumir APIs a través de protocolos estándar como OData, REST, GraphQL y sistemas de mensajería asíncrona como WebHooks o AMQP.</li>
                <li><strong>Front-ends:</strong> Proporciona los datos necesarios para cualquier tipo de interfaz de usuario, ya sean aplicaciones web (UIs), analíticos, flujos de trabajo (workflows) o aplicaciones móviles.</li>
                <li><strong>Servicios de Plataforma:</strong> Se integra de forma nativa con servicios esenciales de la plataforma en la nube (como SAP BTP), incluyendo bases de datos, sistemas de mensajería, gestión de identidades y autenticación, y herramientas de monitoreo.</li>
                <li><strong>Plataformas e Infraestructuras:</strong> Las aplicaciones CAP son portátiles y pueden desplegarse en diferentes infraestructuras como Cloud Foundry, Kubernetes u On-Premise.</li>
            </ul>
        </section>
    );
};

export default Section1;
