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
const ImageContainer = styled.div`
  margin: 2rem 0;
  img { max-width: 100%; height: auto; border-radius: 8px; box-shadow: ${props => props.theme.shadows.md}; }
`;
const InfoBox = styled.div`
  background-color: #E6F7FF;
  border-left: 4px solid #1890FF;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 4px 4px 0;
`;

const Section2 = () => {
    return (
        <section id="section-2">
            <h2><span className="section-number">2</span>Filosofía y Principios</h2>
            <Paragraph>
                CAP no es solo un conjunto de herramientas, sino una filosofía de desarrollo que busca maximizar la productividad y minimizar la complejidad. Esto se logra a través de un ciclo de vida claro y un conjunto de principios rectores.
            </Paragraph>

            <ImageContainer>
                <img src="http://googleusercontent.com/file_content/1" alt="Ciclo de vida y principios de desarrollo en SAP CAP" />
            </ImageContainer>

            <SubHeading>El Ciclo de Vida: Setup, Develop, Deploy, Operate</SubHeading>
            <Paragraph>
                El desarrollo con CAP es un proceso rápido y ágil. El ciclo se puede resumir en cuatro fases principales, donde pasamos de la configuración a la operación en tiempos muy cortos.
            </Paragraph>

            <SubHeading>Principios Clave del Desarrollo con CAP</SubHeading>
            <InfoBox>
                <ul>
                    <li><strong>Trabajar en "Inner Loops":</strong> El objetivo es mantener ciclos de desarrollo muy cortos (de segundos) para probar cambios rápidamente. Esto se logra con comandos como `cds watch`, que reinicia el servidor automáticamente.</li>
                    <li><strong>Convención sobre Configuración:</strong> CAP asume configuraciones estándar, lo que reduce la necesidad de archivos de configuración extensos. Solo se añade configuración cuando es estrictamente necesario (`cds add ...`).</li>
                    <li><strong>Simulación (Mocking) de Servicios:</strong> Con `cds mock`, puedes simular servicios remotos y de plataforma, permitiéndote desarrollar toda tu aplicación de forma local sin dependencias externas.</li>
                    <li><strong>Contratos y APIs Primero:</strong> El desarrollo se centra en definir primero los modelos de datos y las APIs. Esto permite el trabajo en paralelo entre equipos de backend y frontend.</li>
                    <li><strong>Reutilizar, Componer y Extender:</strong> CAP fomenta la reutilización de componentes y la extensión de soluciones existentes, en lugar de empezar siempre desde cero.</li>
                </ul>
            </InfoBox>
        </section>
    );
};

export default Section2;