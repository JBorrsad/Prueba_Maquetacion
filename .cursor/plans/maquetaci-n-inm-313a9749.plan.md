<!-- 313a9749-9510-4767-abd0-145519905ca6 796fd38f-e411-4a50-8c57-b1d6a29fe0d8 -->
# Plan de Maquetación - Home Inmovalley

## Análisis del Diseño de Referencia

Del diseño `1 - HOME.jpg` identifico estas secciones:

1. **Topbar** - Barra superior oscura con idioma/teléfono/email
2. **Header** - Logo + menú navegación responsive
3. **Hero + Buscador** - Imagen fondo + formulario búsqueda propiedades superpuesto
4. **Stats/Categorías** - 3 bloques con números destacados (70 propiedades, Viviendas estreno, 36 vendidas)
5. **Propiedad del Mes** - Destacado grande con imagen + info detallada
6. **CTA Vender** - Sección con imagen + botón "Vende tu propiedad"
7. **Propiedades Destacadas** - Grid 4 tarjetas con imágenes/precio/características
8. **Sección Corporativa** - Texto "Bienvenido" + imágenes laterales
9. **Últimas Noticias** - Grid 2 posts blog
10. **Contacto/Newsletter** - Formulario fondo amarillo-verde
11. **Footer** - Info contacto + enlaces legales + redes sociales

## Colores Identificados

