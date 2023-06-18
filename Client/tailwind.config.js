/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        argentina: '#FF385C',
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        'cairo-play': ['Cairo Play', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif']
      },
      borderRadius: {
        "r-30": "30px",
      },
      width: {
        "w74": "74px",
        "w76": "76px",
        "w300": "300px",        
      },
      height: {
        "h-300": "300px"

      }
    },
  },
  plugins: [],
}