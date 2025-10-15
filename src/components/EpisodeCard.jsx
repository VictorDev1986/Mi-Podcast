/* 
  EpisodeCard.jsx
  Componente que muestra una tarjeta individual de episodio
  Incluye imagen, título, descripción y botón de reproducción
*/

// Importamos React y el hook del reproductor
import React from 'react';
import { usePlayer } from '../context/PlayerContext';
import { Link } from 'react-router-dom';

// Componente funcional que recibe el objeto 'episode' como prop
const EpisodeCard = ({ episode }) => {
  
  // Desestructuramos las funciones y estado del contexto del reproductor
  // usePlayer() nos da acceso al reproductor global
  const { playEpisode, currentEpisode, isPlaying } = usePlayer();

  // Verificamos si este episodio es el que se está reproduciendo actualmente
  // Esto nos permite mostrar un indicador visual diferente
  const isCurrentEpisode = currentEpisode?.id === episode.id;

  // Función que se ejecuta al hacer clic en el botón de reproducir
  const handlePlay = () => {
    playEpisode(episode); // Envía este episodio al reproductor global
  };

  return (
    // Tarjeta con animación hover y sombra
    // episode-card es una clase personalizada definida en index.css
    <div className="episode-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:border-purple-500/40 hover:shadow-lg transition-all">
      
      {/* Contenedor de la imagen con link al detalle */}
      <Link to={`/episode/${episode.id}`}>
        {/* Imagen del episodio con aspect ratio rectangular */}
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={episode.image} 
            alt={episode.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badge de categoría superpuesto en la esquina superior derecha */}
          <div className="absolute top-3 right-3">
            <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              {episode.category}
            </span>
          </div>

          {/* Indicador visual si este episodio se está reproduciendo */}
          {isCurrentEpisode && isPlaying && (
            <div className="absolute top-3 left-3">
              {/* Animación de barras ecualizador */}
              <div className="flex items-end space-x-1 bg-secondary rounded-full px-2 py-1">
                <div className="w-1 h-2 bg-white animate-pulse"></div>
                <div className="w-1 h-3 bg-white animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 h-4 bg-white animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
        </div>
      </Link>

      {/* Contenido de la tarjeta con padding */}
      <div className="p-4">
        
        {/* Título del episodio con link */}
        <Link to={`/episode/${episode.id}`}>
          <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-primary transition-colors line-clamp-2">
            {episode.title}
          </h3>
        </Link>

        {/* Descripción truncada a 2 líneas */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {episode.description}
        </p>

        {/* Contenedor flex para duración y fecha */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          {/* Duración con ícono de reloj */}
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{episode.duration}</span>
          </div>
          
          {/* Fecha de publicación con ícono de calendario */}
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {/* Formateamos la fecha para que sea legible */}
            <span>{new Date(episode.date).toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>

        {/* Botón de reproducción */}
        <button
          onClick={handlePlay}
          // Cambiamos el estilo si es el episodio actual
          className={`w-full py-2.5 px-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center space-x-2
            ${isCurrentEpisode && isPlaying
              ? 'bg-secondary text-white shadow-lg shadow-secondary/50' 
              : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:shadow-primary/50 hover:scale-105'
            }`}
        >
          {/* Ícono de play/pause dinámico */}
          {isCurrentEpisode && isPlaying ? (
            // Ícono de ondas de sonido cuando está reproduciendo
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
              <span>Reproduciendo...</span>
            </>
          ) : (
            // Ícono de play por defecto
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <span>Reproducir</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// Exportamos el componente
export default EpisodeCard;
