# 📚 Aplicación de Lista de Libros

## https://diego-monfort-landolt.github.io/pruebas-tecnicas/

### ✨ Lo que aprendí

Durante el desarrollo de este proyecto profundicé en:

- La estructura de aplicaciones modernas con **React, Vite y TypeScript**.
- Gestión de **estado global** con Zustand para sincronizar listas de lectura.
- Uso de **localStorage** para persistencia de datos y sincronización entre pestañas.
- Implementación de **filtros dinámicos** por género y número de páginas.
- Configuración de **Vitest** y **Testing Library** para pruebas unitarias e integración.

🛠️ Además, aprendí a adaptar **Jekyll** para desplegar aplicaciones modernas con Vite en **GitHub Pages**, asegurando rutas correctas y una estructura de archivos compatible con el entorno de producción.

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

# ✅ 4. Ejecutar en modo desarrollo 
npm run dev

# 💡 TIP: Pulsa "o" en la terminal de Vite para abrir el navegador automáticamente

# ✅ 5. Ejecutar las pruebas unitarias e integración
npm run test

# 💡 TIP: Usa "npm run test:ui" para abrir Vitest en modo interactivo con recarga en caliente


Puedes ver la aplicación funcionando en: https://diego-monfort-landolt.github.io/pruebas-tecnicas/
---

> Esta prueba fue tomada de [midudev/pruebas-tecnicas](https://github.com/midudev/pruebas-tecnicas/tree/main/pruebas/01-reading-list).

---
