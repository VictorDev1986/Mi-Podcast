# 🎙️ Mi Podcast - Sitio Web Educativo

Un sitio web moderno y funcional para publicar y escuchar episodios de podcast, construido con **Vite + React + Tailwind CSS** como proyecto educativo.

## 🎯 Objetivo del Proyecto

Este proyecto fue creado con fines educativos para demostrar:
- Cómo construir una aplicación React moderna desde cero
- Uso de React Context API para estado global
- Enrutamiento con React Router DOM
- Diseño responsivo con Tailwind CSS
- Integración de reproductor de audio con React Player
- Buenas prácticas de código con comentarios explicativos

## ⚙️ Tecnologías Utilizadas

- ⚛️ **React 18** - Librería de interfaz de usuario
- ⚡ **Vite** - Herramienta de construcción ultrarrápida
- 🎨 **Tailwind CSS** - Framework de CSS utilitario
- 🧭 **React Router DOM** - Enrutamiento del lado del cliente
- 🔊 **React Player** - Reproductor de audio/video
- 📦 **JSON** - Base de datos simple para episodios

## 📁 Estructura del Proyecto

```
my-podcast-site/
├── public/
│   └── audios/              # Archivos MP3 de episodios
├── src/
│   ├── assets/              # Imágenes e íconos
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.jsx       # Barra de navegación
│   │   ├── Footer.jsx       # Pie de página
│   │   ├── Player.jsx       # Reproductor de audio global
│   │   ├── EpisodeCard.jsx  # Tarjeta de episodio
│   │   └── EpisodeList.jsx  # Lista de episodios
│   ├── pages/               # Páginas de la aplicación
│   │   ├── Home.jsx         # Página principal
│   │   ├── Episodes.jsx     # Todos los episodios
│   │   ├── EpisodeDetail.jsx # Detalle de episodio
│   │   ├── About.jsx        # Acerca de
│   │   └── Contact.jsx      # Formulario de contacto
│   ├── context/
│   │   └── PlayerContext.jsx # Contexto global del reproductor
│   ├── data/
│   │   └── episodes.json    # Datos de episodios
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales + Tailwind
├── index.html               # HTML base con metaetiquetas SEO
├── tailwind.config.js       # Configuración de Tailwind
├── vite.config.js           # Configuración de Vite
└── package.json             # Dependencias y scripts
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 16+ instalado
- npm o yarn

### Pasos de instalación

1. **Instalar dependencias**
```bash
npm install
```

2. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

3. **Abrir en el navegador**
```
http://localhost:5173
```

### Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter de código

## 🧩 Funcionalidades Implementadas

✅ **Lista de episodios** - Carga y muestra episodios desde JSON  
✅ **Reproductor funcional** - Control de reproducción, pausa, volumen y progreso  
✅ **Diseño responsivo** - Se adapta a móvil, tablet y desktop  
✅ **Navegación entre páginas** - React Router DOM con rutas dinámicas  
✅ **Estado global** - Context API para el reproductor  
✅ **Búsqueda y filtros** - Filtra episodios por categoría y búsqueda  
✅ **Página de detalle** - Vista completa de cada episodio  
✅ **Formulario de contacto** - Con validación básica  
✅ **SEO optimizado** - Metaetiquetas para redes sociales  

## 📚 Conceptos de React Explicados

### 1. **Hooks Utilizados**

#### `useState`
Maneja el estado local de un componente.
```jsx
const [episodes, setEpisodes] = useState([]);
```

#### `useEffect`
Ejecuta efectos secundarios (como cargar datos) después del renderizado.
```jsx
useEffect(() => {
  loadEpisodes();
}, []);
```

#### `useContext`
Accede al contexto global sin pasar props manualmente.
```jsx
const { playEpisode } = usePlayer();
```

#### `useParams`
Obtiene parámetros de la URL en React Router.
```jsx
const { id } = useParams();
```

### 2. **Context API**

El `PlayerContext` proporciona estado global del reproductor:
- Estado del episodio actual
- Control de reproducción
- Funciones para play, pause, stop, etc.

Todos los componentes pueden acceder a este contexto sin pasar props.

### 3. **Props**

Los componentes reciben datos a través de props:
```jsx
<EpisodeCard episode={episode} />
```

### 4. **Enrutamiento**

React Router DOM gestiona la navegación:
```jsx
<Route path="/episode/:id" element={<EpisodeDetail />} />
```

## 🎨 Clases de Tailwind Utilizadas

- **Layout**: `flex`, `grid`, `container`, `mx-auto`
- **Espaciado**: `p-4`, `m-8`, `space-x-4`, `gap-8`
- **Colores**: `bg-primary`, `text-white`, `border-gray-200`
- **Tipografía**: `text-xl`, `font-bold`, `leading-relaxed`
- **Responsive**: `md:grid-cols-2`, `lg:text-4xl`
- **Efectos**: `hover:scale-105`, `transition-all`, `shadow-lg`
- **Redondeo**: `rounded-lg`, `rounded-full`, `rounded-2xl`

## 🔧 Personalización

### Cambiar colores
Edita `tailwind.config.js`:
```js
colors: {
  primary: '#tu-color',
  secondary: '#tu-color',
}
```

### Agregar más episodios
Edita `src/data/episodes.json` y agrega nuevos objetos con la estructura:
```json
{
  "id": 7,
  "title": "Nuevo episodio",
  "description": "Descripción...",
  "audioUrl": "/audios/episodio7.mp3",
  "image": "URL_de_imagen",
  "category": "Categoría",
  "duration": "20:00",
  "date": "2025-10-15"
}
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Conecta tu repositorio
3. Vercel detectará automáticamente Vite y lo desplegará

### Netlify
1. Crea una cuenta en [netlify.com](https://netlify.com)
2. Ejecuta `npm run build`
3. Arrastra la carpeta `dist` a Netlify

## 📖 Recursos de Aprendizaje

- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)
- [Documentación de Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [React Player](https://www.npmjs.com/package/react-player)

## 👨‍💻 Autor

Este es un proyecto educativo creado para demostrar conceptos de React y desarrollo web moderno.

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**¡Disfruta aprendiendo con este proyecto! 🎉**