- **Primario**: Amarillo/dorado (#FFD700 aprox)
- **Secundario**: Azul oscuro/negro (#1a1a2e aprox)
- **Acento**: Turquesa/verde agua (#00CEC9 aprox)
- **Texto**: Blanco sobre oscuro, gris oscuro sobre claro

## Estructura de Archivos

```
/
├── index.html
├── css/
│   └── main.css
├── js/
│   └── main.js
├── assets/
│   └── (todos los SVG, JPG existentes)
└── README.md (para GitHub Pages)
```

## Implementación por Bloques

### 1. HTML Base (index.html)

- DOCTYPE HTML5 semántico
- Meta tags: viewport, charset, description
- Bootstrap 5.3.x CDN (CSS + Bundle con Popper)
- jQuery 3.7.x CDN
- Google Fonts: Montserrat (weights: 300, 400, 500, 600, 700)
- Archivo `css/main.css` custom
- Archivo `js/main.js` custom
- Estructura semántica: `header`, `main`, `section`, `footer`

### 2. Topbar + Header

**HTML:**

- `<div class="topbar">` con container Bootstrap
- Row con 2 columnas: izquierda (idioma), derecha (teléfono + email)
- `<header class="site-header">` con navbar de Bootstrap 5
- Logo SVG (`logo_header.svg`)
- Menú navegación: Inicio, Empresa, Propiedades, Servicios, Vender, Blog, Contactar
- Botón hamburguesa responsive (Bootstrap collapse)

**CSS BEM:**

```
.topbar
.topbar__lang
.topbar__contact
.site-header
.site-header__logo
.site-header__nav
```

### 3. Hero + Buscador

**HTML:**

- `<section class="hero">` con imagen fondo (`slider.jpg` o `image_background.jpg`)
- Container con row/col para centrar contenido
- Título "INMO VALLEY" + subtítulo
- Formulario buscador con:
  - Select Estado (Venta/Alquiler)
  - Select Tipo propiedad
  - Select Población
  - Select Zona
  - Input Precio desde/hasta
  - Select Nº baños
  - Checkboxes características (Piscina, Garaje, etc.)
  - Botón "BUSCAR PROPIEDADES" amarillo
  - Botón "BÚSQUEDA AVANZADA" con icono
- Grid responsive: desktop 3-4 cols por fila, móvil apilado

**CSS BEM:**

```
.hero
.hero__content
.hero__title
.hero__subtitle
.hero-search
.hero-search__field
.hero-search__select
.hero-search__button
.hero-search__advanced
```

**jQuery:**

- Placeholder dinámico en selects
- Validación básica de rangos de precio

### 4. Stats/Categorías (Elige tu Futuro)

**HTML:**

- `<section class="stats-section">` con fondo imagen
- Container con row de 3 columnas (`col-lg-4`)
- Cada bloque: número grande + texto descriptivo
- Colores alternados: oscuro-amarillo-oscuro

**CSS BEM:**

```
.stats-section
.stats-section__item
.stats-section__number
.stats-section__text
.stats-section__item--dark
.stats-section__item--yellow
```

### 5. Propiedad del Mes

**HTML:**

- `<section class="featured-property">` fondo oscuro
- Row con 2 cols: imagen izquierda (`property_month.jpg`), info derecha
- Info: REF, tipo, ubicación, m², habitaciones, baños, iconos características, precio destacado
- Iconos con SVG o Font Awesome

**CSS BEM:**

```
.featured-property
.featured-property__image
.featured-property__info
.featured-property__ref
.featured-property__title
.featured-property__meta
.featured-property__icons
.featured-property__price
```

### 6. CTA Vende tu Propiedad

**HTML:**

- `<section class="sell-cta">` con imagen fondo (`image_sell.jpg`)
- Row 2 cols: imagen/icono izquierda, texto + botón derecha
- Botón amarillo destacado

**CSS BEM:**

```
.sell-cta
.sell-cta__content
.sell-cta__title
.sell-cta__text
.sell-cta__button
```

### 7. Propiedades Destacadas

**HTML:**

- `<section class="properties-grid">`
- Row con 4 tarjetas (`col-lg-3 col-md-6 col-12`)
- Cada tarjeta (`property-card`):
  - Imagen (`property_1.jpg` a `property_4.jpg`)
  - Icono corazón favoritos (SVG)
  - REF + tipo
  - Ubicación
  - Metros + habitaciones + baños (iconos)
  - Precio destacado
  - Data attributes: `data-status`, `data-type`, `data-city`, `data-zone`, `data-price`, `data-bathrooms`, `data-pool`

**CSS BEM:**

```
.properties-grid
.property-card
.property-card__image
.property-card__favorite
.property-card__ref
.property-card__title
.property-card__meta
.property-card__meta-item
.property-card__price
```

**jQuery:**

- Hover effect en tarjetas
- Click en corazón para favoritos (toggle clase active)

### 8. Sección Corporativa/About

**HTML:**

- `<section class="about">` fondo claro
- Row con texto central + imágenes laterales
- Título vertical "ÚLTIMAS NOTICIAS" estilizado
- Texto descriptivo empresa

**CSS BEM:**

```
.about
.about__images
.about__content
.about__title
.about__text
```

### 9. Últimas Noticias

**HTML:**

- `<section class="blog-section">` fondo oscuro
- Row con 2 tarjetas blog (`col-lg-6`)
- Cada post: imagen (`mews_1.jpg`, `news_2.jpg`), fecha, título, extracto

**CSS BEM:**

```
.blog-section
.blog-list
.blog-list__item
.blog-list__image
.blog-list__date
.blog-list__title
.blog-list__excerpt
```

### 10. Contacto/Newsletter

**HTML:**

- `<section class="contact-form">` fondo amarillo-verde
- Título "CONTACTA CON NOSOTROS"
- Formulario: inputs nombre, email, teléfono, mensaje, checkbox privacidad
- Botón enviar

**CSS BEM:**

```
.contact-form
.contact-form__title
.contact-form__field
.contact-form__checkbox
.contact-form__button
```

**jQuery:**

- Validación campos obligatorios
- Efecto focus en inputs

### 11. Footer

**HTML:**

- `<footer class="site-footer">` fondo oscuro
- Row con 3-4 columnas:
  - Logo + descripción
  - Enlaces rápidos
  - Info contacto (teléfono, email, dirección)
  - Redes sociales
- Subfooter con enlaces legales (Privacidad, Cookies, etc.)

**CSS BEM:**

```
.site-footer
.site-footer__logo
.site-footer__links
.site-footer__contact
.site-footer__social
.site-footer__legal
```

## CSS: main.css

Estructura por secciones comentadas:

```css
/* ========== VARIABLES & RESET ========== */
/* ========== LAYOUT GENERAL ========== */
/* ========== TOPBAR ========== */
/* ========== HEADER ========== */
/* ========== HERO & SEARCH ========== */
/* ========== STATS SECTION ========== */
/* ========== FEATURED PROPERTY ========== */
/* ========== SELL CTA ========== */
/* ========== PROPERTIES GRID ========== */
/* ========== ABOUT ========== */
/* ========== BLOG SECTION ========== */
/* ========== CONTACT FORM ========== */
/* ========== FOOTER ========== */
/* ========== RESPONSIVE ========== */
```

- Variables CSS para colores/tipografía
- Reset básico (box-sizing, margin, padding)
- Clases utility propias
- Media queries para tablet (768px) y móvil (576px)
- Hover states y transiciones suaves
- Uso inteligente de flexbox y grid CSS sobre Bootstrap

## JavaScript: main.js

Funcionalidades jQuery:

1. **Menú hamburguesa** - Smooth scroll en links, cierre automático
2. **Buscador hero** - Validación, filtrado propiedades (si se implementa listado)
3. **Favoritos** - Toggle corazón en tarjetas, localStorage opcional
4. **Scroll animations** - Fade in sections con Intersection Observer o jQuery
5. **Formulario contacto** - Validación + mensaje confirmación
6. **Smooth scroll** - Al hacer click en enlaces ancla

## Puntos Críticos de Calidad

✅ **Código original 100%** - Sin copiar de inmovalley.com

✅ **Pixel perfect** - Máxima fidelidad al diseño de referencia

✅ **BEM consistente** - Nomenclatura clara y mantenible

✅ **Responsive** - Mobile first, breakpoints Bootstrap

✅ **Semántico** - HTML5 tags apropiados

✅ **Accesibilidad básica** - Alt en imágenes, labels en forms

✅ **Performance** - Imágenes optimizadas, CSS minificado

✅ **Cross-browser** - Prefijos vendor si necesario

✅ **Comentarios** - Código bien documentado por bloques

✅ **GitHub Pages ready** - Rutas relativas, sin backend

## Entrega Final

- Código limpio con indentación por tabulación
- Comentarios profesionales pero no excesivos
- README.md con instrucciones de visualización
- Estructura clara de carpetas
- Sin archivos temporales o innecesarios

### To-dos

- [ ] Crear estructura base de archivos (index.html, css/main.css, js/main.js, README.md)
- [ ] Implementar HTML base con CDNs Bootstrap 5, jQuery y Google Fonts Montserrat
- [ ] Maquetar Topbar + Header con navegación responsive
- [ ] Maquetar Hero section con buscador de propiedades
- [ ] Maquetar sección Stats/Categorías (3 bloques numéricos)
- [ ] Maquetar Propiedad del Mes con imagen + detalles
- [ ] Maquetar CTA Vende tu Propiedad
- [ ] Maquetar grid Propiedades Destacadas (4 tarjetas con data-attributes)
- [ ] Maquetar sección About corporativa + Últimas Noticias
- [ ] Maquetar formulario Contacto + Footer completo
- [ ] Implementar CSS completo con BEM, variables y estilos por bloques
- [ ] Implementar responsive design completo (móvil, tablet, desktop)
- [ ] Implementar jQuery: menú, favoritos, validación forms, smooth scroll
- [ ] Revisar pixel-perfect, accesibilidad, cross-browser y crear README.md