# Aventis — Luxury Travel Agency

**Sitio web de agencia de viajes de lujo** construido con Astro 5, React 19, GSAP y Tailwind CSS 4. Diseñado para transmitir exclusividad a través de animaciones fluidas, tipografía cuidada y una arquitectura de componentes limpia.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-aventis--azure.vercel.app-black?style=for-the-badge&logo=vercel)](https://aventis-azure.vercel.app/)
[![Portfolio](https://img.shields.io/badge/Portfolio-johnvicent.es-0a66c2?style=for-the-badge&logo=google-chrome&logoColor=white)](https://johnvicent.es/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-John%20Vicent-0077b5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/johngonzalezvicent/)

---

## Vista previa

> **[→ Ver demo en vivo](https://aventis-azure.vercel.app/)**

El proyecto simula la presencia digital de una agencia de viajes premium española, con secciones de destinos, hoteles, chalets, eventos y una tienda de accesorios de viaje.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Astro](https://astro.build/) | 5 | Framework principal — SSG con Islands Architecture |
| [React](https://react.dev/) | 19 | Componentes interactivos (carrito de compra) |
| [GSAP](https://greensock.com/gsap/) | 3 | Animaciones y carruseles avanzados |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilos utilitarios con diseño responsive |
| [Vercel](https://vercel.com/) | — | Despliegue y CDN |

---

## Decisiones de diseño y UX

### Islands Architecture
Se aprovecha el modelo de islas de Astro para **hidratar únicamente los componentes que requieren interactividad** (carrito, carruseles con React). El resto del contenido se sirve como HTML estático, maximizando el rendimiento y el Core Web Vitals score.

### Animaciones con GSAP
Los carruseles (`GSAPCarousel.astro`) y la sección de contacto (`GSAPContacto.astro`) utilizan **GSAP ScrollTrigger y timelines** para producir transiciones basadas en scroll que refuerzan la sensación premium sin sacrificar rendimiento. Las animaciones respetan `prefers-reduced-motion` a través de media queries en el CSS global.

### Cursor personalizado
El componente `Cursor.astro` reemplaza el cursor nativo del navegador por uno custom que reacciona al hover sobre elementos interactivos, aportando una capa de detalle visual coherente con la identidad de marca.

### Separación de layouts
Se definen dos layouts diferenciados:
- `Layout.astro` — páginas de contenido (inicio, destinos, blog…)
- `Store.astro` — tienda y carrito, con contexto React para estado global del carrito

### Tienda con React
`StoreContainer.jsx` y `ShoppingCart.jsx` forman un mini e-commerce con estado local gestionado con hooks de React, integrado como isla hidratada dentro de un sitio mayormente estático.

---

## Estructura del proyecto

```text
/
├── public/               → Imágenes, favicon e iconos
└── src/
    ├── assets/           → Recursos SVG y estáticos
    ├── components/       → Componentes reutilizables (.astro y .jsx)
    │   ├── Header.astro          — Navegación principal con menú responsive
    │   ├── Footer.astro          — Footer con enlaces y datos de contacto
    │   ├── Carruselhome.astro    — Carrusel hero de la página principal
    │   ├── Carruselhoteles.astro — Carrusel de hoteles asociados
    │   ├── GSAPCarousel.astro    — Carrusel animado con GSAP ScrollTrigger
    │   ├── GSAPContacto.astro    — Sección contacto con entrada animada
    │   ├── Opiniones.astro       — Testimonios de clientes (scroll infinito)
    │   ├── Newsletter.astro      — Formulario de suscripción
    │   ├── Cursor.astro          — Cursor personalizado
    │   ├── Welcome.astro         — Sección hero con propuesta de valor
    │   ├── ShoppingCart.jsx      — Carrito de compra (React island)
    │   └── StoreContainer.jsx    — Catálogo de productos (React island)
    ├── layouts/
    │   ├── Layout.astro          — Layout base con Head, Header y Footer
    │   └── Store.astro           — Layout para páginas de tienda
    ├── pages/                    → Rutas del sitio (file-based routing)
    │   ├── index.astro
    │   ├── destinos.astro
    │   ├── hoteles.astro
    │   ├── chalets.astro
    │   ├── eventos.astro
    │   ├── servicios.astro
    │   ├── tienda.astro
    │   ├── carrito.astro
    │   ├── contacto.astro
    │   └── blog/                 → Revista digital "Bitácora" (6 artículos)
    └── styles/
        └── global.css            → Variables CSS, tipografía y animaciones base
```

---

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo en localhost:4321
npm run dev

# Build de producción
npm run build

# Previsualizar el build antes de desplegar
npm run preview
```

---

## Páginas del sitio

| Ruta | Descripción |
|---|---|
| `/` | Homepage con hero animado, servicios, hoteles asociados y testimonios |
| `/destinos` | Explorador de destinos exclusivos en España |
| `/hoteles` | Catálogo de hoteles de lujo con carrusel |
| `/chalets` | Villas y chalets privados |
| `/eventos` | Acceso a eventos y experiencias exclusivas |
| `/servicios` | Descripción detallada de los servicios de la agencia |
| `/tienda` | Tienda de accesorios de viaje (React) |
| `/carrito` | Carrito de compra (React) |
| `/contacto` | Formulario de contacto con animación GSAP |
| `/blog` | Revista "Bitácora" — artículos sobre viajes de lujo |

---

## Autor

**John Vicent** — Front-end Developer & UI/UX Designer

- Portfolio: [johnvicent.es](https://johnvicent.es/)
- LinkedIn: [linkedin.com/in/johngonzalezvicent](https://www.linkedin.com/in/johngonzalezvicent/)
- GitHub: [github.com/johngvicent](https://github.com/johngvicent)

---

<sub>© John Vicent. Proyecto de portfolio — uso educativo y demostrativo.</sub>
