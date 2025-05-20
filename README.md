# API Geografia Argentina

## Descripción

API RESTful que permite obtener información geográfica de Argentina, incluyendo provincias, departamentos y localidades. La API está diseñada para ser utilizada por desarrolladores que necesiten acceder a datos geográficos de Argentina de manera sencilla y eficiente.

> [!IMPORTANT]
> Los datos se obtuvieron de la [Api Georef](https://www.argentina.gob.ar/datos-abiertos/georef/openapi#/), perteneciente a argentina. En el [siguiente enlace hay una mejor documentación](https://datosgobar.github.io/georef-ar-api/)
>
> Algunos datos fueron modificados para poder adaptarlos a usos generales. Por ejemplo: se elimino el departamento 'Antártida Argentina'
>
> Si se quieren usar los datos oficiales se pueden descargar a traves de los enlaces previamente mencionados o incluso usar su API para obtenerlos mediantes consultas.

## Endpoints

### Provincias

- **GET /provincias**: Devuelve una lista de todas las provincias de Argentina.
- **GET /provincias/{id}**: Devuelve información detallada sobre una provincia específica.
- **GET /provincias/search/{nombre}**: Busca provincias que coincidan con el nombre exacto.
- **GET /provincias/searchLike/{nombre}**: Busca provincias que contengan el nombre proporcionado.

### Departamentos

- **GET /departamentos**: Devuelve una lista de todos los departamentos de Argentina.
- **GET /departamentos/{id}**: Devuelve información detallada sobre un departamento específico.
- **GET /departamentos/search/{nombre}**: Busca departamentos que coincidan con el nombre exacto.
- **GET /departamentos/searchLike/{nombre}**: Busca departamentos que contengan el nombre proporcionado.

### Localidades

- **GET /localidades**: Devuelve una lista de todas las localidades de Argentina.
- **GET /localidades/{id}**: Devuelve información detallada sobre una localidad específica.
- **GET /localidades/search/{nombre}**: Busca localidades que coincidan con el nombre exacto.
- **GET /localidades/searchLike/{nombre}**: Busca localidades que contengan el nombre proporcionado.

## ¿Cómo puedo implementar la API en mi proyecto?

Para implementar la API en tu proyecto, puedes seguir estos pasos:

- Clona el repositorio en tu máquina local.
- Asegúrate de tener instalado NPM y Node.js.
- Navega a la carpeta del proyecto y ejecuta `npm install` para instalar las dependencias.
- Ejecuta `npm start` para iniciar el servidor.

> [!NOTE]
> La API posee 3 comandos para iniciar el servidor:
>
> - `npm start`: Inicia el servidor y lee variables de entorno desde el archivo .env.dev
> - `npm run dev`: Inicia el servidor en modo desarrollo y lee variables de entorno desde el archivo .env.dev
> - `npm run prod`: Inicia el servidor en modo producción y lee variables de entorno desde el archivo .env
>
> El modo desarrollo permite ver los cambios en tiempo real, sin necesidad de reiniciar el servidor.

## ¿Cuáles son las variables de entorno necesarias?

Podes ver la documentacion relacionada [aca](./docs/ENVIRONMENT.md)
