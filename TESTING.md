# Lista de Verificación - Testing de la Maquetación

## Cómo Probar la Página

1. Abre `index.html` en tu navegador (doble click en el archivo)
2. Sigue esta checklist para verificar que todo funciona correctamente

## ✅ Checklist de Funcionalidades

### Header y Navegación
- [ ] El topbar muestra: teléfono, email, idioma y Facebook
- [ ] El header tiene 3 columnas: menú izq, logo centro, opciones derecha
- [ ] Click en "Menú" abre el panel lateral desde la izquierda
- [ ] El menú lateral se puede cerrar con: botón X, click fuera, o tecla ESC
- [ ] Los enlaces del menú hacen scroll suave a las secciones
- [ ] El enlace activo se marca en amarillo según la sección visible

### Hero Section
- [ ] El título "INMO VALLEY" se ve en grande y blanco
- [ ] El subtítulo "Siempre a tu lado" aparece en cursiva dorada a la derecha
- [ ] La flecha circular está visible y hace scroll al buscador al hacer click

### Buscador
- [ ] Los campos del buscador están en una fila horizontal
- [ ] Los botones "Buscar", "Limpiar Filtros" y "Búsqueda Avanzada" están en segunda fila
- [ ] Al buscar por estado (ej: "Venta") filtra correctamente
- [ ] Al buscar por tipo (ej: "Chalet") filtra correctamente
- [ ] Al buscar por población filtra correctamente
- [ ] Al buscar por precio hasta filtra correctamente
- [ ] Al buscar por referencia (ej: "CH-272") filtra correctamente
- [ ] El botón "Limpiar Filtros" restaura todas las propiedades
- [ ] Después de buscar, hace scroll automático a la sección de propiedades

### Banner/Categorías
- [ ] Se ve "Elige tu futuro" arriba
- [ ] Hay un icono IV centrado
- [ ] Las 3 tarjetas tienen efecto hover
- [ ] La tarjeta central es amarilla

### Propiedad del Mes
- [ ] El título dice "PROPIEDAD" y "del mes" está en cursiva dorada
- [ ] La imagen está a la izquierda
- [ ] La información se superpone a la derecha
- [ ] Al hacer hover la imagen hace zoom
- [ ] El botón de corazón está en la esquina superior derecha
- [ ] El botón de corazón cambia al hacer click

### Vende tu Propiedad
- [ ] Hay un icono IV cuadrado amarillo
- [ ] "VENDE TU PROPIEDAD" está en mayúsculas
- [ ] "Con Nosotros" está en cursiva dorada
- [ ] El botón "Quiero vender" es amarillo

### Propiedades Destacadas
- [ ] Hay 2 propiedades grandes arriba
- [ ] Hay 2 propiedades abajo
- [ ] Una de las propiedades tiene badge turquesa (CH-265)
- [ ] Al hacer hover las tarjetas se elevan
- [ ] Al hacer hover las imágenes hacen zoom
- [ ] Los corazones de favoritos funcionan
- [ ] Los favoritos persisten al recargar la página F5

### Últimas Noticias
- [ ] El título "Últimas" está en vertical
- [ ] "Noticias" está en cursiva dorada
- [ ] Hay un botón + circular
- [ ] Las 2 tarjetas tienen flecha en la esquina

### Formulario de Contacto
- [ ] El fondo es amarillo/verde (gradiente)
- [ ] El título tiene "con" en cursiva
- [ ] Al enviar sin nombre muestra error
- [ ] Al enviar con email inválido muestra error
- [ ] Al enviar sin aceptar privacidad muestra error
- [ ] Si todo es correcto, muestra "ENVIANDO..." y luego "Gracias por contactarnos"

### Footer
- [ ] El logo está centrado arriba
- [ ] El teléfono y email están centrados
- [ ] El menú está centrado en horizontal
- [ ] El icono de Facebook está centrado
- [ ] Abajo dice "© 2025 INMOVALLEY" y "Diseño: MEDIAELX"

### Botones Fijos
- [ ] Hay un botón amarillo fijo a la derecha que dice "Valora tu propiedad"
- [ ] Hay un botón verde WhatsApp flotante abajo a la derecha

### Responsive
- [ ] En móvil el header se adapta correctamente
- [ ] En móvil el buscador apila los campos
- [ ] En móvil las tarjetas de propiedades se apilan
- [ ] En tablet (768px-991px) se ve correctamente

## 🐛 Verificaciones Técnicas

### Consola del Navegador (F12)
- [ ] No hay errores rojos en la consola
- [ ] jQuery se carga correctamente
- [ ] Bootstrap se carga correctamente
- [ ] Font Awesome se carga correctamente

### Rendimiento
- [ ] La página carga rápido
- [ ] Las imágenes se ven bien
- [ ] Las transiciones son suaves
- [ ] No hay parpadeos o saltos

### Código
- [ ] El código HTML está bien indentado
- [ ] El CSS usa BEM consistentemente
- [ ] El JavaScript tiene comentarios claros
- [ ] No hay código comentado o innecesario

## 🎯 Comparación Visual

Abre en dos pestañas:
1. Tu maquetación: `index.html`
2. Original: https://inmovalley.com

Compara lado a lado:
- [ ] Los colores son iguales o muy similares
- [ ] Las tipografías coinciden
- [ ] Los tamaños de elementos son similares
- [ ] El layout es el mismo
- [ ] Los efectos hover son similares

## ❌ Errores Comunes a Evitar

- ❌ El menú lateral no se abre → Verificar jQuery cargado
- ❌ El buscador no filtra → Verificar data attributes en tarjetas
- ❌ Los favoritos no persisten → Verificar localStorage habilitado
- ❌ Las imágenes no cargan → Verificar rutas en carpeta assets/
- ❌ Font Awesome no se ve → Verificar conexión a internet (es CDN)

## 📧 Antes de Enviar

1. **Haz todas las pruebas de esta lista**
2. **Prueba en Chrome y Firefox**
3. **Prueba en móvil (o DevTools F12 responsive)**
4. **Revisa que no haya errores en consola**
5. **Comprime la carpeta completa en ZIP**
6. **Envía con un email profesional**

## 💡 Tip Final

Si algo no funciona, abre la consola (F12) y busca errores en rojo. La mayoría de problemas se resuelven verificando:
- Rutas de imágenes correctas
- jQuery cargado antes que main.js
- Selectores CSS bien escritos

---

**Todo listo para demostrar tu valía como maquetador profesional. ¡Buena suerte!**

