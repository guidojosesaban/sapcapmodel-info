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

const Section3 = () => {
    return (
        <section id="section-3">
            <h2><span className="section-number">3</span>Características Principales</h2>
            <Paragraph>
                SAP CAP está repleto de características y cualidades diseñadas para acelerar el desarrollo y garantizar que las aplicaciones sean robustas, seguras y escalables desde el primer día.
            </Paragraph>

            <ImageContainer>
                <img src="http://googleusercontent.com/file_content/3" alt="Resumen de características y cualidades de SAP CAP" />
            </ImageContainer>

            <Paragraph>
                Los conceptos clave giran en torno al modelado de dominio con CDS, el uso de "aspectos" para la reutilización de código, y un paradigma centrado en eventos y servicios.
            </Paragraph>

            <SubHeading>Mejores Prácticas Incorporadas de Fábrica</SubHeading>
            <Paragraph>
                Una de las mayores ventajas de CAP es que muchas tareas tediosas y recurrentes en el desarrollo de aplicaciones empresariales ya vienen resueltas. Esto minimiza el código repetitivo y promueve cualidades empresariales de alta calidad.
            </Paragraph>
            
            <ImageContainer>
                <img src="http://googleusercontent.com/file_content/0" alt="Mejores prácticas incorporadas en SAP CAP" />
            </ImageContainer>
            
            <Paragraph>
                CAP maneja automáticamente:
            </Paragraph>
            <ul>
                <li>Solicitudes CRUD comunes (Crear, Leer, Actualizar, Borrar).</li>
                <li>Orquestación de borradores (Drafts) para evitar la pérdida de datos.</li>
                <li>Validación de entradas.</li>
                <li>Búsqueda y paginación de resultados.</li>
                <li>Autenticación y Autorización.</li>
                <li>Localización (i18n) y datos traducidos.</li>
                <li>Multitenancy para aplicaciones SaaS.</li>
            </ul>

        </section>
    );
};

export default Section3;