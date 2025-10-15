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
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Sección de bienvenida */}
      <section className="bg-white py-20 relative overflow-hidden border-b border-gray-200">
        {/* Efectos de fondo adicionales */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-100/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-100/30 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          
          {/* Título principal con animación */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 bg-clip-text text-transparent">
            Bienvenidos a mi podcats
          </h1>
          
          {/* Descripción */}
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Podcasts creados con Inteligencia Artificial. Explora contenido único 
            sobre idiomas, tecnología, aprendizaje y desarrollo personal,resumenes de libros diseñado para inspirarte 
            y ayudarte a crecer.
          </p>

          {/* Badge de IA */}
          <div className="flex justify-center mb-4">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 shadow-sm">
              <span>🤖</span>
              <span>Creado con IA</span>
              <span>✨</span>
            </span>
          </div>

          {/* Botones de llamada a la acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* Botón principal: Ver episodios */}
            <Link
              to="/episodes"
              className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Explorar Episodios
            </Link>

            {/* Botón secundario: Acerca de */}
            <Link
              to="/about"
              className="border-2 border-gray-300 text-gray-700 font-bold px-8 py-4 rounded-lg hover:bg-gray-50 hover:border-primary transition-all"
            >
              Conoce más
            </Link>
          </div>

          {/* Estadísticas del podcast */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            
            {/* Estadística 1: Episodios */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm">
              <div className="text-4xl font-bold mb-2">🎙️</div>
              <div className="text-gray-800 font-semibold">Contenido Original</div>
              <div className="text-sm text-gray-600 mt-1">Creado con IA</div>
            </div>

            {/* Estadística 2: Calidad */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm">
              <div className="text-4xl font-bold mb-2">🎯</div>
              <div className="text-gray-800 font-semibold">100% Educativo</div>
              <div className="text-sm text-gray-600 mt-1">Contenido de valor</div>
            </div>

            {/* Estadística 3: Innovación */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm">
              <div className="text-4xl font-bold mb-2">🚀</div>
              <div className="text-gray-800 font-semibold">Vanguardia Tech</div>
              <div className="text-sm text-gray-600 mt-1">Producción IA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de episodios recientes */}
      <section className="container mx-auto px-4 py-16 relative bg-white">
        {/* Efecto de brillo de fondo */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-radial from-purple-100/50 to-transparent"></div>
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
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Explora por Categoría
          </h2>

          {/* Grid de categorías */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Tarjeta de categoría: Creatividad */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white hover:scale-105 transition-all cursor-pointer shadow-lg shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-bold text-lg">Creatividad</h3>
            </div>

            {/* Tarjeta de categoría: Tecnología */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white hover:scale-105 transition-all cursor-pointer shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-bold text-lg">Tecnología</h3>
            </div>

            {/* Tarjeta de categoría: Productividad */}
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-6 text-white hover:scale-105 transition-all cursor-pointer shadow-lg shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/50">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-bold text-lg">Productividad</h3>
            </div>

            {/* Tarjeta de categoría: Entrevistas */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white hover:scale-105 transition-all cursor-pointer shadow-lg shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50">
              <div className="text-3xl mb-3">🎙️</div>
              <h3 className="font-bold text-lg">Entrevistas</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de llamada a la acción para newsletter */}
      <section className="bg-purple-50 border-y border-purple-200 py-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-100/50 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            El Futuro del Podcasting está aquí
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Experimenta contenido educativo de calidad generado con Inteligencia Artificial. 
            Suscríbete para recibir nuevos episodios y actualizaciones
          </p>

          {/* Formulario de suscripción */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105">
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
