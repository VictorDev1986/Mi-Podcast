/* 
  Contact.jsx
  Página de contacto con un formulario para que los oyentes se comuniquen
  Incluye validación básica de formulario usando useState
*/

// Importamos React y el hook useState
import React, { useState } from 'react';

// Componente funcional Contact
const Contact = () => {
  
  // Estado para almacenar los valores del formulario
  // Inicializamos con un objeto que tiene todos los campos vacíos
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Estado para mostrar mensajes de éxito o error
  const [submitStatus, setSubmitStatus] = useState(null);

  // Estado para controlar si el formulario se está enviando
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función que se ejecuta cada vez que cambia un campo del formulario
  // 'e' es el evento del input
  const handleChange = (e) => {
    // Obtenemos el nombre y valor del input que cambió
    const { name, value } = e.target;
    
    // Actualizamos el estado usando spread operator (...)
    // Esto mantiene los valores anteriores y solo actualiza el campo que cambió
    setFormData(prevState => ({
      ...prevState,      // Mantiene todos los campos anteriores
      [name]: value      // Actualiza solo el campo que cambió
    }));
  };

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = async (e) => {
    // Previene el comportamiento por defecto (recargar la página)
    e.preventDefault();
    
    // Validación básica: verificamos que todos los campos estén llenos
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: 'Por favor, completa todos los campos'
      });
      return;
    }

    // Validación del email con expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Por favor, ingresa un email válido'
      });
      return;
    }

    // Activamos el estado de "enviando"
    setIsSubmitting(true);

    // Simulamos el envío del formulario con un setTimeout
    // En una aplicación real, aquí harías una petición a tu backend
    setTimeout(() => {
      // Mostramos mensaje de éxito
      setSubmitStatus({
        type: 'success',
        message: '¡Mensaje enviado con éxito! Te responderemos pronto.'
      });

      // Limpiamos el formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Desactivamos el estado de "enviando"
      setIsSubmitting(false);

      // Limpiamos el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500); // Simula 1.5 segundos de procesamiento
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            ¿Tienes preguntas, sugerencias o quieres colaborar? 
            Nos encantaría escucharte
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Grid de dos columnas: información de contacto y formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Columna 1: Información de contacto */}
          <div className="lg:col-span-1">
            
            {/* Título */}
            <h2 className="text-2xl font-bold text-dark mb-6">
              Información de Contacto
            </h2>

            {/* Tarjetas de información */}
            <div className="space-y-6">
              
              {/* Email */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Email</h3>
                    <a 
                      href="mailto:contacto@mipodcast.com" 
                      className="text-primary hover:underline"
                    >
                      contacto@mipodcast.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Redes Sociales</h3>
                    <p className="text-gray-600 text-sm mb-2">Síguenos en:</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-primary hover:text-secondary">Twitter</a>
                      <span className="text-gray-400">•</span>
                      <a href="#" className="text-primary hover:text-secondary">Instagram</a>
                      <span className="text-gray-400">•</span>
                      <a href="#" className="text-primary hover:text-secondary">YouTube</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horario de respuesta */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Tiempo de respuesta</h3>
                    <p className="text-gray-600 text-sm">
                      Respondemos en 24-48 horas hábiles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Formulario de contacto */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              
              <h2 className="text-2xl font-bold text-dark mb-6">
                Envíanos un mensaje
              </h2>

              {/* Mensaje de éxito o error */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-300' 
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}>
                  <p className="flex items-center">
                    {submitStatus.type === 'success' ? (
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    )}
                    {submitStatus.message}
                  </p>
                </div>
              )}

              {/* Formulario */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Campo: Nombre */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                {/* Campo: Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                {/* Campo: Asunto */}
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="¿Sobre qué quieres hablar?"
                    required
                  />
                </div>

                {/* Campo: Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  ></textarea>
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                    isSubmitting
                      ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente
export default Contact;
