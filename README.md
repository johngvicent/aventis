# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/               → Imágenes, favicon e iconos
└── src/
    ├── assets/           → Recursos SVG y estáticos
    ├── components/       → Componentes reutilizables (.astro y .jsx)
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── Carruselhome.astro
    │   ├── Carruselhoteles.astro
    │   ├── Opiniones.astro
    │   ├── Newsletter.astro
    │   ├── Cursor.astro
    │   ├── GSAPCarousel.astro
    │   ├── GSAPContacto.astro
    │   ├── ShoppingCart.jsx
    │   └── StoreContainer.jsx
    ├── layouts/          → Plantillas base de página
    │   ├── Layout.astro
    │   └── Store.astro
    ├── pages/            → Rutas y páginas del sitio
    │   ├── index.astro
    │   ├── destinos.astro
    │   ├── hoteles.astro
    │   ├── chalets.astro
    │   ├── eventos.astro
    │   ├── servicios.astro
    │   ├── tienda.astro
    │   ├── carrito.astro
    │   ├── contacto.astro
    │   └── blog/         → Artículos de la revista Bitácora
    └── styles/
        └── global.css
```

---

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                                   |
| :------------------------ | :------------------------------------------------------- |
| `npm install`             | Instala las dependencias                                 |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321`     |
| `npm run build`           | Genera el sitio de producción en `./dist/`               |
| `npm run preview`         | Previsualiza el build antes de desplegar                 |
| `npm run astro ...`       | Ejecuta comandos de la CLI de Astro                      |
| `npm run astro -- --help` | Muestra la ayuda de la CLI de Astro                      |
