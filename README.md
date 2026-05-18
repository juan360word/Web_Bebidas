
# 🍹 BebidasShop

Aplicación web para buscar y guardar recetas de bebidas y cócteles, construida con React, TypeScript y Tailwind CSS. Consume la API pública de [TheCocktailDB](https://www.thecocktaildb.com/).

---

##  Demo

> Deploy en Vercel: web-bebidas.vercel.app
---


---

##  Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **React 18** | Librería principal de UI |
| **TypeScript** | Tipado estático del proyecto |
| **Tailwind CSS v4** | Estilos utilitarios y diseño responsive |
| **Vite** | Bundler y servidor de desarrollo |
| **Zustand** | Manejo de estado global (Slice Pattern) |
| **Valibot** | Validación de esquemas y datos de la API |
| **Axios** | Peticiones HTTP a la API |
| **React Router DOM** | Enrutamiento client-side con lazy loading |
| **Headless UI** | Componente Modal accesible |
| **React Toastify** | Notificaciones |

---

##  Estructura del proyecto

```
src/
├── Component/         # Componentes reutilizables
│   ├── Header.tsx         # Barra de navegación principal
│   ├── DrinkCard.tsx      # Tarjeta de cada bebida
│   ├── Modal.tsx          # Modal de detalle de bebida
│   └── Notificacion.tsx   # Configuración de notificaciones
├── Layout/
│   └── HeaderLayout.tsx   # Layout principal con Outlet
├── Pages/             # Páginas de la aplicación
│   ├── principal.tsx      # Página de búsqueda
│   └── Favoritos.tsx      # Página de favoritos
├── Stores/            # Estado global con Zustand (Slice Pattern)
│   ├── StoreZustand.ts    # Store principal que combina los slices
│   ├── SlicePatern.ts     # Slice de búsqueda y categorías
│   ├── SliceFavoritos.ts  # Slice de favoritos con persistencia en localStorage
│   └── SliceNoti.ts       # Slice de notificaciones
├── services/
│   └── Api.ts             # Capa de servicios (Service Layer) con TheCocktailDB
├── ValiBot/
│   └── ValiBotSchema.ts   # Esquemas de validación de datos de la API
├── Types/
│   └── Types.ts           # Tipos e interfaces de TypeScript
└── Router.tsx         # Configuración de rutas con lazy loading
```

---

##  Funcionalidades

- **Búsqueda de bebidas** por nombre/ingrediente y categoría
- **Vista de detalle** de cada bebida en un modal con ingredientes y medidas
- **Favoritos** con persistencia en `localStorage` (los favoritos se mantienen al recargar)
- **Toggle de favoritos** desde el modal (agrega o quita según si ya existe)
- **Notificaciones** al agregar favoritos o cuando hay errores de validación
- **Diseño responsive** con grid adaptable a mobile, tablet y desktop
- **Lazy loading** de páginas para optimizar el tiempo de carga inicial

---

##  Arquitectura

### Slice Pattern con Zustand
El estado global se divide en slices independientes por responsabilidad, combinados en un único store:

```typescript
// Cada slice maneja una responsabilidad específica
create<sliceType & FavoriteSlice & Notislice>((...A) => ({
    ...createList(...A),       // Categorías y búsqueda
    ...createFavoritos(...A),  // Favoritos + localStorage
    ...createNoti(...A)        // Notificaciones
}))
```

### Service Layer
Toda la comunicación con la API está centralizada en `services/Api.ts`, separada de los componentes y del estado global:

- `getApi()` — Obtiene el listado de categorías
- `getRecipes()` — Busca bebidas por filtros
- `getInformacion()` — Obtiene el detalle de una bebida por ID

### Validación con Valibot
Los datos de la API se validan con esquemas de Valibot usando `safeParse()` antes de ser almacenados en el estado, garantizando que la app nunca procese datos con formato incorrecto.

---

## 🔌 API utilizada

[TheCocktailDB](https://www.thecocktaildb.com/) — API gratuita de cócteles y bebidas.

| Endpoint | Uso |
|---|---|
| `/list.php?c=list` | Listar categorías |
| `/filter.php?c={categoria}&i={ingrediente}` | Buscar bebidas por filtros |
| `/lookup.php?i={id}` | Detalle de una bebida por ID |

---

##  Correr el proyecto localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/BebidasShop.git

# 2. Instalar dependencias
npm install

# 3. Correr en desarrollo
npm run dev

# 4. Build para producción
npm run build
```

---

## Autor Juan David Serrato Alvarado
