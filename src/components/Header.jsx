/* 
  Header.jsx
  Componente de barra de navegación superior
  Contiene el logo y los enlaces de navegación del sitio
*/

// Importamos React, useState para el estado y Link de react-router-dom para la navegación
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Componente funcional Header
const Header = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // header: contenedor principal con transparencia y blur, pegado a los bordes
    <header className="bg-dark/80 backdrop-blur-xl border-b border-purple-500/20 sticky top-0 z-50 w-full shadow-lg shadow-purple-500/10">
      {/* Contenedor interno con padding y ancho máximo centrado */}
      <div className="max-w-7xl mx-auto px-4 py-4">
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
            <span className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
              Mi Podcast
            </span>
          </Link>

          {/* Menú de navegación */}
          <nav className="hidden md:flex space-x-8">
            {/* Link a la página de inicio */}
            <Link 
              to="/" 
              className="text-gray-300 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary pb-1"
            >
              Inicio
            </Link>
            
            {/* Link a la página de todos los episodios */}
            <Link 
              to="/episodes" 
              className="text-gray-300 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary pb-1"
            >
              Episodios
            </Link>
            
            {/* Link a la página Acerca de */}
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary pb-1"
            >
              Acerca de
            </Link>
            
            {/* Link a la página de contacto */}
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary pb-1"
            >
              Contacto
            </Link>
          </nav>

          {/* Botón de menú móvil (hamburguesa) - solo visible en pantallas pequeñas */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-primary transition-colors focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {isMenuOpen ? (
              // Ícono de cerrar (X)
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              // Ícono de menú hamburguesa
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menú móvil desplegable - solo visible cuando isMenuOpen es true */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-purple-500/20 pt-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {/* Links del menú móvil */}
              <Link 
                to="/" 
                onClick={closeMenu}
                className="text-gray-300 hover:text-primary hover:bg-dark-card font-medium transition-colors px-4 py-2 rounded-lg"
              >
                🏠 Inicio
              </Link>
              
              <Link 
                to="/episodes" 
                onClick={closeMenu}
                className="text-gray-300 hover:text-primary hover:bg-dark-card font-medium transition-colors px-4 py-2 rounded-lg"
              >
                🎙️ Episodios
              </Link>
              
              <Link 
                to="/about" 
                onClick={closeMenu}
                className="text-gray-300 hover:text-primary hover:bg-dark-card font-medium transition-colors px-4 py-2 rounded-lg"
              >
                ℹ️ Acerca de
              </Link>
              
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className="text-gray-300 hover:text-primary hover:bg-dark-card font-medium transition-colors px-4 py-2 rounded-lg"
              >
                📧 Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

// Exportamos el componente para usarlo en otras partes de la aplicación
export default Header;
