/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',          // If your HTML file is named index.html
    './src/**/*.{html,js}', // Adjust this path based on your project structure
    './assets/**/*.{html,js}', // Include your assets folder if it contains HTML or JS files
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F07167',
        'secondary': '#FED9B7',
        'tetriary': '#FDFCDC',
        'white': '#FFFFFF',
        'black': '#000000',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}