import React from 'react';
import styled from '@emotion/styled';

const Paragraph = styled.p`
  line-height: 1.7;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1rem;
`;

const Section14Extensibility = () => {
    return (
        <section id="section-14">
            <h2><span className="section-number">14</span>Extensibilidad</h2>
            <Paragraph>
                La extensibilidad cierra el círculo. Así como nosotros extendemos las soluciones estándar de SAP, las aplicaciones que construimos con CAP también pueden ser diseñadas para que otros las extiendan.
            </Paragraph>
            <Paragraph>
                CAP permite definir "puntos de extensión" en nuestros modelos de datos y servicios. Esto significa que otro desarrollador podría, en un proyecto separado, añadir nuevos campos a nuestras entidades o nueva lógica a nuestros servicios sin modificar nuestro código original, siguiendo la misma filosofía de "Keep the Core Clean".
            </Paragraph>
        </section>
    );
};

export default Section14Extensibility;