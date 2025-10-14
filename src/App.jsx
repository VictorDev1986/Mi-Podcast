/* 
  App.jsx
  Componente principal de la aplicación
  Configura el enrutamiento con React Router y estructura la aplicación
*/

// Importamos React
import React from 'react';
// BrowserRouter: componente que habilita el enrutamiento en la aplicación
// Routes: contenedor para definir todas las rutas
// Route: define una ruta específica y qué componente renderizar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos el PlayerProvider para envolver toda la aplicación con el contexto del reproductor
import { PlayerProvider } from './context/PlayerContext';

// Importamos los componentes de layout (Header, Footer, Player)
import Header from './components/Header';
import Footer from './components/Footer';
import Player from './components/Player';

// Importamos todas las páginas de la aplicación
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import EpisodeDetail from './pages/EpisodeDetail';
import About from './pages/About';
import Contact from './pages/Contact';

// Componente principal App
function App() {
  return (
    // PlayerProvider: envuelve toda la aplicación para que cualquier componente
    // pueda acceder al contexto del reproductor usando usePlayer()
    <PlayerProvider>
      {/* Router: habilita el sistema de navegación de React Router */}
      <Router>
        {/* 
          Estructura principal de la aplicación:
          - flex flex-col: diseño vertical (columna)
          - min-h-screen: altura mínima del 100% de la pantalla
          - pb-32: padding bottom para dejar espacio al reproductor fijo
        */}
        <div className="flex flex-col min-h-screen pb-32">
          
          {/* Header: barra de navegación que aparece en todas las páginas */}
          <Header />

          {/* 
            main: contenedor principal del contenido
            flex-grow: hace que este elemento crezca para ocupar el espacio disponible
          */}
          <main className="flex-grow">
            {/* 
              Routes: contenedor para todas las rutas
              Solo una ruta se renderiza a la vez, dependiendo de la URL actual
            */}
            <Routes>
              {/* 
                Route: define una ruta
                - path: la URL que debe coincidir
                - element: el componente que se renderiza cuando la ruta coincide
              */}
              
              {/* Ruta principal (/) muestra la página Home */}
              <Route path="/" element={<Home />} />
              
              {/* Ruta /episodes muestra todos los episodios */}
              <Route path="/episodes" element={<Episodes />} />
              
              {/* 
                Ruta dinámica /episode/:id 
                :id es un parámetro que puede ser cualquier valor (1, 2, 3, etc.)
                El componente EpisodeDetail usa useParams() para obtener este id
              */}
              <Route path="/episode/:id" element={<EpisodeDetail />} />
              
              {/* Ruta /about muestra información del podcast */}
              <Route path="/about" element={<About />} />
              
              {/* Ruta /contact muestra el formulario de contacto */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer: pie de página que aparece en todas las páginas */}
          <Footer />

          {/* 
            Player: reproductor global de audio
            - Posicionado fijo en la parte inferior de la pantalla
            - Solo se muestra cuando hay un episodio seleccionado
            - Persiste entre cambios de página gracias al contexto
          */}
          <Player />
        </div>
      </Router>
    </PlayerProvider>
  );
}

// Exportamos el componente App
export default App;
