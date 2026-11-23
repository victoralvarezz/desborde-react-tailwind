# BRUTA! LAB — Home neobrutalista con React y Tailwind CSS

Proyecto nuevo e independiente para la práctica de Desarrollo de Interfaces.

## Lo que cumple

- React + TypeScript + Vite.
- Componente principal `src/Home.tsx`.
- Tailwind CSS v3 aplicado al layout (`grid`, `flex`, `sm:`, `lg:`, `xl:`, `px`, `gap`, etc.).
- Diseño **neobrutalista**: titulares enormes, bordes negros gruesos, colores fuertes, sombras rectas y superposición de formas.
- **Interacciones reales**: cambiar color, menú móvil, filtrar proyectos, guardar/quitar favoritos y abrir/cerrar detalles.
- Layout con **vh** y **dvh**: `src/styles.css` incluye `.hero-viewport`, `.poster-stage` y `.project-modal`. `dvh` corrige el alto útil en navegadores móviles.
- RWD con breakpoints: móvil (una columna de proyectos), tablet (dos columnas), escritorio (tres columnas); composición hero a dos columnas en escritorio.
- Navegación por anclas, etiquetas ARIA y respeto a `prefers-reduced-motion`.

## Abrirlo en Visual Studio Code

1. Descomprime el ZIP y abre la carpeta `bruta-home-react`.
2. Abre la terminal integrada (`Terminal > Nueva terminal`).
3. Ejecuta:

```bash
npm install
npm run dev
```

4. Abre la URL que te muestre Vite, normalmente `http://localhost:5173/`.

## Comprobar tres dispositivos

En Edge / Chrome: `F12` > `Ctrl + Shift + M` > introducir:

- **Móvil:** 390 x 844
- **Tablet:** 768 x 1024
- **Escritorio:** 1280 x 800

Saca una captura de cada tamaño, con la URL visible y sin errores en consola.

## Pruebas manuales

- Pulsa **CAMBIAR COLOR**: rota entre tres colores.
- En móvil abre/cierra el menú ☰.
- En PROYECTOS elige Web / Identidad / Motion: cambian los resultados.
- Pulsa ♡ en una tarjeta: se guarda o desmarca.
- Pulsa ↗ en una tarjeta: se abre el detalle. Cierra con ✕, clic fuera o Escape.
- Comprueba que no haya barra de desplazamiento horizontal.

## Compilación

```bash
npm run build
npm run preview
```

El resultado optimizado queda en `dist/`.

## GitHub y Vercel — para el final

Cuando hayas terminado y revisado el diseño, crea un repositorio en GitHub. Después impórtalo desde Vercel. **Framework**: Vite. **Build command**: `npm run build`. **Output directory**: `dist`. El archivo `vercel.json` ya contiene estos ajustes.

## Dónde explicar los recursos en la entrega

1. **Brutalismo:** `src/Home.tsx` sección Hero, tarjetas `feature-card` y `src/styles.css` (`.brutal-button`, `.outline-type`, sombras y bordes).
2. **Interacciones:** `useState`, `setFilter`, `toggleLike`, `setAccentIndex`, `setMenuOpen`, `setSelectedProject` en `Home.tsx`.
3. **Layout con vh:** `.hero-viewport` usa `calc(100vh - 82px)` + `calc(100dvh - 82px)`; `.poster-stage` usa `52vh` + `52dvh`.
4. **Responsive:** clases Tailwind `sm:`, `lg:`, `xl:` y media queries en `src/styles.css`.

**Nota:** el contenido y los proyectos son ficticios y se usan únicamente como demo visual. No se conecta a ninguna base de datos.
