/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Isse 'font-jakarta' class poore project mein ready ho jayegi
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brandBg: '#fcfcfc',
        brandDark: '#1e1e1e',
      }
    },
  },
  plugins: [],
}