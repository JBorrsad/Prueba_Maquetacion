# Prueba Técnica - Maquetación Inmovalley

Maquetación de la página home de Inmovalley, web inmobiliaria especializada en Elche y alrededores. Proyecto desarrollado como prueba técnica para Mediaelx.

**Demo en vivo:** Disponible en GitHub Pages - Solo abrir `index.html` en el navegador

## Tecnologías Utilizadas

- HTML5 semántico
- CSS3 con metodología BEM
- Bootstrap 5.3.2
- jQuery 3.7.1
- Font Awesome 6.4.2
- Google Fonts (Montserrat + Caveat)

## Decisiones Técnicas Principales

### Por qué Bootstrap 5

Elegí Bootstrap 5 en lugar de la versión 4 porque es la versión más actual y elimina la dependencia de jQuery para sus componentes (aunque jQuery se usa para la lógica custom). Además, Bootstrap 5 trae mejoras en el sistema de grid y utilidades que hacen el responsive mucho más limpio.

### Estructura de Carpetas

```
/
├── index.html          # Página principal
├── css/
│   └── main.css       # Estilos organizados por secciones
├── js/
│   └── main.js        # Lógica de interacciones
└── assets/            # Imágenes y SVGs
```

Mantuve la estructura simple porque para un proyecto de una sola página no tiene sentido complicarla más. Todo está donde se espera que esté.

### Organización del CSS y BEM

Usé metodología BEM de forma consistente en todo el proyecto. Cada componente tiene su bloque, elementos y modificadores claramente definidos:

- `.main-header` → `.main-header__logo`, `.main-header__menu`
- `.property-month` → `.property-month__card`, `.property-month__info`
- `.property-card` → `.property-card__image`, `.property-card__content`
- `.section-title` → `.section-title--center`

Esto hace el CSS escalable y fácil de mantener. Las variables CSS centralizan colores y permiten cambios globales rápidos.

### Sistema de Colores

Analicé con detenimiento el diseño original y extraje los colores exactos:
- `#c6a623` - Amarillo/dorado principal (CTAs, acentos)
- `#1d202e` - Azul oscuro secundario (fondos)
- `#111827` - Negro oscuro (header, backgrounds)
- `#00cec9` - Turquesa (badges especiales)

Estos colores están en variables CSS para facilitar ajustes futuros.

## Implementación del HTML

### Estructura del Header

El header tiene un layout de 3 columnas en desktop:
- **Columna izquierda**: Teléfono + menú principal
- **Columna central**: Logo de la empresa
- **Columna derecha**: Menú secundario + botón menú lateral

Esta distribución replica exactamente el diseño original y permite una navegación clara.

### Data Attributes en Propiedades

Las tarjetas de propiedades incluyen data attributes (`data-status`, `data-type`, `data-price`, `data-bathrooms`, `data-pool`, `data-garage`) porque esto permite filtrarlas con JavaScript sin necesidad de hacer peticiones al servidor. Es una solución simple pero efectiva para el buscador.

Cada propiedad tiene estos atributos:
- `data-status`: "venta" o "alquiler"
- `data-type`: "piso", "chalet", "apartamento", etc.
- `data-city`: ciudad de la propiedad
- `data-zone`: zona específica
- `data-price`: precio numérico
- `data-bathrooms`: número de baños
- `data-pool`: "si" o "no"
- `data-garage`: "si" o "no"

### Accesibilidad

Añadí atributos ARIA donde era necesario:
- `aria-label` en botones sin texto visible
- `aria-pressed` en los botones de favoritos
- `role="presentation"` en iconos decorativos
- Alt texts descriptivos en imágenes

No quise exagerar con ARIA porque a veces es peor meter atributos incorrectos que no ponerlos.

## JavaScript y Funcionalidades

### Por qué jQuery

Aunque hoy en día muchos proyectos usan vanilla JS o frameworks modernos, jQuery era requisito del proyecto. Además, para manipulación del DOM y animaciones simples, jQuery sigue siendo muy práctico y el código queda más legible.

### Funcionalidades Implementadas

**1. Menú Lateral Overlay**
Implementé un menú lateral que se despliega desde la izquierda al hacer click en "Menú". Ocupa 2/3 de la pantalla con fondo oscuro y 1/3 con overlay semitransparente. Se cierra con el botón X, haciendo click fuera o presionando ESC.

**2. Buscador de Propiedades**
El buscador filtra propiedades del lado del cliente:
- Estado, tipo, población, zona - comparación exacta
- Precio hasta - muestra propiedades menores o iguales
- Referencia - búsqueda por texto

Los filtros se combinan con lógica AND. Las transiciones usan fadeIn/fadeOut para suavidad.

**3. Sistema de Favoritos**
Los favoritos se guardan en localStorage y persisten al recargar. El contador se actualiza dinámicamente en el header. Añadí animación de escala cuando marcas/desmarcas.

