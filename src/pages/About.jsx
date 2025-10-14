/* 
  About.jsx
  Página "Acerca de" que presenta información sobre el podcast
  Incluye la misión, el equipo y la historia del proyecto
*/

// Importamos React
import React from 'react';
// Importamos Link para navegación
import { Link } from 'react-router-dom';

// Componente funcional About
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero section con gradiente */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Acerca de Nuestro Podcast
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Conoce nuestra historia, misión y el equipo detrás de cada episodio
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Sección: Nuestra Misión */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold text-dark mb-4">
                Nuestra Misión
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Creemos que el conocimiento debe ser accesible para todos. Nuestro podcast 
              nació con la misión de compartir ideas inspiradoras, consejos prácticos y 
              conversaciones profundas que ayuden a las personas a crecer personal y 
              profesionalmente.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Cada episodio está diseñado para brindarte valor, ya sea a través de 
              entrevistas con expertos, análisis de tendencias o exploraciones de temas 
              que realmente importan en el mundo actual.
            </p>
          </div>
        </div>

        {/* Sección: Valores */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Nuestros Valores
          </h2>
          
          {/* Grid de valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Valor 1: Autenticidad */}
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                Autenticidad
              </h3>
              <p className="text-gray-600">
                Conversaciones reales y honestas sin filtros innecesarios. 
                Valoramos la transparencia por encima de todo.
              </p>
            </div>

            {/* Valor 2: Calidad */}
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                Calidad
              </h3>
              <p className="text-gray-600">
                Cuidamos cada detalle, desde el contenido hasta la producción, 
                para ofrecerte la mejor experiencia de escucha.
              </p>
            </div>

            {/* Valor 3: Comunidad */}
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                Comunidad
              </h3>
              <p className="text-gray-600">
                Construimos juntos un espacio de aprendizaje y crecimiento 
                donde todos tienen voz y pueden participar.
              </p>
            </div>
          </div>
        </div>

        {/* Sección: El Equipo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Conoce al Equipo
          </h2>
          
          {/* Grid del equipo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Miembro 1: Host */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">
                  Ana García
                </h3>
                <p className="text-primary font-semibold mb-3">
                  Host Principal
                </p>
                <p className="text-gray-600 text-sm">
                  Comunicadora apasionada con más de 10 años de experiencia 
                  en medios digitales y podcasting.
                </p>
              </div>
            </div>

            {/* Miembro 2: Productor */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-secondary to-primary"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">
                  Carlos Ruiz
                </h3>
                <p className="text-primary font-semibold mb-3">
                  Productor de Audio
                </p>
                <p className="text-gray-600 text-sm">
                  Ingeniero de sonido especializado en producción de contenido 
                  de alta calidad para plataformas digitales.
                </p>
              </div>
            </div>

            {/* Miembro 3: Investigadora */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">
                  Laura Méndez
                </h3>
                <p className="text-primary font-semibold mb-3">
                  Investigadora de Contenido
                </p>
                <p className="text-gray-600 text-sm">
                  Periodista y escritora que se encarga de investigar y 
                  preparar el contenido de cada episodio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección: Nuestra Historia */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">📖</div>
              <h2 className="text-3xl font-bold mb-4">
                Nuestra Historia
              </h2>
            </div>
            <p className="text-gray-100 text-lg leading-relaxed mb-6">
              Todo comenzó en 2023, cuando un grupo de amigos apasionados por el 
              aprendizaje y la comunicación decidió crear un espacio donde las ideas 
              pudieran fluir libremente. Lo que empezó como grabaciones casuales en 
              un garaje se convirtió en un proyecto que ha alcanzado a miles de oyentes 
              en todo el mundo hispanohablante.
            </p>
            <p className="text-gray-100 text-lg leading-relaxed">
              Hoy, dos años después, seguimos con la misma pasión del primer día, 
              pero con mejores herramientas, más experiencia y una comunidad increíble 
              que nos acompaña en cada episodio.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark mb-6">
            ¿Quieres ser parte de nuestra historia?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad y no te pierdas ningún episodio. 
            También puedes contactarnos si tienes ideas o quieres colaborar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/episodes"
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Escuchar Episodios
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary border-2 border-primary font-bold px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente
export default About;
