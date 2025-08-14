import React from 'react';
import styled from '@emotion/styled';

const SubHeading = styled.h3`
  font-size: 1.5rem; color: ${props => props.theme.colors.primary}; margin-top: 2.5rem; margin-bottom: 1rem; border-bottom: 1px solid ${props => props.theme.colors.borderColor}; padding-bottom: 0.5rem;
`;
const Paragraph = styled.p`
  line-height: 1.7; color: ${props => props.theme.colors.textSecondary}; font-size: 1rem;
`;
const InfoBox = styled.div`
  background-color: #E6F7FF; border-left: 4px solid #1890FF; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 0 4px 4px 0;
`;
const AnalogyBox = styled(InfoBox)`
  background-color: #F6FFED; border-left-color: #52C41A;
`;

const Section1 = () => {
    return (
        <section id="section-1">
            <h2><span className="section-number">1</span>El Panorama General</h2>
            <Paragraph>
                Bienvenido al mundo del desarrollo de aplicaciones en la nube de SAP. Si tienes experiencia en programación pero el ecosistema SAP es nuevo para ti, estás en el lugar correcto. Este manual está diseñado para guiarte desde los conceptos fundamentales hasta el despliegue de una aplicación empresarial completa, utilizando el <strong>SAP Cloud Application Programming Model (CAP)</strong>.
            </Paragraph>
            
            <SubHeading>El Principio 80/20: Por Qué Extender SAP</SubHeading>
            <Paragraph>
                Imagina una gran corporación que utiliza SAP S/4HANA, el sistema de planificación de recursos empresariales (ERP) de SAP. Este sistema es increíblemente potente y viene preconfigurado para manejar la gran mayoría de los procesos de negocio estándar, como finanzas, logística o recursos humanos. Se estima que estas soluciones estándar cubren aproximadamente el <strong>80%</strong> de las necesidades de una empresa.
            </Paragraph>
            <Paragraph>
                Sin embargo, el <strong>20%</strong> restante es donde reside la ventaja competitiva de cada empresa: procesos únicos, flujos de trabajo personalizados o lógicas de negocio que son su "salsa secreta". Forzar estos procesos únicos en la funcionalidad estándar es ineficiente y contraproducente. La necesidad de extender una solución SAP surge precisamente para cubrir este 20% de requerimientos únicos.
            </Paragraph>
            <InfoBox>
                <h4>Escenarios Típicos para una Extensión</h4>
                <ul>
                    <li><strong>Procesos de Industria Únicos:</strong> Una farmacéutica necesita seguir regulaciones de validación de lotes no contempladas en el estándar.</li>
                    <li><strong>UI/UX Personalizados:</strong> Se requiere una app móvil extremadamente simple para técnicos de campo, algo que una app Fiori estándar no ofrece eficientemente.</li>
                    <li><strong>Integración Multi-Sistema:</strong> Un panel de control que consolida datos de ventas de S/4HANA y datos de satisfacción del cliente de un CRM de terceros.</li>
                </ul>
            </InfoBox>

            <SubHeading>La Regla de Oro: "Keep the Core Clean"</SubHeading>
            <Paragraph>
                En el pasado, la personalización se hacía modificando directamente el código del sistema SAP central. Esto creaba pesadillas en las actualizaciones, volviendo el sistema frágil y caro de mantener. Para resolver esto, SAP introdujo la filosofía <strong>"Keep the Core Clean"</strong> (Mantén el Núcleo Limpio).
            </Paragraph>
            <AnalogyBox>
                <strong>Analogía del Smartphone 📱</strong>
                <Paragraph>
                    Piensa en tu teléfono. Su sistema operativo (iOS o Android) es el "núcleo". No modificas su código para añadir funcionalidades; en su lugar, instalas apps. Estas apps se comunican con el núcleo a través de APIs, pero se ejecutan de forma independiente. Así, puedes actualizar el sistema operativo sin romper tus apps. En nuestro mundo, <strong>SAP S/4HANA</strong> es el sistema operativo, y <strong>SAP Business Technology Platform (BTP)</strong> es la "App Store" donde viven nuestras extensiones.
                </Paragraph>
            </AnalogyBox>
            
            <SubHeading>Tu Campo de Juego: SAP Business Technology Platform (BTP)</SubHeading>
            <Paragraph>
                Construir extensiones en SAP BTP, una Plataforma como Servicio (PaaS), ofrece ventajas clave:
            </Paragraph>
            <ul>
                <li><strong>Agilidad e Innovación:</strong> Permite usar tecnologías modernas como Node.js, Java o Python y desplegar funcionalidades en semanas, no meses.</li>
                <li><strong>Escalabilidad:</strong> Las aplicaciones se ejecutan en la infraestructura de los principales proveedores de nube (AWS, Azure, GCP) y pueden escalar elásticamente para manejar picos de demanda.</li>
                <li><strong>Seguridad y Cumplimiento:</strong> BTP proporciona servicios integrados para la gestión de identidades y autorización, como el servicio XSUAA, lo que centraliza la seguridad.</li>
                <li><strong>Integración:</strong> Ofrece conectores y herramientas para conectar de forma segura sistemas SAP y no-SAP.</li>
            </ul>
        </section>
    );
};

export default Section1;