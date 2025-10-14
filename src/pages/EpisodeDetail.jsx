/* 
  EpisodeDetail.jsx
  Página de detalle de un episodio específico
  Muestra información completa y permite reproducir el episodio
*/

// Importamos React y hooks
import React from 'react';
// useParams: hook para obtener parámetros de la URL (ej: /episode/1 -> id=1)
import { useParams, Link, useNavigate } from 'react-router-dom';
// Hook del reproductor
import { usePlayer } from '../context/PlayerContext';
// Datos de episodios
import episodesData from '../data/episodes.json';

// Componente funcional EpisodeDetail
const EpisodeDetail = () => {
  
  // useParams(): obtiene los parámetros de la URL
  // Si la ruta es /episode/3, entonces id = "3"
  const { id } = useParams();
  
  // useNavigate(): hook para navegar programáticamente
  const navigate = useNavigate();
  
  // Obtenemos funciones del contexto del reproductor
  const { playEpisode, currentEpisode, isPlaying } = usePlayer();

  // Buscamos el episodio que coincida con el id de la URL
  // parseInt() convierte el string "3" a número 3
  const episode = episodesData.find(ep => ep.id === parseInt(id));

  // Si no se encuentra el episodio, mostramos un mensaje de error
  if (!episode) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Episodio no encontrado
          </h2>
          <p className="text-gray-400 mb-6">
            El episodio que buscas no existe o ha sido eliminado
          </p>
          <Link
            to="/episodes"
            className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-3 rounded-lg hover:shadow-xl hover:shadow-primary/50 transition-all inline-block"
          >
            Ver todos los episodios
          </Link>
        </div>
      </div>
    );
  }

  // Verificamos si este es el episodio actual
  const isCurrentEpisode = currentEpisode?.id === episode.id;

  // Función para reproducir este episodio
  const handlePlay = () => {
    playEpisode(episode);
  };

  // Función para ir al episodio anterior
  const handlePrevious = () => {
    // Buscamos el episodio con id anterior
    const prevEpisode = episodesData.find(ep => ep.id === episode.id - 1);
    if (prevEpisode) {
      navigate(`/episode/${prevEpisode.id}`);
    }
  };

  // Función para ir al siguiente episodio
  const handleNext = () => {
    // Buscamos el episodio con id siguiente
    const nextEpisode = episodesData.find(ep => ep.id === episode.id + 1);
    if (nextEpisode) {
      navigate(`/episode/${nextEpisode.id}`);
    }
  };

  // Verificamos si hay episodios anterior y siguiente
  const hasPrevious = episode.id > 1;
  const hasNext = episode.id < episodesData.length;

  return (
    <div className="min-h-screen bg-dark">
      
      {/* Breadcrumbs - Navegación de migas de pan */}
      <div className="bg-dark-lighter border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-400 hover:text-primary">
              Inicio
            </Link>
            <span className="text-gray-600">/</span>
            <Link to="/episodes" className="text-gray-400 hover:text-primary">
              Episodios
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-200 font-medium">
              Episodio {episode.id}
            </span>
          </nav>
        </div>
      </div>

      {/* Contenido principal del episodio */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Layout de dos columnas en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Columna 1: Imagen y botón de reproducción (sticky en desktop) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              
              {/* Imagen del episodio */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full aspect-square object-cover"
                />
                
                {/* Badge de categoría */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                    {episode.category}
                  </span>
                </div>

                {/* Indicador de reproducción */}
                {isCurrentEpisode && isPlaying && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center bg-secondary rounded-full px-4 py-2 shadow-lg">
                      <div className="flex items-end space-x-1 mr-2">
                        <div className="w-1 h-3 bg-white animate-pulse"></div>
                        <div className="w-1 h-4 bg-white animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1 h-5 bg-white animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <span className="text-white text-sm font-semibold">Reproduciendo</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Botón de reproducción grande */}
              <button
                onClick={handlePlay}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-3 shadow-lg ${
                  isCurrentEpisode && isPlaying
                    ? 'bg-secondary text-white'
                    : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-2xl hover:scale-105'
                }`}
              >
                {isCurrentEpisode && isPlaying ? (
                  <>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                    </svg>
                    <span>Reproduciendo ahora</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    <span>Reproducir Episodio</span>
                  </>
                )}
              </button>

              {/* Información adicional */}
              <div className="bg-dark-card border border-purple-500/20 rounded-xl p-6 mt-6 shadow-md shadow-primary/10">
                <h3 className="font-bold text-white mb-4">Información</h3>
                
                {/* Duración */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-purple-500/20">
                  <span className="text-gray-400">Duración:</span>
                  <span className="font-semibold text-gray-200">{episode.duration}</span>
                </div>

                {/* Fecha de publicación */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-purple-500/20">
                  <span className="text-gray-400">Publicado:</span>
                  <span className="font-semibold text-gray-200">
                    {new Date(episode.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                {/* Episodio número */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Episodio:</span>
                  <span className="font-semibold text-gray-200">#{episode.id}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Contenido descriptivo */}
          <div className="lg:col-span-2">
            
            {/* Título del episodio */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {episode.title}
            </h1>

            {/* Descripción completa */}
            <div className="bg-dark-card border border-purple-500/20 rounded-2xl p-8 shadow-md shadow-primary/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Acerca de este episodio
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {episode.description}
              </p>
            </div>

            {/* Sección de notas adicionales (ejemplo estático) */}
            <div className="bg-dark-card border border-purple-500/20 rounded-2xl p-8 shadow-md shadow-primary/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Puntos clave
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span className="text-gray-300">Consejos prácticos y accionables</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span className="text-gray-300">Ejemplos de la vida real</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span className="text-gray-300">Recursos y referencias mencionadas</span>
                </li>
              </ul>
            </div>

            {/* Navegación entre episodios */}
            <div className="flex justify-between items-center">
              {/* Botón episodio anterior */}
              <button
                onClick={handlePrevious}
                disabled={!hasPrevious}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  hasPrevious
                    ? 'bg-dark-card text-primary border-2 border-primary hover:bg-primary hover:text-white'
                    : 'bg-dark-card text-gray-600 border-2 border-gray-700 cursor-not-allowed'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Anterior</span>
              </button>

              {/* Botón episodio siguiente */}
              <button
                onClick={handleNext}
                disabled={!hasNext}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  hasNext
                    ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:shadow-primary/50 hover:scale-105'
                    : 'bg-dark-card text-gray-600 border-2 border-gray-700 cursor-not-allowed'
                }`}
              >
                <span>Siguiente</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente
export default EpisodeDetail;
