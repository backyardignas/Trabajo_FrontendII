# ⚛️ Panel académico en React + Supabase

Aplicación web para gestionar estudiantes, cursos y matrículas desde un panel administrativo. Está hecha con React y se conecta a una base de datos en **Supabase**.

> Proyecto realizado en pareja en **CESDE**, en el módulo Frontend II del programa de Desarrollo de Software.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)

---

## ✨ Qué hace

- **Panel (dashboard)** como página de inicio.
- **Estudiantes:** listado en tabla y formulario para registrarlos.
- **Cursos:** consulta y creación de cursos.
- **Matrículas:** registro de estudiantes en cursos, mostrando el nombre del estudiante y del curso relacionados.
- Navegación entre páginas con **React Router** y componentes reutilizables (encabezado, barra lateral, menú, buscador, pie de página).
- Datos guardados en **Supabase**, con servicios separados por recurso (`studentService`, `courseService`, `enrollmentService`).

## 🧰 Tecnologías

| Área | Herramientas |
|---|---|
| Interfaz | React 19, React Router, Tailwind CSS |
| Herramienta de desarrollo | Vite |
| Datos | Supabase (base de datos PostgreSQL), Axios |
| Calidad | ESLint |

## 🏗️ Estructura

El código de la aplicación está en la carpeta `nuevo-proyecto-from/`:

```
nuevo-proyecto-from/src
├── components   → Encabezado, barra lateral, menú, buscador, formularios y tablas
├── pages        → Dashboard, Students, Courses, Enrollments
├── routes       → Definición de rutas (AppRoutes)
├── Service      → Comunicación con Supabase por recurso
├── Config       → Cliente de Supabase
├── hooks        → Hooks propios (useFormState)
└── layout       → Diseño general de las páginas
```

## 🚀 Cómo ejecutarlo

### Requisitos

- Node.js 20 o superior
- Un proyecto de Supabase con las tablas `student`, `course` y `enrollments`

### Pasos

1. Clona el repositorio y entra a la carpeta de la aplicación:

   ```bash
   git clone https://github.com/backyardignas/Trabajo_FrontendII.git
   cd Trabajo_FrontendII/nuevo-proyecto-from
   ```

2. Crea un archivo `.env` con los datos de tu proyecto de Supabase:

   ```env
   VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=tu-clave-publica
   ```

3. Instala las dependencias e inicia el servidor de desarrollo:

   ```bash
   npm install
   npm run dev
   ```

4. Abre la dirección que muestra la terminal (normalmente `http://localhost:5173`).

## 👥 Autores

Proyecto realizado en pareja en CESDE.

- **Santiago Arango Quintero** — [Portafolio](https://backyardignas.github.io) · [LinkedIn](https://www.linkedin.com/in/santi-arango-bb6820267/) · [GitHub](https://github.com/backyardignas)
- **Alex Monroy** — [GitHub](https://github.com/AlexMonroy69)
