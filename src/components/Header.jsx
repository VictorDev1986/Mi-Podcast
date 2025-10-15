/* 
  Header.jsx
  Componente de barra de navegación superior
  Contiene el logo y los enlaces de navegación del sitio
*/

// Importamos React, useState para el estado, useEffect para efectos y Link de react-router-dom para la navegación
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Componente funcional Header
const Header = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Estado para controlar si se ha hecho scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll es mayor a 50px, activamos el estado
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Agregamos el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiamos el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para alternar el menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Función para volver arriba suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* header: contenedor principal con transparencia y blur, pegado a los bordes */}
      {/* Cambia de transparente a blanco con sombra al hacer scroll y se reduce en altura */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/50 backdrop-blur-xl border-b border-gray-200/60 shadow-lg' 
          : 'bg-white/20 backdrop-blur-md border-b border-gray-100/30'
      }`}>
      {/* Contenedor interno con padding y ancho máximo centrado - reduce padding al hacer scroll */}
      <div className={`max-w-7xl mx-auto px-4 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}>
        {/* Flexbox para alinear logo y navegación */}
        <div className="flex items-center justify-between">
          
          {/* Logo y nombre del podcast */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Ícono de micrófono con gradiente - se reduce al hacer scroll */}
            <div className={`bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${
              isScrolled ? 'w-8 h-8' : 'w-10 h-10'
            }`}>
              <svg 
                className={`text-white transition-all duration-500 ${
                  isScrolled ? 'w-5 h-5' : 'w-6 h-6'
                }`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                {/* SVG de micrófono */}
                <path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z" />
                <path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z" />
              </svg>
            </div>
            {/* Nombre del podcast con efecto hover - texto más pequeño al hacer scroll */}
            <span className={`font-bold text-gray-800 group-hover:text-primary transition-all duration-500 ${
              isScrolled ? 'text-xl' : 'text-2xl'
            }`}>
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
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary transition-colors focus:outline-none"
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
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {/* Links del menú móvil */}
              <Link 
                to="/" 
                onClick={closeMenu}
                className="text-gray-700 hover:text-primary hover:bg-purple-50 font-medium transition-colors px-4 py-2 rounded-lg"
              >
                🏠 Inicio
              </Link>
              
              <Link 
                to="/episodes" 
                onClick={closeMenu}
                className="text-gray-700 hover:text-primary hover:bg-purple-50 font-medium transition-colors px-4 py-2 rounded-lg"
              >
                🎙️ Episodios
              </Link>
              
              <Link 
                to="/about" 
                onClick={closeMenu}
                className="text-gray-700 hover:text-primary hover:bg-purple-50 font-medium transition-colors px-4 py-2 rounded-lg"
              >
                ℹ️ Acerca de
              </Link>
              
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className="text-gray-700 hover:text-primary hover:bg-purple-50 font-medium transition-colors px-4 py-2 rounded-lg"
              >
                📧 Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>

    {/* Botón flotante para volver arriba - solo visible después de hacer scroll */}
    {isScrolled && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-300 animate-fadeIn"
        aria-label="Volver arriba"
      >
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
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    )}
    </>
  );
};

// Exportamos el componente para usarlo en otras partes de la aplicación
export default Header;
