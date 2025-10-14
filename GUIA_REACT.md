# 📖 Guía Educativa Completa - Conceptos de React

Esta guía complementa el proyecto de podcast explicando en detalle todos los conceptos de React utilizados.

---

## 📑 Tabla de Contenidos

1. [Componentes y JSX](#componentes-y-jsx)
2. [Props](#props)
3. [Hooks](#hooks)
4. [Context API](#context-api)
5. [React Router](#react-router)
6. [Tailwind CSS](#tailwind-css)

---

## 🧩 Componentes y JSX

### ¿Qué es un Componente?

Un componente es una pieza reutilizable de interfaz de usuario. Piensa en ellos como bloques LEGO que puedes combinar para construir tu aplicación.

**Ejemplo del proyecto:**
```jsx
// Header.jsx es un componente
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Contenido del header */}
    </header>
  );
};
```

### JSX (JavaScript XML)

JSX permite escribir HTML dentro de JavaScript. Es la sintaxis que ves en los componentes.

**Reglas importantes:**
- Usa `className` en lugar de `class`
- Los atributos usan camelCase: `onClick`, `onChange`
- Debes cerrar todas las etiquetas: `<img />`, `<input />`
- Solo puedes retornar un elemento raíz (usa `<div>` o `<>` para envolver)

---

## 🎯 Props

### ¿Qué son las Props?

Props (properties) son datos que se pasan de un componente padre a un componente hijo.

**Analogía:** Son como argumentos de una función.

### Ejemplo del proyecto:

```jsx
// Componente padre (Home.jsx)
<EpisodeList 
  limit={6} 
  title="Últimos Episodios" 
/>

// Componente hijo (EpisodeList.jsx)
const EpisodeList = ({ limit, title }) => {
  // Ahora 'limit' vale 6 y 'title' vale "Últimos Episodios"
  return <h2>{title}</h2>;
};
```

### Destructuración de Props

```jsx
// Forma 1: Sin destructuración
const EpisodeCard = (props) => {
  return <h3>{props.episode.title}</h3>;
};

// Forma 2: Con destructuración (recomendado)
const EpisodeCard = ({ episode }) => {
  return <h3>{episode.title}</h3>;
};
```

---

## 🪝 Hooks

Los Hooks son funciones especiales que permiten usar características de React en componentes funcionales.

### 1. useState

**¿Qué hace?** Crea una variable de estado que React vigila.

**¿Cuándo se usa?** Cuando un dato necesita cambiar y actualizar la interfaz.

**Sintaxis:**
```jsx
const [estado, setEstado] = useState(valorInicial);
```

**Ejemplo del proyecto:**
```jsx
// En Contact.jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

// Para actualizar el estado:
setFormData({
  ...formData,  // Mantiene los valores anteriores
  name: 'Juan'  // Actualiza solo 'name'
});
```

**Reglas importantes:**
- Nunca modifiques el estado directamente: `estado = 'nuevo'` ❌
- Usa siempre la función set: `setEstado('nuevo')` ✅
- React compara estados y solo re-renderiza si cambian

### 2. useEffect

**¿Qué hace?** Ejecuta código después de que el componente se renderiza.

**¿Cuándo se usa?** Para cargar datos, suscripciones, timers, etc.

**Sintaxis:**
```jsx
useEffect(() => {
  // Código a ejecutar
  
  return () => {
    // Limpieza (opcional)
  };
}, [dependencias]);
```

**Ejemplo del proyecto:**
```jsx
// En EpisodeList.jsx
useEffect(() => {
  loadEpisodes(); // Carga los episodios al montar
}, []); // Array vacío = solo se ejecuta una vez

// Con dependencias:
useEffect(() => {
  filtrarEpisodios();
}, [searchTerm, category]); // Se ejecuta cuando cambian
```

**Patrones comunes:**

```jsx
// 1. Ejecutar solo una vez (al montar)
useEffect(() => {
  console.log('Componente montado');
}, []);

// 2. Ejecutar cuando cambia una variable
useEffect(() => {
  console.log('searchTerm cambió:', searchTerm);
}, [searchTerm]);

// 3. Ejecutar siempre (cada renderizado)
useEffect(() => {
  console.log('Cada renderizado');
}); // Sin array de dependencias
```

### 3. useContext

**¿Qué hace?** Accede a datos globales sin pasar props manualmente.

**¿Cuándo se usa?** Para compartir datos entre muchos componentes.

**Ejemplo del proyecto:**
```jsx
// 1. Crear el contexto (PlayerContext.jsx)
const PlayerContext = createContext();

// 2. Crear el Provider
export const PlayerProvider = ({ children }) => {
  const [currentEpisode, setCurrentEpisode] = useState(null);
  
  return (
    <PlayerContext.Provider value={{ currentEpisode, setCurrentEpisode }}>
      {children}
    </PlayerContext.Provider>
  );
};

// 3. Crear hook personalizado
export const usePlayer = () => useContext(PlayerContext);

// 4. Usar en cualquier componente
const Player = () => {
  const { currentEpisode } = usePlayer();
  return <div>{currentEpisode?.title}</div>;
};
```

### 4. useParams

**¿Qué hace?** Obtiene parámetros de la URL.

**Ejemplo del proyecto:**
```jsx
// URL: /episode/3
const { id } = useParams(); // id = "3"

// Buscar el episodio
const episode = episodes.find(ep => ep.id === parseInt(id));
```

### 5. useRef

**¿Qué hace?** Crea una referencia a un elemento del DOM o valor que persiste.

**Ejemplo del proyecto:**
```jsx
// En Player.jsx
const playerRef = useRef(null);

// Luego puedes acceder al elemento:
playerRef.current.seekTo(10); // Salta a 10 segundos
```

---

## 🌐 Context API

### ¿Qué problema resuelve?

Sin Context, pasarías props por muchos niveles:

```
App → Home → EpisodeList → EpisodeCard → Button
```

Con Context, cualquier componente accede directo al dato.

### Estructura completa:

```jsx
// 1. Crear contexto
const MiContexto = createContext();

// 2. Crear Provider
export const MiProvider = ({ children }) => {
  const [data, setData] = useState('valor');
  
  const value = {
    data,
    setData,
    otraFuncion: () => {}
  };
  
  return (
    <MiContexto.Provider value={value}>
      {children}
    </MiContexto.Provider>
  );
};

// 3. Hook personalizado
export const useMiContexto = () => {
  const context = useContext(MiContexto);
  if (!context) {
    throw new Error('useMiContexto debe usarse dentro de MiProvider');
  }
  return context;
};

// 4. Envolver la app
<MiProvider>
  <App />
</MiProvider>

// 5. Usar en componentes
const Componente = () => {
  const { data, setData } = useMiContexto();
  return <div>{data}</div>;
};
```

---

## 🧭 React Router

### Conceptos básicos:

**BrowserRouter:** Habilita el enrutamiento
**Routes:** Contenedor de rutas
**Route:** Define una ruta específica
**Link:** Navega sin recargar la página

### Ejemplo del proyecto:

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

<Router>
  {/* Navegación */}
  <Link to="/">Inicio</Link>
  <Link to="/episodes">Episodios</Link>
  
  {/* Rutas */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/episodes" element={<Episodes />} />
    <Route path="/episode/:id" element={<EpisodeDetail />} />
  </Routes>
</Router>
```

### Rutas dinámicas:

```jsx
// Definir ruta con parámetro
<Route path="/episode/:id" element={<EpisodeDetail />} />

// Obtener parámetro en el componente
const { id } = useParams();
```

### Navegación programática:

```jsx
const navigate = useNavigate();

// Navegar a otra página
navigate('/episodes');

// Navegar con parámetro
navigate(`/episode/${episodeId}`);

// Ir atrás
navigate(-1);
```

---

## 🎨 Tailwind CSS

### Clases utilitarias:

Tailwind usa clases pequeñas que hacen una sola cosa:

```jsx
<div className="flex items-center justify-between p-4 bg-blue-500 rounded-lg shadow-md">
```

### Categorías principales:

**Layout:**
- `flex`, `grid` - Tipo de display
- `container` - Contenedor centrado
- `mx-auto` - Margen horizontal automático

**Espaciado:**
- `p-4` - Padding de 1rem
- `m-8` - Margin de 2rem
- `space-x-4` - Espacio horizontal entre hijos
- `gap-6` - Espacio en grid

**Colores:**
- `bg-blue-500` - Fondo azul
- `text-white` - Texto blanco
- `border-gray-200` - Borde gris

**Tipografía:**
- `text-xl` - Tamaño de texto
- `font-bold` - Negrita
- `text-center` - Centrado

**Responsive:**
- `md:grid-cols-2` - 2 columnas en pantallas medianas
- `lg:text-4xl` - Texto grande en pantallas grandes

**Efectos:**
- `hover:bg-blue-600` - Cambio al hacer hover
- `transition-all` - Transición suave
- `shadow-lg` - Sombra grande
- `rounded-lg` - Bordes redondeados

### Clases personalizadas:

En `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#8B5CF6',
    }
  }
}
```

Luego usar: `bg-primary`, `text-primary`

---

## 🎓 Mejores Prácticas

### 1. Nomenclatura de componentes
- Usa PascalCase: `EpisodeCard.jsx`
- Nombres descriptivos: `UserProfileHeader` en vez de `Header2`

### 2. Organización de archivos
```
src/
├── components/  # Componentes reutilizables
├── pages/       # Páginas completas
├── context/     # Contextos globales
├── hooks/       # Hooks personalizados (opcional)
└── utils/       # Funciones auxiliares (opcional)
```

### 3. Hooks
- Siempre al inicio del componente
- Nunca dentro de condicionales o loops
- Nombres con prefijo `use`: `usePlayer`, `useAuth`

### 4. Props
- Destructura props: `({ title, description })`
- Usa PropTypes o TypeScript para validación
- Valores por defecto: `const Comp = ({ limit = 10 }) => {}`

### 5. Estado
- Mantén el estado lo más local posible
- Usa Context solo para datos globales
- No guardes en estado datos que puedes calcular

---

## 🚀 Próximos Pasos

Ahora que entiendes los conceptos, prueba:

1. Agregar más episodios al JSON
2. Crear una categoría nueva
3. Implementar modo oscuro
4. Añadir animaciones con Framer Motion
5. Conectar con una API real
6. Implementar autenticación

---

**¡Sigue practicando y construyendo! 💪**
