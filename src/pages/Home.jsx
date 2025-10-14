/* 
  Home.jsx
  Página principal del sitio
  Muestra un hero banner y los últimos episodios publicados
*/

// Importamos React
import React from 'react';
// Importamos el componente EpisodeList para mostrar episodios
import EpisodeList from '../components/EpisodeList';
// Importamos Link para navegación
import { Link } from 'react-router-dom';

// Componente funcional Home
const Home = () => {
  return (
    // Contenedor principal con mínimo de altura de pantalla completa
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section - Sección de bienvenida con gradiente */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          
          {/* Título principal con animación */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bienvenidos a Mi Podcast
          </h1>
          
          {/* Descripción */}
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Tu espacio para aprender, inspirarte y crecer. Descubre episodios sobre 
            creatividad, tecnología, productividad y mucho más.
          </p>

          {/* Botones de llamada a la acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* Botón principal: Ver episodios */}
            <Link
              to="/episodes"
              className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Explorar Episodios
            </Link>

            {/* Botón secundario: Acerca de */}
            <Link
              to="/about"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all"
            >
              Conoce más
            </Link>
          </div>

          {/* Estadísticas del podcast */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            
            {/* Estadística 1: Episodios */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-100">Episodios</div>
            </div>

            {/* Estadística 2: Oyentes */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-gray-100">Oyentes</div>
            </div>

            {/* Estadística 3: Horas de contenido */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-gray-100">Horas de contenido</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de episodios recientes */}
      <section className="container mx-auto px-4 py-16">
        {/* 
          EpisodeList con límite de 6 episodios
          El componente lee automáticamente desde episodes.json
          y muestra solo los primeros 6 gracias a la prop 'limit'
        */}
        <EpisodeList 
          limit={6} 
          title="Últimos Episodios" 
        />
      </section>

      {/* Sección de categorías */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">
            Explora por Categoría
          </h2>

          {/* Grid de categorías */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Tarjeta de categoría: Creatividad */}
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-6 text-white hover:scale-105 transition-transform cursor-pointer shadow-lg">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-bold text-lg">Creatividad</h3>
            </div>

            {/* Tarjeta de categoría: Tecnología */}
            <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl p-6 text-white hover:scale-105 transition-transform cursor-pointer shadow-lg">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-bold text-lg">Tecnología</h3>
            </div>

            {/* Tarjeta de categoría: Productividad */}
            <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl p-6 text-white hover:scale-105 transition-transform cursor-pointer shadow-lg">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-bold text-lg">Productividad</h3>
            </div>

            {/* Tarjeta de categoría: Entrevistas */}
            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-6 text-white hover:scale-105 transition-transform cursor-pointer shadow-lg">
              <div className="text-3xl mb-3">🎙️</div>
              <h3 className="font-bold text-lg">Entrevistas</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de llamada a la acción para newsletter */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿No te quieres perder ningún episodio?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Suscríbete a nuestro newsletter y recibe notificaciones de nuevos episodios
          </p>

          {/* Formulario de suscripción */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary font-bold px-8 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Exportamos el componente
export default Home;
