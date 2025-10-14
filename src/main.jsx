/* 
  main.jsx
  Punto de entrada de la aplicación React
  Este archivo se ejecuta primero y monta la aplicación en el DOM
*/

// StrictMode: componente de React que ayuda a detectar problemas potenciales
// Activa verificaciones adicionales y advertencias en modo desarrollo
import { StrictMode } from 'react';

// createRoot: función de React 18+ para crear la raíz de renderizado
// Es la nueva API para montar aplicaciones React
import { createRoot } from 'react-dom/client';

// Importamos los estilos CSS globales (incluye Tailwind)
import './index.css';

// Importamos el componente principal App
import App from './App.jsx';

// createRoot: crea una raíz de React en el elemento del DOM con id 'root'
// document.getElementById('root') busca el <div id="root"></div> en index.html
createRoot(document.getElementById('root')).render(
  // StrictMode: envuelve la aplicación para activar verificaciones adicionales
  // Solo funciona en desarrollo, no afecta la producción
  <StrictMode>
    {/* App: nuestro componente principal que contiene toda la aplicación */}
    <App />
  </StrictMode>,
);
