import React from 'react';
import styled from '@emotion/styled';
import CodeSnippet from '../components/CodeSnippet';

const SubHeading = styled.h3`
  font-size: 1.5rem; color: ${props => props.theme.colors.primary}; margin-top: 2.5rem; margin-bottom: 1rem; border-bottom: 1px solid ${props => props.theme.colors.borderColor}; padding-bottom: 0.5rem;
`;
const Paragraph = styled.p`
  line-height: 1.7; color: ${props => props.theme.colors.textSecondary}; font-size: 1rem;
`;
const ProcessFlow = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor}; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;
`;

const Section4 = () => {
    return (
        <section id="section-4">
            <h2><span className="section-number">4</span>OData: La API Universal</h2>
            <Paragraph>
                Una vez modelado tu dominio, necesitas exponerlo. En el ecosistema SAP, el estándar para las APIs de datos es <strong>OData (Open Data Protocol)</strong>. OData es un protocolo basado en REST que define una forma universal de consultar y manipular datos, como un "SQL para la web".
            </Paragraph>

            <SubHeading>El Superpoder de CAP: Generación Automática de OData</SubHeading>
            <Paragraph>
                Aquí es donde CAP brilla. No tienes que escribir manualmente el código para un servidor OData. El runtime de CAP lo hace por ti. Cuando defines un servicio en un archivo `srv/service.cds`, CAP automáticamente:
            </Paragraph>
            <ul>
                <li>Inicia un servidor web.</li>
                <li>Crea un endpoint de API OData V4 para tu servicio.</li>
                <li>Implementa manejadores genéricos para todas las operaciones CRUD (Crear, Leer, Actualizar, Borrar).</li>
                <li>Traduce las consultas OData (ej: `$filter`, `$orderby`) a consultas SQL para la base de datos subyacente.</li>
            </ul>

            <SubHeading>Inmersión Profunda: El Documento `$metadata`</SubHeading>
            <Paragraph>
                ¿Cómo sabe un cliente (como una UI de Fiori) qué hay disponible en tu servicio? La respuesta es el <strong>Documento de Metadatos</strong>. Es un recurso especial, accesible añadiendo `/$metadata` a la URL de tu servicio (ej: `http://localhost:4004/processor/$metadata`), que actúa como el "contrato" o el "plano" de tu API.
            </Paragraph>
            <Paragraph>
                Este documento XML describe formalmente todo sobre tu servicio: las entidades, sus propiedades, los tipos de datos y, lo más importante, las <strong>anotaciones</strong>.
            </Paragraph>
            <CodeSnippet language="xml">
                {`<edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" Version="4.0">
  <edmx:DataServices>
    <Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="ProcessorService">
      
      <EntityType Name="Incidents">
        <Key>
          <PropertyRef Name="ID" />
        </Key>
        <Property Name="ID" Type="Edm.Guid" Nullable="false" />
        <Property Name="createdAt" Type="Edm.DateTimeOffset" Precision="7" />
        <Property Name="title" Type="Edm.String" MaxLength="100" />
        <NavigationProperty Name="status" Type="ProcessorService.Status" />
      </EntityType>

      <Annotations Target="ProcessorService.Incidents">
        <Annotation Term="UI.LineItem">
          <Collection>
            <Record Type="UI.DataField">
              <PropertyValue Property="Value" Path="title" />
            </Record>
            <Record Type="UI.DataField">
              <PropertyValue Property="Value" Path="status/descr" />
              <PropertyValue Property="Label" String="Status" />
            </Record>
          </Collection>
        </Annotation>
      </Annotations>

    </Schema>
  </edmx:DataServices>
</edmx:Edmx>`}
            </CodeSnippet>

            <SubHeading>La Simbiosis Perfecta: `$metadata` y SAP Fiori Elements</SubHeading>
            <Paragraph>
                Aquí es donde todo encaja. Fiori Elements está diseñado para ser un "cliente de metadatos". El proceso es el siguiente:
            </Paragraph>
            <ProcessFlow>
                <ol>
                    <li>El usuario abre la aplicación Fiori Elements.</li>
                    <li>Lo primero que hace Fiori Elements es solicitar y analizar el documento `$metadata` del servicio OData.</li>
                    <li>Luego, "lee" los metadatos y renderiza la UI en consecuencia:
                        <ul>
                            <li>"Veo una `EntityType` llamada 'Incidents'. Renderizaré una página de lista para ella."</li>
                            <li>"Veo una anotación `UI.LineItem` que apunta a las propiedades `title` y `status/descr`. Crearé una tabla con estas dos columnas."</li>
                            <li>"Veo una anotación `UI.SelectionFields`. Usaré los campos que lista para crear los filtros de la página."</li>
                        </ul>
                    </li>
                </ol>
            </ProcessFlow>
            <Paragraph>
                Esta es la esencia de la <strong>programación basada en metadatos</strong>. En lugar de escribir código imperativo para construir una UI, tú describes la UI de forma declarativa a través de metadatos, y el framework se encarga de interpretarlos para renderizar la interfaz.
            </Paragraph>

        </section>
    );
};

export default Section4;