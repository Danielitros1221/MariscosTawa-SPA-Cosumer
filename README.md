# Mariscos TAWA - Kiosk & Kitchen Display System (SPA)

This repository contains the Single Page Application (SPA) for "Mariscos TAWA", featuring both the Consumer Kiosk interface and the Kitchen Display System (KDS). It is built with Vue 3, Vite, Tailwind CSS v4, and Pinia.

## Features

- **Consumer Kiosk**: 
  - Dynamic order type selection (Dine-in / Takeaway).
  - Food menu categorization and dynamic product cart.
  - Cart annotations for customized orders (e.g., "Sin cebolla").
  - Payment and order summary workflows.
- **Kitchen Display System (KDS)**:
  - Employee login interface.
  - Kanban-style columns (Nuevas, En Preparación, Completado).
  - Drag-and-drop order management.
  - Granular food preparation tracking with completion constraints.
  - Real-time elapsed timers for order SLAs.
- **UI/UX**:
  - Full Dark Mode support dynamically triggered or system-based.
  - Beautiful glassmorphism, background blobs, and smooth transitions.
  - Fully responsive layout for varying screen sizes and orientations.

## Minimum Requirements

- **Node.js**: `v20.19.0` or `>=22.12.0` (LTS versions recommended).
- **npm**: `v10.x` or higher (comes with Node.js).
- **Modern Web Browser**: Chrome, Edge, Firefox, or Safari (versions supporting ES modules and modern CSS capabilities like `:has()` and native nesting).

## Project Setup

Clone the repository and install dependencies using npm:

```bash
# Navigate to the project directory
cd MariscosTawa-SPA-Cosumer/tawa-consumer

# Install all dependencies
npm install
```

## Development and Execution

To run the application locally in a development environment with hot-module replacement:

```bash
npm run dev
```

The application will typically be available at `http://localhost:5173/`. 
By default, the application will land on the consumer welcome page.
- **Kitchen Display Access**: Click the subtle profile icon on the bottom-left of the Welcome page, or navigate directly to `/kitchen/login`.
- **Demo Credentials**: Employee ID: `EMP-001`, Password: `tawa2026`.

## Building for Production

To compile and minify the application for a production deployment:

```bash
npm run build
```

The compiled assets will be output to the `/dist` directory. This directory can be served via standard web servers like Nginx, Apache, or static hosting providers (Vercel, Netlify, etc.).

## Testing

Run unit tests using Vitest:

```bash
npm run test:unit
```

## Recommended IDE Setup

For the best development experience, it is recommended to use:
- **Visual Studio Code**
- **Vue (Official) Extension** (disable Vetur if it was previously installed).
- **Tailwind CSS IntelliSense** for utility class autocomplete.
