/** @type {import('tailwindcss').Config} */
// Configuración de Tailwind CSS
// Este archivo define qué archivos escanear para generar las clases CSS necesarias
export default {
  // content: rutas donde Tailwind buscará las clases CSS que estamos usando
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Escanea todos los archivos JS/JSX en src/
  ],
  theme: {
    extend: {
      // Aquí podemos extender los colores, fuentes, espaciados, etc.
      colors: {
        // Paleta de colores personalizada para el podcast
        primary: '#8B5CF6', // Violeta
        secondary: '#EC4899', // Rosa
        dark: '#1F2937', // Gris oscuro
      }
    },
  },
  plugins: [],
}
