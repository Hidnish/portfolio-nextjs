/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'polvere': '#24292E', 
        'bamba': '#ecf0f3', 
        'grigello': '#888888',
        'linkedin': '#0072b1', 
        'github': '#24292E',
        'oltremare': '#57b099',
        'azzurrino': '#add2e6',
        'rosino': '#bd95e8'
      }
    },
  },
  plugins: [],
}
