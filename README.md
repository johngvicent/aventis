# Aventis — Agencia de Viajes Exclusivos en España

**Aventis** es una agencia especializada en diseñar viajes de lujo a medida por España. Entiende el lujo como la creación de momentos únicos y significativos: desde alojamientos exclusivos hasta actividades personalizadas, gastronomía de élite y accesos a eventos privilegiados. Su propósito es que cada viaje sea una obra maestra que refleje los intereses del cliente y explore la rica historia, cultura y paisajes de España.

---

## ✨ Diseño y Desarrollo

El diseño del logotipo, la identidad visual y la programación web de **Aventis** han sido creados íntegramente por:

**John Vicent — Diseñador Multimedia y Desarrollador Front End**

---

## 🌐 Secciones de la Web

| Página | Descripción |
| :--- | :--- |
| **Inicio** | Presentación de la agencia con carrusel de imágenes, servicios destacados y opiniones de clientes |
| **Destinos** | Destinos exclusivos: Tren Transcantábrico, Costa del Sol, Ruta Michelin en San Sebastián y más |
| **Hoteles** | Reservas en hoteles de lujo: Mandarin Oriental Ritz (Madrid), Hotel Palafox (Zaragoza), Marriott's Marbella Beach Resort y otros |
| **Eventos** | Acceso a los eventos y celebraciones más destacados de España |
| **Chalets** | Alojamientos rurales y chalets de lujo para estancias exclusivas |
| **Servicios** | Descripción completa de todos los servicios premium ofrecidos por la agencia |
| **Bitácora** | Revista digital con artículos sobre viajes, gastronomía, moda y cultura de lujo en España |
| **Tienda** | Tienda online de accesorios de viaje premium: maletas, sets y maletines de alta gama |
| **Contacto** | Formulario de contacto y reservas personalizado |
| **Carrito** | Carrito de compra integrado para la tienda de accesorios |

---

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)** — Framework web principal (SSG/SSR)
- **React** — Componentes interactivos (tienda y carrito de compra)
- **TypeScript** — Tipado estático
- **Tailwind CSS** — Estilos y diseño responsivo
- **GSAP** — Animaciones avanzadas (carruseles, transiciones)
- **Fuentes:** EB Garamond · Montserrat (Google Fonts)

---

## 🚀 Estructura del Proyecto

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
