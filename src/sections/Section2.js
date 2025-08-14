import React from 'react';
import styled from '@emotion/styled';
import CodeSnippet from '../components/CodeSnippet';

const SubHeading = styled.h3`
  font-size: 1.5rem; color: ${props => props.theme.colors.primary}; margin-top: 2.5rem; margin-bottom: 1rem; border-bottom: 1px solid ${props => props.theme.colors.borderColor}; padding-bottom: 0.5rem;
`;
const Paragraph = styled.p`
  line-height: 1.7; color: ${props => props.theme.colors.textSecondary}; font-size: 1rem;
`;
const FileStructure = styled.div`
  background: ${props => props.theme.colors.codeBg}; color: #f8f8f2; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0; font-family: 'Courier New', Courier, monospace;
  pre { margin: 0; white-space: pre-wrap; }
`;
const InfoBox = styled.div`
  background-color: #E6F7FF; border-left: 4px solid #1890FF; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 0 4px 4px 0;
`;

const Section2 = () => {
    return (
        <section id="section-2">
            <h2><span className="section-number">2</span>Anatomía de un Proyecto CAP</h2>
            <Paragraph>
                Un proyecto SAP CAP sigue el principio de <strong>"convención sobre configuración"</strong>. Esto significa que CAP asume una estructura estándar, lo que le permite descubrir y conectar automáticamente las diferentes partes de tu aplicación (modelo de datos, servicios, UI) con una configuración mínima.
            </Paragraph>
            
            <SubHeading>Creación del Esqueleto del Proyecto</SubHeading>
            <Paragraph>Para crear nuestro proyecto de ejemplo, `incident-management`, abrimos un terminal en SAP Business Application Studio (BAS) y ejecutamos los siguientes comandos:</Paragraph>
            <CodeSnippet language="bash">
                {`# Navega a tu carpeta de proyectos
cd projects/
# Inicializa un nuevo proyecto CAP. Crea la estructura y el package.json
cds init incident-management
# Entra en el directorio del nuevo proyecto
cd incident-management
# Instala las dependencias definidas en package.json
npm install`}
            </CodeSnippet>
            <Paragraph>Este comando `cds init` crea un esqueleto de proyecto con la siguiente estructura:</Paragraph>
            <FileStructure>
                <pre>
                    {`incident-management/
├── app/          -> Capa de Presentación (UI)
├── db/           -> Capa de Datos (Modelo de Dominio)
├── srv/          -> Capa de Servicio (Lógica de API)
└── package.json  -> Manifiesto del Proyecto`}
                </pre>
            </FileStructure>

            <SubHeading>Capa de Datos: La Carpeta `db/`</SubHeading>
            <Paragraph>
                La carpeta `db/` es el hogar de tu modelo de dominio. Aquí defines la estructura de tus datos (entidades, propiedades, relaciones) usando el lenguaje <strong>Core Data Services (CDS)</strong>. Lo escribes una vez y CAP lo puede compilar para diferentes bases de datos como SQLite (desarrollo) o SAP HANA (producción).
            </Paragraph>

            <SubHeading>Capa de Servicio: La Carpeta `srv/`</SubHeading>
            <Paragraph>
                La carpeta `srv/` define cómo se exponen los datos al mundo exterior, típicamente como APIs. CAP genera automáticamente servicios OData a partir de las definiciones de servicio que creas aquí. En esta carpeta también se implementa la lógica de negocio personalizada (validaciones, enriquecimientos) en archivos `.js`.
            </Paragraph>

            <SubHeading>Capa de Presentación: La Carpeta `app/`</SubHeading>
            <Paragraph>
                La carpeta `app/` contiene las aplicaciones de interfaz de usuario, que en el mundo SAP suelen ser aplicaciones Fiori. Una de las características más potentes de CAP es su sinergia con Fiori Elements, que puede generar UIs completas automáticamente basándose en "anotaciones" de UI que se añaden al servicio.
            </Paragraph>

            <SubHeading>El Corazón del Proyecto: `package.json`</SubHeading>
            <Paragraph>
                El archivo `package.json` es el manifiesto central de cualquier proyecto Node.js, y en CAP asume un rol aún más importante, ya que contiene la configuración principal del framework.
            </Paragraph>
            <InfoBox>
                <h4>Secciones Clave del `package.json`</h4>
                <ul>
                    <li><code>"name"</code> y <code>"version"</code>: Identifican tu proyecto.</li>
                    <li><code>"dependencies"</code>: Paquetes de npm necesarios para que la aplicación se ejecute en producción (ej: `@sap/cds`, `@cap-js/hana`).</li>
                    <li><code>"devDependencies"</code>: Paquetes necesarios solo para el desarrollo (ej: `@sap/cds-dk` para la CLI, `@cap-js/sqlite` para la BD local).</li>
                    <li><code>"scripts"</code>: Atajos para comandos, como `"start": "cds-serve"` para iniciar el servidor.</li>
                    <li><code>"cds"</code>: <strong>La sección más importante para CAP.</strong> Aquí se configura el comportamiento del runtime, como la base de datos a usar o el servicio de autenticación. A menudo usa perfiles como `[development]` y `[production]` para alternar la configuración según el entorno.</li>
                </ul>
            </InfoBox>
            <CodeSnippet language="json">
            {`{
  "name": "incident-management",
  "version": "1.0.0",
  "description": "A simple CAP project.",
  "dependencies": {
    "@sap/cds": "^7",
    "express": "^4",
    "@cap-js/hana": "^1"
  },
  "devDependencies": {
    "@sap/cds-dk": "^7",
    "@cap-js/sqlite": "^1"
  },
  "scripts": {
    "start": "cds-serve"
  },
  "cds": {
    "requires": {
      "db": {
        "kind": "hana",
        "[development]": {
          "kind": "sqlite",
          "credentials": {
            "url": "db.sqlite"
          }
        }
      },
      "auth": {
        "[production]": "xsuaa",
        "[development]": "mocked"
      }
    }
  }
}`}
            </CodeSnippet>
            <Paragraph>Opcionalmente, para mantener el `package.json` más limpio, toda la sección `cds` se puede mover a un archivo separado llamado `.cdsrc.json` en la raíz del proyecto. Esto es especialmente útil en proyectos grandes.</Paragraph>
        </section>
    );
};

export default Section2;