import React from 'react';
import styled from '@emotion/styled';

const SubHeading = styled.h3`
  font-size: 1.5rem; color: ${props => props.theme.colors.primary}; margin-top: 2.5rem; margin-bottom: 1rem; border-bottom: 1px solid ${props => props.theme.colors.borderColor}; padding-bottom: 0.5rem;
`;
const Paragraph = styled.p`
  line-height: 1.7; color: ${props => props.theme.colors.textSecondary}; font-size: 1rem;
`;
const ProcessFlow = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor}; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;
  ol { padding-left: 20px; margin: 0; }
  li { margin-bottom: 0.75rem; }
`;

const Section9 = () => {
    return (
        <section id="section-9">
            <h2><span className="section-number">9</span>SAP Build Work Zone</h2>
            <Paragraph>
                Después de desplegar tu aplicación, el último paso es hacerla accesible a los usuarios finales de manera centralizada. Este portal es <strong>SAP Build Work Zone, standard edition</strong> (antes SAP Launchpad service).
            </Paragraph>
            <Paragraph>
                Su propósito es servir como la página de inicio o "launchpad", proporcionando una experiencia de usuario consistente basada en el diseño de SAP Fiori, donde las aplicaciones se presentan como <strong>"mosaicos" (tiles)</strong>.
            </Paragraph>

            <SubHeading>Conectando la UI: El HTML5 Application Repository</SubHeading>
            <Paragraph>
                Cuando despliegas un MTA que contiene un módulo de UI, los archivos estáticos de la UI (HTML, JavaScript, CSS, etc.) se suben a un servicio de BTP llamado <strong>HTML5 Application Repository</strong>. Work Zone sabe cómo encontrar y mostrar tu aplicación gracias a este repositorio.
            </Paragraph>

            <h4>El Flujo de Trabajo del Portal</h4>
            <ProcessFlow>
                <ol>
                    <li><strong>Despliegue:</strong> El módulo de UI se carga en el HTML5 Application Repository.</li>
                    <li><strong>Configuración:</strong> Un administrador configura una "Aplicación" en Work Zone, vinculándola a la UI desplegada.</li>
                    <li><strong>Asignación:</strong> El administrador asigna la aplicación del portal a un catálogo y este a una colección de roles.</li>
                    <li><strong>Acceso:</strong> El usuario final con la colección de roles correcta verá el mosaico de la aplicación en su launchpad.</li>
                </ol>
            </ProcessFlow>
        </section>
    );
};

export default Section9;