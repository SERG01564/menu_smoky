/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // синий
        secondary: '#06B6D4', // бирюзовый
        accent: '#8B5CF6', // фиолетовый
        dark: {
          DEFAULT: '#1F2937', // темно-серый
          darker: '#111827', // почти черный
        }
      }
    },
  },
  plugins: [],
} 