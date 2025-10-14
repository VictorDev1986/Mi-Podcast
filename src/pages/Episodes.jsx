/* 
  Episodes.jsx
  Página que muestra todos los episodios disponibles
  Incluye funcionalidad de búsqueda y filtrado por categoría
*/

// Importamos React y hooks necesarios
import React, { useState, useEffect } from 'react';
// Importamos el componente EpisodeCard
import EpisodeCard from '../components/EpisodeCard';
// Importamos los datos de episodios
import episodesData from '../data/episodes.json';

// Componente funcional Episodes
const Episodes = () => {
  
  // Estado para almacenar todos los episodios
  const [episodes, setEpisodes] = useState(episodesData);
  
  // Estado para los episodios filtrados que se mostrarán
  const [filteredEpisodes, setFilteredEpisodes] = useState(episodesData);
  
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');
  
  // Estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  // Extraemos las categorías únicas de todos los episodios
  // Set() elimina duplicados, [...] lo convierte de vuelta a array
  const categories = ['Todas', ...new Set(episodes.map(ep => ep.category))];

  // useEffect: se ejecuta cada vez que cambia searchTerm o selectedCategory
  // Aplica los filtros a los episodios
  useEffect(() => {
    let result = episodes;

    // Filtro por categoría
    // Si no es 'Todas', filtramos por la categoría seleccionada
    if (selectedCategory !== 'Todas') {
      result = result.filter(episode => episode.category === selectedCategory);
    }

    // Filtro por búsqueda
    // Convierte a minúsculas para búsqueda insensible a mayúsculas
    // Busca en título y descripción
    if (searchTerm.trim() !== '') {
      result = result.filter(episode =>
        episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Actualizamos el estado con los episodios filtrados
    setFilteredEpisodes(result);
  }, [searchTerm, selectedCategory, episodes]);

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    // Contenedor principal con mínimo de altura de pantalla
    <div className="min-h-screen bg-dark">
      
      {/* Header de la página */}
      <div className="bg-gradient-purple text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Todos los Episodios
          </h1>
          <p className="text-center text-gray-100 text-lg">
            Explora nuestra colección completa de episodios
          </p>
        </div>
      </div>

      {/* Contenedor de filtros y búsqueda */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Barra de búsqueda */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto relative">
            {/* Ícono de búsqueda */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Input de búsqueda */}
            <input
              type="text"
              placeholder="Buscar episodios por título o descripción..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-dark-card text-black border-2 border-purple-500/20 focus:border-primary focus:outline-none transition-colors placeholder-gray-500"
            />

            {/* Botón para limpiar búsqueda (solo visible si hay texto) */}
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Filtro de categorías */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-300 mb-4 text-center">
            Filtrar por categoría:
          </h3>
          
          {/* Contenedor de botones de categoría con scroll horizontal en móvil */}
          <div className="flex flex-wrap justify-center gap-3">
            {/* 
              map(): recorre todas las categorías y crea un botón para cada una
              El botón seleccionado tiene estilos diferentes
            */}
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                // Cambia el estilo si es la categoría seleccionada
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50'
                    : 'bg-dark-card text-gray-300 border-2 border-purple-500/20 hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="text-center text-gray-400 mb-6">
          {filteredEpisodes.length === 0 ? (
            // Mensaje cuando no hay resultados
            <p className="text-lg">
              No se encontraron episodios que coincidan con tu búsqueda 😔
            </p>
          ) : (
            // Muestra el número de episodios encontrados
            <p className="text-lg">
              Mostrando {filteredEpisodes.length} {filteredEpisodes.length === 1 ? 'episodio' : 'episodios'}
            </p>
          )}
        </div>

        {/* Grid de episodios filtrados */}
        {filteredEpisodes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 
              map(): recorre los episodios filtrados y crea una tarjeta para cada uno
            */}
            {filteredEpisodes.map((episode) => (
              <EpisodeCard 
                key={episode.id} 
                episode={episode} 
              />
            ))}
          </div>
        )}

        {/* Mensaje alternativo si no hay episodios */}
        {filteredEpisodes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No hay episodios que coincidan
            </h3>
            <p className="text-gray-400 mb-6">
              Intenta con otros términos de búsqueda o selecciona una categoría diferente
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Todas');
              }}
              className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-3 rounded-lg hover:shadow-xl hover:shadow-primary/50 transition-all"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Exportamos el componente
export default Episodes;
