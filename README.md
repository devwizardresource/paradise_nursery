# Paradise Nursery

**Paradise Nursery** es el front-end de una tienda online de plantas de interior, construido con
React, Redux Toolkit y Vite. Permite explorar un catálogo de plantas, añadirlas a un carrito de
compras y gestionar las cantidades antes de pasar por caja.

## Funcionalidades

- **Página de aterrizaje**: imagen de fondo, nombre de la empresa, párrafo sobre la empresa y
  botón "Comenzar" que lleva al listado de productos.
- **Listado de productos**: 18 plantas únicas en 3 categorías (purificadoras de aire, aromáticas y
  de bajo mantenimiento), cada una con miniatura, nombre, descripción, precio y botón
  "Añadir al carrito" que se desactiva una vez añadida la planta.
- **Cabecera / navbar**: presente en el listado y en el carrito, con enlaces a Inicio, Plantas y
  Carrito, y un icono de carrito con el número total de artículos actualizado dinámicamente.
- **Carrito de compras**: número total de plantas, importe total, y por cada planta su miniatura,
  nombre, precio unitario, subtotal, botones de aumentar/disminuir, botón de eliminar, además de
  los botones "Continuar comprando" y "Pagar" (muestra "Próximamente").

## Estructura

```
src/
├── App.jsx          # Página de aterrizaje y cambio a la tienda
├── App.css          # Estilos de la landing (incluye la imagen de fondo)
├── AboutUs.jsx      # Información sobre la empresa
├── ProductList.jsx  # Navbar + catálogo de plantas
├── CartItem.jsx     # Página del carrito de compras
├── CartSlice.jsx    # Slice de Redux (addItem, removeItem, updateQuantity)
└── store.js         # Store de Redux
```

## Uso en local

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción en dist/
```

## Despliegue en GitHub Pages

Opción A — GitHub Actions (recomendada): sube el repositorio a la rama `main` y en
**Settings → Pages → Build and deployment** selecciona **GitHub Actions**. El workflow
`.github/workflows/deploy.yml` construye y publica la app automáticamente.

Opción B — paquete `gh-pages`:

```bash
npm run deploy    # construye y publica dist/ en la rama gh-pages
```

Luego en **Settings → Pages** selecciona la rama `gh-pages`.

## Tecnologías

React 19 · Redux Toolkit · React Redux · Vite
