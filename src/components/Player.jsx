/* 
  Player.jsx
  Reproductor de audio global que aparece en la parte inferior de la pantalla
  Usa elemento <audio> nativo de HTML5 para máxima compatibilidad
*/

// Importamos React y los hooks necesarios
import React, { useRef, useEffect, useState } from 'react';
// Hook personalizado para acceder al contexto del reproductor
import { usePlayer } from '../context/PlayerContext';

// Componente funcional Player
const Player = () => {
  
  // Obtenemos todo el estado y funciones del contexto del reproductor
  const {
    currentEpisode,    // Episodio actual
    isPlaying,         // Estado de reproducción
    volume,            // Volumen (0.0 a 1.0)
    progress,          // Progreso actual en segundos
    duration,          // Duración total en segundos
    togglePlay,        // Función para play/pause
    stop,              // Función para detener
    changeVolume,      // Función para cambiar volumen
    updateProgress,    // Función para actualizar progreso
    updateDuration,    // Función para actualizar duración
    seekTo,            // Función para saltar a posición
  } = usePlayer();

  // useRef: crea una referencia al elemento <audio> de HTML5
  const audioRef = useRef(null);
  
  // Estado local para controlar si el reproductor está oculto
  const [isHidden, setIsHidden] = useState(false);

  // useEffect: controla play/pause según el estado
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // Intentamos reproducir con manejo de errores
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error al reproducir:', error);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // useEffect: actualiza el volumen cuando cambia
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // useEffect: carga el nuevo audio cuando cambia el episodio
  useEffect(() => {
    if (audioRef.current && currentEpisode) {
      audioRef.current.load();
    }
  }, [currentEpisode?.id]);

  // Si no hay episodio seleccionado, no mostramos el reproductor
  if (!currentEpisode) {
    return null;
  }

  // Función que se ejecuta cuando el audio está listo
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      console.log('✅ Audio cargado:', currentEpisode.title);
      updateDuration(audioRef.current.duration);
    }
  };

  // Función que actualiza el progreso mientras se reproduce
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      updateProgress(audioRef.current.currentTime);
    }
  };

  // Función que se ejecuta cuando el episodio termina
  const handleEnded = () => {
    console.log('✅ Episodio terminado');
    stop();
  };

  // Función para manejar errores
  const handleError = (e) => {
    console.error('❌ Error al cargar audio:', e);
    console.error('URL:', currentEpisode?.audioUrl);
  };

  // Función para formatear segundos a formato mm:ss
  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    // padStart(2, '0') agrega un 0 al inicio si el número es menor a 10
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Función para manejar el cambio en la barra de progreso
  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      updateProgress(newTime);
    }
  };

  // Función para retroceder 10 segundos
  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  };

  // Función para adelantar 10 segundos
  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
    }
  };

  // Función para manejar el cambio de volumen
  const handleVolumeChange = (e) => {
    // Obtenemos el valor del input (0 a 1)
    const newVolume = parseFloat(e.target.value);
    changeVolume(newVolume);
  };

  // Calculamos el porcentaje de progreso para la barra visual
  const progressPercent = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <>
      {/* Contenedor fijo en la parte inferior con transición suave */}
      <div 
        className={`audio-player z-50 transition-transform duration-300 ease-in-out ${
          isHidden ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        
        {/* Elemento audio nativo de HTML5 (oculto, usamos controles personalizados) */}
        <audio
          ref={audioRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onError={handleError}
          preload="metadata"
        >
          <source src={currentEpisode.audioUrl} type="audio/mpeg" />
          <source src={currentEpisode.audioUrl} type="audio/mp4" />
          Tu navegador no soporta el elemento de audio.
        </audio>

        {/* Contenedor de controles personalizados */}
        <div className="max-w-7xl mx-auto px-4 py-4 relative">
          
          {/* Botón para ocultar/mostrar el reproductor */}
          <button
            onClick={() => setIsHidden(!isHidden)}
            className="absolute -top-10 right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-t-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            title={isHidden ? "Mostrar reproductor" : "Ocultar reproductor"}
          >
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${isHidden ? 'rotate-180' : ''}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-sm font-medium">
              {isHidden ? 'Mostrar' : 'Ocultar'}
            </span>
          </button>
        
          {/* Grid con 3 secciones: info del episodio, controles, volumen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          
          {/* Sección 1: Información del episodio actual */}
          <div className="flex items-center space-x-4">
            {/* Miniatura del episodio */}
            <img 
              src={currentEpisode.image} 
              alt={currentEpisode.title}
              className="w-16 h-16 rounded-lg shadow-lg object-cover"
            />
            {/* Título y categoría */}
            <div className="flex-1 min-w-0">
              <h4 className="text-gray-800 font-semibold truncate">
                {currentEpisode.title}
              </h4>
              <p className="text-gray-600 text-sm truncate">
                {currentEpisode.category}
              </p>
            </div>
          </div>

          {/* Sección 2: Controles de reproducción */}
          <div className="flex flex-col items-center space-y-2">
            
            {/* Botones de control */}
            <div className="flex items-center space-x-4">
              
              {/* Botón de retroceder 10 segundos */}
              <button
                onClick={handleRewind}
                className="text-gray-700 hover:text-primary transition-colors"
                title="Retroceder 10s"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                </svg>
              </button>

              {/* Botón principal de Play/Pause */}
              <button
                onClick={togglePlay}
                className="bg-white text-primary rounded-full p-3 hover:scale-110 transition-transform shadow-lg"
              >
                {isPlaying ? (
                  // Ícono de Pause
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  // Ícono de Play
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>

              {/* Botón de adelantar 10 segundos */}
              <button
                onClick={handleForward}
                className="text-gray-700 hover:text-primary transition-colors"
                title="Adelantar 10s"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                </svg>
              </button>

              {/* Botón de detener */}
              <button
                onClick={stop}
                className="text-gray-700 hover:text-red-500 transition-colors"
                title="Detener"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Barra de progreso */}
            <div className="w-full flex items-center space-x-2">
              {/* Tiempo actual */}
              <span className="text-gray-700 text-xs font-mono w-12 text-right">
                {formatTime(progress)}
              </span>
              
              {/* Input range para la barra de progreso */}
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={progress}
                onChange={handleSeek}
                className="flex-1 h-2 bg-gray-200 bg-opacity-60 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #a855f7 ${progressPercent}%, rgba(229, 231, 235, 0.6) ${progressPercent}%)`
                }}
              />
              
              {/* Tiempo total */}
              <span className="text-gray-700 text-xs font-mono w-12">
                {formatTime(duration)}
              </span>
            </div>
          </div>

          {/* Sección 3: Control de volumen */}
          <div className="flex items-center justify-end space-x-3">
            
            {/* Ícono de volumen (cambia según el nivel) */}
            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              {volume > 0.5 ? (
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              ) : volume > 0 ? (
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.828 7.757a1 1 0 011.415 0A5.983 5.983 0 0116 12a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0014 12a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
              )}
            </svg>

            {/* Barra de volumen */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-2 bg-gray-200 bg-opacity-60 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #a855f7 ${volume * 100}%, rgba(229, 231, 235, 0.6) ${volume * 100}%)`
              }}
            />
          </div>
          </div>
        </div>
      </div>

      {/* Mini reproductor flotante cuando está oculto */}
      {isHidden && (
        <div 
          className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl p-3 hover:scale-110 transition-all duration-300 cursor-pointer group"
          onClick={() => setIsHidden(false)}
          title="Mostrar reproductor"
        >
          <div className="flex items-center space-x-3">
            {/* Imagen del episodio */}
            <img 
              src={currentEpisode.image} 
              alt={currentEpisode.title}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
            />
            
            {/* Botón de play/pause */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="bg-white text-primary rounded-full p-2 hover:scale-110 transition-transform shadow-lg"
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {/* Texto visible al hacer hover */}
            <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">
              <p className="text-white text-sm font-medium pr-3">
                {currentEpisode.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Exportamos el componente
export default Player;
