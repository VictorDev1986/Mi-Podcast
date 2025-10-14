/* 
  Header.jsx
  Componente de barra de navegación superior
  Contiene el logo y los enlaces de navegación del sitio
*/

// Importamos React y Link de react-router-dom para la navegación
import React from 'react';
import { Link } from 'react-router-dom';

// Componente funcional Header
const Header = () => {
  return (
    // header: contenedor principal con fondo blanco y sombra
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Contenedor interno con padding y ancho máximo centrado */}
      <div className="container mx-auto px-4 py-4">
        {/* Flexbox para alinear logo y navegación */}
        <div className="flex items-center justify-between">
          
          {/* Logo y nombre del podcast */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Ícono de micrófono con gradiente */}
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                {/* SVG de micrófono */}
                <path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z" />
                <path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z" />
              </svg>
            </div>
            {/* Nombre del podcast con efecto hover */}
            <span className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">
              Mi Podcast
            </span>
          </Link>

          {/* Menú de navegación */}
          <nav className="hidden md:flex space-x-8">
            {/* Link a la página de inicio */}
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary pb-1"
            >
              Inicio
            </Link>
            
            {/* Link a la página de todos los episodios */}
            <Link 
              to="/episodes" 
              className="text-gray-700 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary pb-1"
            >
              Episodios
            </Link>
            
            {/* Link a la página Acerca de */}
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary pb-1"
            >
              Acerca de
            </Link>
            
            {/* Link a la página de contacto */}
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary pb-1"
            >
              Contacto
            </Link>
          </nav>

          {/* Botón de menú móvil (hamburguesa) - solo visible en pantallas pequeñas */}
          <button className="md:hidden text-gray-700 hover:text-primary">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {/* Ícono de menú hamburguesa */}
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

// Exportamos el componente para usarlo en otras partes de la aplicación
export default Header;
