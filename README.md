# 📚 Aplicación de Lista de Libros

## ✨ Lo que aprendí
Durante este proyecto he aprendido:
- Cómo estructurar una aplicación con **React + Vite + TypeScript**.
- Manejo de **estado global** con Zustand para sincronizar listas de libros.
- Uso de **localStorage** para persistencia de datos y sincronización entre pestañas.
- Cómo aplicar **filtros dinámicos** (por género y número de páginas).
- Configuración de **Vitest** y **Testing Library** para pruebas unitarias e integración.

---

## 📝 Descripción del proyecto
Este proyecto simula el catálogo de una editorial.  
El usuario puede:
- Ver todos los libros disponibles.
- Filtrar por género y número de páginas.
- Añadir o quitar libros de su **lista de lectura**.
- Mantener su lista guardada en el navegador, incluso si recarga la página o abre otra pestaña.

---

## 📦 Instalaciones utilizadas

- **React** (librería principal)
- **Vite** (bundler y dev server)
- **TypeScript** (tipado estático)
- **Zustand** (gestión de estado global)
- **Testing Library + Vitest** (pruebas unitarias e integración)
- **@testing-library/jest-dom** (matchers para pruebas)
- **CSS modules** para los estilos

---

## 🚀 Cómo clonar y ejecutar el proyecto

```bash
# ✅ 1. Clonar el repositorio desde GitHub
git clone https://github.com/diego-monfort-landolt/pruebas-tecnicas.git

# ✅ 2. Entrar en la carpeta del proyecto
cd pruebas-tecnicas

# 💡 TIP: Asegúrate de tener Node.js 18+ o superior instalado

# ✅ 3. Instalar dependencias
npm install

# 💡 TIP: Si usas pnpm o yarn, puedes sustituir "npm install" por "pnpm install" o "yarn install"

# ✅ 4. Ejecutar en modo desarrollo (abre en http://localhost:5173)
npm run dev

# 💡 TIP: Pulsa "o" en la terminal de Vite para abrir el navegador automáticamente

# ✅ 5. Ejecutar las pruebas unitarias e integración
npm run test

# 💡 TIP: Usa "npm run test:ui" para abrir Vitest en modo interactivo con recarga en caliente


Puedes ver la aplicación funcionando en: [🔗 URL pública del proyecto](https://diego-monfort-landolt.github.io/book-library/)
---

## 🧪 Prueba técnica

Este proyecto forma parte de una prueba técnica basada en el reto propuesto por [midudev](https://github.com/midudev/pruebas-tecnicas/tree/main/pruebas/01-reading-list).

### 📚 Descripción del reto

> El objetivo es desarrollar una aplicación web que permita visualizar un catálogo de libros, filtrarlos por género y añadirlos a una lista de lectura persistente.  
> La aplicación debe sincronizarse entre pestañas, mantener el estado en `localStorage`, y estar desplegada públicamente.

### ✅ Requisitos cumplidos

- Visualización de libros disponibles
- Creación y gestión de lista de lectura
- Filtrado por género y contador dinámico
- Persistencia en `localStorage`
- Sincronización entre pestañas
- Despliegue en entorno público
- Al menos un test incluido

### 🚀 Despliegue


---

> Esta prueba fue tomada de [midudev/pruebas-tecnicas](https://github.com/midudev/pruebas-tecnicas/tree/main/pruebas/01-reading-list).