**4. Efecto Hover en Propiedad del Mes**
La propiedad del mes tiene un efecto hover especial: la imagen hace zoom y el panel de información cambia de opacidad. Esto atrae la atención sobre la propiedad destacada.

**5. Validación del Formulario**
Validación completa con regex para email. Los campos obligatorios están marcados con *. Simulo el envío con feedback visual (botón cambia a "ENVIANDO...").

## Diseño Responsive

### Breakpoints

Definí tres breakpoints principales:
- **Desktop**: > 991px
- **Tablet**: 768px - 991px  
- **Mobile**: < 767px

Usé los breakpoints estándar de Bootstrap porque son los que funcionan bien en la mayoría de dispositivos reales.

### Adaptaciones Mobile

En móvil hice estos cambios principales:
- El buscador apila los campos en vertical
- Las tarjetas de propiedades van a una columna
- El menú se convierte en hamburguesa
- Los tamaños de fuente se reducen proporcionalmente
- El topbar apila teléfono y email

Probé la web en Chrome DevTools con varios dispositivos y ajusté hasta que quedó bien.

## Optimizaciones y Buenas Prácticas

### Performance

- Usé CDN para Bootstrap y jQuery (carga más rápida)
- Las animaciones usan CSS cuando es posible
- El JavaScript se carga al final del body
- Implementé Intersection Observer para animaciones al scroll (con fallback para navegadores antiguos)

### Código Limpio

Intenté que el código sea fácil de leer:
- Funciones bien nombradas y comentadas
- Un solo propósito por función
- Comentarios donde la lógica no es obvia
- Indentación consistente con tabulación

### GitHub Pages

El proyecto está preparado para GitHub Pages. Solo hay que:
1. Subir el repositorio
2. Ir a Settings > Pages
3. Seleccionar la rama main
4. El sitio estará disponible automáticamente

Todas las rutas son relativas, así que funciona tanto en local como en GitHub Pages sin cambios.

## Decisiones de Implementación

### Tipografía Cursiva

Para los textos destacados como "del mes", "Con Nosotros", "Noticias", "Siempre a tu lado" usé la fuente **Caveat** de Google Fonts. Analicé la página original con DevTools y vi que usaban una fuente cursiva similar. Caveat replica perfectamente ese estilo manuscrito sin copiar código.

### Layout del Header

El header integra toda la información en un solo elemento (sin topbar separado):
- **Columna izquierda (4 cols)**: Teléfono + menú de navegación principal
- **Columna central (4 cols)**: Logo centrado
- **Columna derecha (4 cols)**: 
  - Fila superior: Email + Idioma + Facebook
  - Fila inferior: Menú secundario + Botón "Menú"

Esto evita duplicaciones y replica exactamente el diseño original. En móvil se simplifica a: botón menú, logo, botón búsqueda.

### Menú Lateral

Implementé el menú lateral con overlay que ocupa 2/3 de pantalla a la izquierda. No usé plugins externos, solo CSS y jQuery básico. Se puede cerrar de 3 formas: botón X, click fuera, o tecla ESC.

### Efecto Hover en Tarjetas

Las tarjetas de propiedades tienen efecto hover que incluye:
- Elevación de la tarjeta (translateY)
- Zoom sutil en la imagen (scale 1.08)
- Sombra más pronunciada
- Botón de favorito que cambia de color

Estos efectos replican el comportamiento de la web original.

## Qué Mejoraría con Más Tiempo

Si tuviera más tiempo, añadiría:
- Lazy loading en las imágenes
- Un sistema de notificaciones más elegante que alerts
- Animaciones más elaboradas
- Tests unitarios para las funciones de filtrado
- Optimización de las imágenes (compresión, WebP)

Pero para una prueba técnica con límite de tiempo, creo que el resultado es sólido y profesional.

## Instrucciones de Uso

1. **Abrir** `index.html` en el navegador (doble click)
2. **Probar** el botón "Menú" (abre panel lateral)
3. **Probar** la flecha circular del hero (scroll al buscador)
4. **Probar** el buscador con filtros
5. **Probar** favoritos (click en corazones)
6. **Recargar** la página (F5) y verificar que favoritos persisten
7. **Rellenar** formulario de contacto
8. **Verificar** responsive (DevTools F12)

No requiere instalación, servidor ni dependencias. Es HTML estático.

## Navegadores Compatibles

Probado en:
- Chrome 120+
- Firefox 120+
- Edge 120+
- Safari 17+

## Tecnologías

- HTML5
- CSS3
- Bootstrap 5.3.2
- jQuery 3.7.1
- Google Fonts (Montserrat)

---

Proyecto desarrollado por Juan Borrás como prueba técnica para Mediaelx - Noviembre 2024

