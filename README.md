## FalconView 🚀

SpaceX Launch Explorer - React + Vite + TypeScript

Deploy: https://de-una-falcon-view.vercel.app

## 🚀 ¿Cómo levantar el proyecto?

1. Instala las dependencias

```bash
$ npm install
```

2. Levanta el proyecto

```bash
$ npm run dev
```

3. Ejecuta el script para crear el archivo `.env`

```bash
$ npm run setup:env
```

## 🚀 Scripts adicionales

Compila el proyecto para producción

```bash
$ npm run build
```

Ejecuta ESLint para analizar el código

```bash
$ npm run lint
```

Formatea el código usando Prettier

```bash
$ npm run format
```

Corre los tests unitarios una vez

```bash
$ npm run test
```

Corre los tests en modo watch (desarrollo)

```bash
$ npm run test:watch
```

Genera el reporte de cobertura de tests

```bash
$ npm run test:coverage
```

Previsualiza el build de producción en local

```bash
$ npm run preview
```

Inicia Storybook para visualizar componentes

```bash
$ npm run storybook
```

## 🗓️ Deadline

El desarrollo de este reto tomó aproximadamente 24 horas reales distribuidas en 2 días, priorizando un proceso ordenado y orientado a buenas prácticas.

## 📚 Tecnologías y Stack

    •	React 19 + TypeScript
    •	Vite (entorno moderno y rápido)
    •	Redux Toolkit y RTK Query (manejo de estado y consumo de datos)
    •	React Router v7
    •	Tailwind CSS, clsx y tailwind-merge, cva (estilos modernos y composables)
    •	Atomic Design y Arquitectura Hexagonal
    •	Storybook (documentación y visualización de componentes)
    •	Sentry (monitoreo de errores y crash reporting)
    •	Google Analytics v4 (seguimiento y eventos)
    •	Jest y React Testing Library (pruebas unitarias y de integración)
    • GraphQl

## ⚡ Decisiones de Arquitectura

Atomic Design

Permite una estructura de UI ordenada y escalable, partiendo de componentes pequeños y reutilizables (Atoms, Molecules, Organisms).

Arquitectura Hexagonal

La lógica de negocio, la infraestructura externa (APIs, almacenamiento) y la presentación están separadas en capas. Esto facilita el testeo, la escalabilidad y el mantenimiento, además de mejorar la colaboración entre equipos.

## 📂 Estructura del Proyecto

El proyecto sigue una estructura modular y escalable:
• domain: modelos y tipados puros, independientes de la UI y de infra.
• infrastructure: integra servicios externos y adapta la data.
• services: lógica de negocio y adapters.
• shared: UI (Atomic desing) reutilizable, hooks y componentes de uso global.
• store: Redux Toolkit, slices, persistencia.
• pages: vistas principales.
• stories: Storybook y documentación visual.

## 🛠️ Integraciones y Extras

Sentry:
Configurado para reportar errores críticos y renderizarlos de forma amigable para el usuario.

Google Analytics:
Seguimiento de page views y eventos clave para entender el comportamiento de los usuarios.

Fallbacks y Skeletons:
Incluye pantallas de loading y skeletons para mejorar la experiencia de usuario mientras se cargan los datos.

Control de errores

Paginación
