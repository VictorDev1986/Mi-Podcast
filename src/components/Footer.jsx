/* 
  Footer.jsx
  Componente del pie de página del sitio
  Contiene enlaces a redes sociales y información de copyright
*/

// Importamos React
import React from 'react';

// Componente funcional Footer
const Footer = () => {
  return (
    // footer: contenedor principal con fondo oscuro y texto blanco
    <footer className="bg-dark text-white mt-auto">
      {/* Contenedor interno con padding */}
      <div className="container mx-auto px-4 py-8">
        {/* Grid con 3 columnas en pantallas grandes, 1 en móvil */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Columna 1: Información del podcast */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Mi Podcast</h3>
            <p className="text-gray-300 leading-relaxed">
              Tu espacio para aprender, inspirarte y crecer. 
              Cada episodio es una oportunidad para descubrir algo nuevo.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {/* Lista de enlaces útiles */}
              <li>
                <a href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/episodes" className="text-gray-300 hover:text-primary transition-colors">
                  Todos los episodios
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-primary transition-colors">
                  Acerca de nosotros
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales y plataformas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <p className="text-gray-300 mb-4">
              Escúchanos también en tus plataformas favoritas
            </p>
            
            {/* Contenedor de íconos de redes sociales */}
            <div className="flex space-x-4">
              
              {/* Ícono de Spotify */}
              <a 
                href="https://spotify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Spotify"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>

              {/* Ícono de YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Ícono de Apple Podcasts */}
              <a 
                href="https://podcasts.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Apple Podcasts"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2.5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S2.5 17.247 2.5 12 6.753 2.5 12 2.5zm0 4c-3.033 0-5.5 2.467-5.5 5.5 0 2.255 1.369 4.193 3.316 5.034l-.816 2.446c-2.421-1.05-4.119-3.459-4.119-6.23 0-3.76 3.049-6.81 6.81-6.81s6.81 3.05 6.81 6.81c0 2.771-1.698 5.18-4.119 6.23l-.816-2.446C15.631 16.193 17 14.255 17 12c0-3.033-2.467-5.5-5.5-5.5zm0 2c1.933 0 3.5 1.567 3.5 3.5 0 1.933-1.567 3.5-3.5 3.5S8.5 13.933 8.5 12 10.067 8.5 12 8.5zm0 2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm0 4.5c.414 0 .75.336.75.75v4.5a.75.75 0 01-1.5 0v-4.5c0-.414.336-.75.75-.75z"/>
                </svg>
              </a>

              {/* Ícono de RSS */}
              <a 
                href="/rss.xml" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="RSS Feed"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368C10.58 4.868 19.199 13.467 19.25 24h4.75C23.942 9.895 14.105.043 0 0v4.812z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          {/* Copyright con año dinámico */}
          <p>&copy; {new Date().getFullYear()} Mi Podcast. Todos los derechos reservados.</p>
          <p className="mt-2">
            Hecho con ❤️ usando React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

// Exportamos el componente
export default Footer;
