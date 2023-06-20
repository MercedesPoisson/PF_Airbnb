/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        argentina: '#FF385C',
        dark_purple: "#000235",
        btn_primary: "#7e7ee3",
        heading_color: "#abd9d9"
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        'cairo-play': ['Cairo Play', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        Poppins: "Poppins",
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