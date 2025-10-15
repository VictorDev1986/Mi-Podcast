/* 
  EpisodeDetail.jsx
  Página de detalle de un episodio específico
  Muestra información completa y permite reproducir el episodio
*/

// Importamos React y hooks
import React, { useEffect } from 'react';
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
  
  // useEffect para hacer scroll al inicio cuando se carga la página o cambia el episodio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Se ejecuta cada vez que cambia el id del episodio
  
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Episodio no encontrado
          </h2>
          <p className="text-gray-600 mb-6">
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
    <div className="min-h-screen bg-white">
      
      {/* Breadcrumbs - Navegación de migas de pan */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary">
              Inicio
            </Link>
                        <span className="text-gray-400">/</span>
            <Link to="/episodes" className="text-gray-600 hover:text-primary">
              Episodios
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">{episode.title}</span>
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
              <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6 shadow-md">
                <h3 className="font-bold text-gray-800 mb-4">Información</h3>
                
                {/* Duración */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Duración:</span>
                  <span className="font-semibold text-gray-800">{episode.duration}</span>
                </div>

                {/* Fecha de publicación */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Publicado:</span>
                  <span className="font-semibold text-gray-800">
                    {new Date(episode.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                {/* Episodio número */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Episodio:</span>
                  <span className="font-semibold text-gray-800">#{episode.id}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Contenido descriptivo */}
          <div className="lg:col-span-2">
            
            {/* Título del episodio */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {episode.title}
            </h1>

            {/* Descripción completa */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Acerca de este episodio
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {episode.description}
              </p>
            </div>

          

            {/* Sección de Créditos y Fuentes - Solo se muestra si el episodio tiene créditos */}
            {episode.credits && (
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8 shadow-md mb-8">
                <div className="flex items-start space-x-3 mb-6">
                  <svg className="w-8 h-8 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Créditos y Referencias
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Este episodio está basado en contenido de terceros. A continuación los créditos correspondientes:
                    </p>
                  </div>
                </div>

                {/* Información del libro/fuente principal */}
                {episode.credits.mainSource && (
                  <div className="bg-white rounded-xl p-6 mb-6 border-l-4 border-primary">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          📚 {episode.credits.mainSource.type === 'book' ? 'Libro' : 'Artículo'} / Fuente Principal
                        </h3>
                        <p className="text-gray-700 font-semibold mb-1">
                          "{episode.credits.mainSource.title}"
                        </p>
                        <p className="text-gray-600 text-sm mb-2">
                          <span className="font-semibold">Autor:</span> {episode.credits.mainSource.author}
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          <span className="font-semibold">Editorial:</span> {episode.credits.mainSource.publisher} • 
                          <span className="font-semibold"> Año:</span> {episode.credits.mainSource.year}
                        </p>
                        {episode.credits.mainSource.links && (
                          <div className="flex flex-wrap gap-2">
                            {episode.credits.mainSource.links.amazon && (
                              <a 
                                href={episode.credits.mainSource.links.amazon} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                                <span>Ver en Amazon</span>
                              </a>
                            )}
                            {episode.credits.mainSource.links.officialSite && (
                              <a 
                                href={episode.credits.mainSource.links.officialSite} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-white text-primary border-2 border-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-all"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                                <span>Fuente Oficial</span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Fuentes adicionales */}
                {episode.credits.additionalSources && episode.credits.additionalSources.length > 0 && (
                  <div className="bg-white rounded-xl p-6 mb-6 border-l-4 border-secondary">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                      <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>📎 Referencias y Recursos Adicionales</span>
                    </h3>
                    <ul className="space-y-3">
                      {episode.credits.additionalSources.map((source, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="text-secondary text-lg mt-1">→</span>
                          <div className="flex-1">
                            <a 
                              href={source.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:text-secondary font-semibold hover:underline"
                            >
                              {source.title}
                            </a>
                            {source.description && (
                              <p className="text-gray-600 text-sm">{source.description}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                  {/* Nota de copyright */}
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <span className="font-semibold">Nota importante:</span> Todo el contenido mencionado pertenece a sus respectivos autores y editoriales. 
                        Este episodio es un análisis y comentario educativo protegido bajo el uso justo (fair use). 
                        Te recomendamos adquirir el libro original para apoyar al autor. 
                        Los enlaces proporcionados pueden ser de afiliados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navegación entre episodios */}
            <div className="flex justify-between items-center">
              {/* Botón episodio anterior */}
              <button
                onClick={handlePrevious}
                disabled={!hasPrevious}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  hasPrevious
                    ? 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                    : 'bg-gray-100 text-gray-400 border-2 border-gray-300 cursor-not-allowed'
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
                    : 'bg-gray-100 text-gray-400 border-2 border-gray-300 cursor-not-allowed'
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
