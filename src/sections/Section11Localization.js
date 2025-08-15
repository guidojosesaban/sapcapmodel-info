import React from 'react';
import styled from '@emotion/styled';
import CodeSnippet from '../components/CodeSnippet';

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

const Section11Localization = () => {
    return (
        <section id="section-11">
            <h2><span className="section-number">11</span>Localización (i18n)</h2>
            <Paragraph>
                Las aplicaciones empresariales deben ser globales. CAP ofrece soporte completo para la internacionalización (i18n), que se divide en dos áreas principales:
            </Paragraph>
            <SubHeading>Textos de la Interfaz de Usuario (UI)</SubHeading>
            <Paragraph>
                Para traducir los textos estáticos de la UI (etiquetas, botones, mensajes), CAP sigue un estándar. Se crea una carpeta `_i18n/` y dentro, archivos `.properties` para cada idioma.
            </Paragraph>
            <CodeSnippet language="properties">
            {`# en _i18n/i18n_es.properties
app_title = Gestión de Incidencias
submit_button = Enviar Incidencia`}
            </CodeSnippet>
            <Paragraph>
                Los frameworks de UI como SAP Fiori Elements saben cómo leer estos archivos y mostrar el texto en el idioma del usuario automáticamente.
            </Paragraph>

            <SubHeading>Datos Localizados</SubHeading>
            <Paragraph>
                Para traducir datos que viven en la base de datos (como descripciones de productos), CAP tiene una solución elegante. Al añadir la palabra clave `localized` a un elemento en tu modelo CDS, CAP automáticamente crea una tabla de textos adicional.
            </Paragraph>
            <CodeSnippet language="javascript">
            {`entity Products {
    key ID : UUID;
    // La descripción se podrá traducir a múltiples idiomas
    localized descr : String;
    stock : Integer;
}`}
            </CodeSnippet>
            <Paragraph>
                Cuando se lee un producto, CAP se encarga de hacer el "join" con la tabla de textos y devolver la descripción en el idioma correcto del usuario, de forma totalmente transparente para el desarrollador.
            </Paragraph>
        </section>
    );
};

export default Section11Localization;