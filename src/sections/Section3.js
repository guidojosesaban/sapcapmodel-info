import React from 'react';
import styled from '@emotion/styled';
import CodeSnippet from '../components/CodeSnippet';

const SubHeading = styled.h3`
  font-size: 1.5rem; color: ${props => props.theme.colors.primary}; margin-top: 2.5rem; margin-bottom: 1rem; border-bottom: 1px solid ${props => props.theme.colors.borderColor}; padding-bottom: 0.5rem;
`;
const Paragraph = styled.p`
  line-height: 1.7; color: ${props => props.theme.colors.textSecondary}; font-size: 1rem;
`;
const InfoBox = styled.div`
  background-color: #E6F7FF; border-left: 4px solid #1890FF; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 0 4px 4px 0;
`;

const Section3 = () => {
    return (
        <section id="section-3">
            <h2><span className="section-number">3</span>Core Data Services (CDS)</h2>
            <Paragraph>
                En el corazón de cada aplicación CAP se encuentra su modelo de dominio, y el lenguaje utilizado para esculpir este modelo es <strong>Core Data Services (CDS)</strong>. Es mucho más que un simple lenguaje de definición de datos; es un marco para definir modelos de datos semánticos.
            </Paragraph>
            <Paragraph>
                Piensa en CDS como un plano arquitectónico. En lugar de escribir SQL complejo, describes tus entidades de negocio, y CAP se encarga de traducirlo a artefactos de base de datos (tablas, vistas) y servicios OData.
            </Paragraph>
            
            <SubHeading>Bloques Fundamentales: Entidades, Tipos y Aspectos</SubHeading>
            <InfoBox>
                <ul>
                    <li><strong>Entidad (<code>entity</code>):</strong> Representa un conjunto de datos estructurados, análogo a una tabla en una base de datos.</li>
                    <li><strong>Tipo (<code>type</code>):</strong> Permite definir tipos de datos reutilizables (simples o estructurados) para mejorar la consistencia y la semántica.</li>
                    <li><strong>Aspecto (<code>aspect</code>):</strong> Es una colección reutilizable de campos que se pueden "mezclar" en múltiples entidades, como un "mixin". CAP proporciona aspectos comunes como <code>cuid</code> (añade un campo de ID) y <code>managed</code> (añade campos de auditoría como `createdAt`, `createdBy`, etc.).</li>
                </ul>
            </InfoBox>
            <CodeSnippet language="javascript">
            {`// db/schema.cds
namespace sap.capire.incidents;
using { cuid, managed } from '@sap/cds/common';

// 'Incidents' es una ENTIDAD que hereda los campos de los ASPECTOS 'cuid' y 'managed'
entity Incidents: cuid, managed {
    title    : String(100);
    urgency  : Association to Urgency; // Relación con otra entidad
    status   : Association to Status;
}

// 'Urgency' y 'Status' son entidades que actúan como "codelists" o datos maestros
entity Urgency: cuid {
    descr: String; // Ej: "Alta", "Media", "Baja"
}
entity Status: cuid {
    descr: String; // Ej: "Nuevo", "En Proceso"
    criticality: Integer;
}`}
            </CodeSnippet>

            <SubHeading>De CDS a la Base de Datos: Persistencia y Artefactos</SubHeading>
            <Paragraph>
                Una de las mayores ventajas de CDS es su abstracción de la base de datos. En desarrollo, CAP utiliza una base de datos <strong>SQLite</strong> en memoria o en un archivo (`db.sqlite`) por defecto. Esto hace que el arranque sea instantáneo y no requiera configuración. Para producción, el mismo modelo CDS se despliega en una base de datos robusta como <strong>SAP HANA Cloud</strong>.
            </Paragraph>
            <Paragraph>
                Cuando ejecutas el comando <code>cds build</code> o <code>cds compile --to hana</code>, CAP traduce tu modelo CDS en artefactos específicos de la base de datos de destino. Para SAP HANA, se generan principalmente dos tipos de archivos:
            </Paragraph>
            <ul>
                <li><code>.hdbtable</code>: Este archivo define la estructura de una <strong>tabla física</strong> en la base de datos. CAP crea un `.hdbtable` por cada `entity` definida en tu `schema.cds` que no sea una proyección. Es el contenedor real de tus datos.</li>
                <li><code>.hdbview</code>: Este archivo define una <strong>vista</strong> de base de datos. Una vista no almacena datos por sí misma; es una consulta almacenada que presenta datos de una o más tablas. CAP crea un `.hdbview` por cada entidad expuesta en tus archivos de servicio (`srv/*.cds`). Esto separa la capa de API de la estructura de la tabla subyacente, proporcionando una capa de seguridad y flexibilidad.</li>
            </ul>

            <SubHeading>Conexión y Acceso a SAP HANA Cloud</SubHeading>
            <Paragraph>
                Para que tu aplicación CAP en producción se conecte a SAP HANA Cloud, el proceso se gestiona a través de "bindings" (vinculaciones) en SAP BTP. No necesitas poner credenciales en tu código.
            </Paragraph>
            <ol>
                <li><strong>Definición en `mta.yaml`</strong>: En el archivo de despliegue, declaras un recurso de tipo `com.sap.xs.hdi-container`.</li>
                <li><strong>Vinculación en el Despliegue</strong>: Durante el despliegue (`cf deploy`), la plataforma BTP crea una instancia de este contenedor HDI en tu base de datos HANA Cloud y lo "vincula" a tu aplicación de servicio.</li>
                <li><strong>Acceso Automático</strong>: La información de conexión (host, usuario, contraseña) se inyecta de forma segura en las variables de entorno de tu aplicación. El runtime de CAP sabe leer estas variables automáticamente y establece la conexión.</li>
            </ol>
            <Paragraph>
                Para acceder directamente a los datos (por ejemplo, para depuración), los desarrolladores pueden usar la <strong>SAP BTP Cockpit</strong> o herramientas como <strong>SAP Business Application Studio</strong> o <strong>DBeaver</strong>, que permiten abrir una conexión segura a la base de datos en la nube y ejecutar consultas SQL sobre las tablas y vistas generadas.
            </Paragraph>
        </section>
    );
};

export default Section3;