/* 
  PlayerContext.jsx
  Este archivo crea un contexto global para manejar el estado del reproductor de audio
  en toda la aplicación sin necesidad de pasar props entre componentes.
*/

// Importamos React y los hooks necesarios
import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto del reproductor
// Este contexto almacenará el episodio actual, estado de reproducción, etc.
const PlayerContext = createContext();

// Hook personalizado para usar el contexto del reproductor fácilmente
// Esto nos permite usar: const { currentEpisode, playEpisode } = usePlayer();
export const usePlayer = () => {
  const context = useContext(PlayerContext);
  // Verificamos que el hook se use dentro del Provider
  if (!context) {
    throw new Error('usePlayer debe usarse dentro de un PlayerProvider');
  }
  return context;
};

// Componente Provider que envuelve la aplicación
// Este componente provee el estado del reproductor a todos los componentes hijos
export const PlayerProvider = ({ children }) => {
  
  // Estado que guarda el episodio que se está reproduciendo actualmente
  // Inicialmente es null (no hay episodio seleccionado)
  const [currentEpisode, setCurrentEpisode] = useState(null);
  
  // Estado que indica si el audio está reproduciéndose (true) o pausado (false)
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Estado para controlar el volumen del reproductor (0.0 a 1.0)
  const [volume, setVolume] = useState(0.7);
  
  // Estado para guardar el progreso de reproducción en segundos
  const [progress, setProgress] = useState(0);
  
  // Estado para la duración total del episodio en segundos
  const [duration, setDuration] = useState(0);

  // Función para iniciar la reproducción de un episodio
  // Recibe el objeto del episodio completo desde episodes.json
  const playEpisode = (episode) => {
    // Verificamos si es un episodio diferente
    const isDifferent = !currentEpisode || currentEpisode.id !== episode.id;
    
    setCurrentEpisode(episode); // Establece el episodio actual
    
    if (isDifferent) {
      // Para un nuevo episodio, empezamos pausado y desde el inicio
      setIsPlaying(false);
      setProgress(0);
      setDuration(0);
    } else {
      // Si es el mismo episodio, activamos play
      setIsPlaying(true);
    }
  };

  // Función para alternar entre play y pause
  // Si está reproduciendo, pausa. Si está pausado, reproduce.
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Función para pausar la reproducción
  const pause = () => {
    setIsPlaying(false);
  };

  // Función para reanudar la reproducción
  const play = () => {
    setIsPlaying(true);
  };

  // Función para detener completamente la reproducción
  // Reinicia el reproductor al estado inicial
  const stop = () => {
    setIsPlaying(false);
    setCurrentEpisode(null);
    setProgress(0);
  };

  // Función para cambiar el volumen
  // newVolume debe estar entre 0.0 (silencio) y 1.0 (máximo)
  const changeVolume = (newVolume) => {
    setVolume(Math.max(0, Math.min(1, newVolume))); // Asegura que esté entre 0 y 1
  };

  // Función para actualizar el progreso de reproducción
  // Se llama desde el reproductor cada vez que avanza
  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  // Función para actualizar la duración total del episodio
  // Se llama cuando el audio se carga por primera vez
  const updateDuration = (newDuration) => {
    setDuration(newDuration);
  };

  // Función para saltar a una posición específica del audio
  // time es el tiempo en segundos al que queremos ir
  const seekTo = (time) => {
    setProgress(time);
  };

  // Objeto que contiene todos los valores y funciones del contexto
  // Este objeto estará disponible para todos los componentes que usen usePlayer()
  const value = {
    // Estados
    currentEpisode,      // El episodio actual
    isPlaying,           // Si está reproduciéndose
    volume,              // Nivel de volumen
    progress,            // Progreso actual en segundos
    duration,            // Duración total en segundos
    
    // Funciones
    playEpisode,         // Reproducir un nuevo episodio
    togglePlay,          // Alternar play/pause
    pause,               // Pausar
    play,                // Reproducir
    stop,                // Detener
    changeVolume,        // Cambiar volumen
    updateProgress,      // Actualizar progreso
    updateDuration,      // Actualizar duración
    seekTo,              // Saltar a posición específica
  };

  // Retornamos el Provider con el value que contiene todo el estado y funciones
  // {children} representa todos los componentes hijos que envuelve este Provider
  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};
