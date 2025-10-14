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
      // Paleta de colores oscuros moderna con gradientes
      colors: {
        // Colores principales con tonos oscuros modernos
        primary: '#A855F7', // Púrpura vibrante
        secondary: '#EC4899', // Rosa brillante
        accent: '#3B82F6', // Azul eléctrico
        dark: {
          DEFAULT: '#0F172A', // Azul oscuro profundo
          lighter: '#1E293B', // Azul oscuro medio
          card: '#1E293B', // Fondo de tarjetas
        },
        // Gradientes oscuros
        'gradient-start': '#7C3AED', // Púrpura oscuro
        'gradient-mid': '#A855F7', // Púrpura medio
        'gradient-end': '#EC4899', // Rosa
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'gradient-purple': 'linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #EC4899 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
      }
    },
  },
  plugins: [],
}
