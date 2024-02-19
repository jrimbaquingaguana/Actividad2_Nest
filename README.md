# Funcionalidad de Comentarios

Este documento describe la implementación de la funcionalidad de comentarios en el blog, permitiendo a los usuarios agregar comentarios a las publicaciones existentes.

## Descripción

La funcionalidad de comentarios ha sido diseñada para enriquecer la interacción en el blog permitiendo a los usuarios dejar comentarios en las publicaciones. Esto se logra a través de un nuevo módulo dentro de la aplicación llamado `CommentsModule`, que gestiona las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para los comentarios.

## Estructura del Proyecto

El proyecto se organiza en varios archivos principales dentro del directorio `src/comentarios`:

- `comentarios.controller.ts`: Controlador que define las rutas para las operaciones CRUD sobre los comentarios.
- `comentarios.model.ts`: Define la interfaz `Comment` que representa la estructura de un comentario.
- `comentarios.module.ts`: Módulo que agrupa los componentes relacionados con los comentarios.
- `comentarios.service.ts`: Servicio que implementa la lógica de negocio para las operaciones CRUD de los comentarios.

Además, el módulo `CommentsModule` es importado y utilizado en `app.module.ts` para integrarse con el resto de la aplicación.

## Implementación

### Modelo de Datos

El modelo `Comment` representa la estructura de un comentario e incluye los siguientes campos:

- `id`: Identificador único del comentario.
- `date`: Fecha en la que se realizó el comentario.
- `content`: Contenido del comentario.
- `name`: Nombre del autor del comentario.

### Servicio

El `CommentsService` maneja la lógica para operar sobre la colección de comentarios, incluyendo:

- Crear un nuevo comentario.
- Obtener todos los comentarios o un comentario específico por su ID.
- Actualizar un comentario existente.
- Eliminar un comentario.

El servicio inicializa algunos comentarios de prueba para facilitar la demostración de la funcionalidad.

### Controlador

El `CommentsController` expone rutas para interactuar con la funcionalidad de comentarios a través de solicitudes HTTP, permitiendo realizar las operaciones CRUD.

### Middleware, Interceptors y Filtros

Se utilizan middleware para funcionalidades adicionales como autenticación y validación de datos. Los interceptores y filtros se implementan para manejar tareas adicionales y errores de forma centralizada.

## Pruebas

Se usó Thunder Client para probar la API y asegurarse del correcto funcionamiento de todas las funcionalidades implementadas.

### Método Get
![Evidencia Get](Evidencias/Get_comentarios.jpg)

### Método Post
![Evidencia Post](Evidencias/Post_comentarios.jpg)

## Conclusión

La implementación de la funcionalidad de comentarios permite a los usuarios interactuar dejando sus opiniones en las publicaciones del blog, enriqueciendo así la experiencia del usuario y fomentando la participación en la plataforma.

## Elaborado por:
Jose Imbaquinga, Ricardo Rivadeneira
