/* 
  EpisodeList.jsx
  Componente que muestra una lista/grid de episodios
  Lee los datos desde episodes.json y los renderiza usando EpisodeCard
*/

// Importamos React y el hook useState para manejar estado local
import React, { useState, useEffect } from 'react';
// Importamos el componente EpisodeCard para mostrar cada episodio
import EpisodeCard from './EpisodeCard';
// Importamos los datos de los episodios desde el archivo JSON
import episodesData from '../data/episodes.json';

// Componente funcional que puede recibir un límite opcional de episodios a mostrar
const EpisodeList = ({ limit = null, title = "Todos los episodios" }) => {
  
  // useState: hook que nos permite crear una variable de estado 'episodes'
  // - episodes: almacena el array de episodios
  // - setEpisodes: función para actualizar el valor de episodes
  // - []: valor inicial (array vacío)
  const [episodes, setEpisodes] = useState([]);

  // useState para manejar el estado de carga
  const [loading, setLoading] = useState(true);

  // useEffect: hook que se ejecuta después de que el componente se renderiza
  // El array vacío [] como segundo parámetro significa que solo se ejecuta una vez al montar
  useEffect(() => {
    // Función para cargar los episodios
    const loadEpisodes = () => {
      try {
        // Si hay un límite, usamos slice() para tomar solo los primeros episodios
        // Si no hay límite, tomamos todos los episodios
        const episodesToShow = limit ? episodesData.slice(0, limit) : episodesData;
        
        // Actualizamos el estado con los episodios
        setEpisodes(episodesToShow);
        
        // Desactivamos el estado de carga
        setLoading(false);
      } catch (error) {
        // Si hay un error al cargar los datos, lo mostramos en consola
        console.error('Error al cargar episodios:', error);
        setLoading(false);
      }
    };

    // Ejecutamos la función de carga
    loadEpisodes();
  }, [limit]); // El efecto se vuelve a ejecutar si 'limit' cambia

  // Si está cargando, mostramos un indicador de carga
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        {/* Spinner de carga animado */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
      </div>
    );
  }

  // Si no hay episodios, mostramos un mensaje
  if (episodes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No hay episodios disponibles en este momento.</p>
      </div>
    );
  }

  // Renderizamos la lista de episodios
  return (
    <div className="py-8">
      {/* Título de la sección */}
      <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8 text-center">
        {title}
      </h2>

      {/* Grid responsivo de episodios
          - grid: activa CSS Grid
          - grid-cols-1: 1 columna en móvil
          - md:grid-cols-2: 2 columnas en tablets
          - lg:grid-cols-3: 3 columnas en desktop
          - gap-8: espacio entre tarjetas
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 
          map(): recorre el array de episodios y crea un componente EpisodeCard por cada uno
          - episode: el objeto del episodio actual en la iteración
          - key: prop especial de React que debe ser único para optimizar el renderizado
        */}
        {episodes.map((episode) => (
          <EpisodeCard 
            key={episode.id} 
            episode={episode} 
          />
        ))}
      </div>

      {/* Si hay un límite, mostramos un enlace para ver más episodios */}
      {limit && episodes.length >= limit && (
        <div className="text-center mt-10">
          <a 
            href="/episodes" 
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Ver todos los episodios →
          </a>
        </div>
      )}
    </div>
  );
};

// Exportamos el componente para usarlo en otras partes de la aplicación
export default EpisodeList;
