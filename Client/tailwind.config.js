// /** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  mode: 'jit',
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        argentina: "#E96479",
        dark_purple: "#0B2447",
        btn_primary: "#576CBC",
        heading_color: "#abd9d9",
        primero: "#7DB9B6",
        segundo: "#4D455D",
        tercero: "#E96479"
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        'cairo-play': ['Cairo Play', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        Poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        "r-30": "30px",
      },
      width: {
        "w74": "74px",
        "w76": "76px",
        "w300": "300px",
        "w250": "250px",
        "w200": "200px",
        "w350": "350px"       
      },
      height: {
        "h-300": "300px"
      },
      keyframes: {
        scroll: {
          "10%": {
            transform: "translateY(-112%)"
          },
          "25%": {
            transform: "translateY(-104%)"
          },
          "35%": {
            transform: "translateY(-212%)"
          },
          "50%": {
            transform: "translateY(-204%)"
          },
          "60%": {
            transform: "translateY(-312%)"
          },
          "75%": {
            transform: "translateY(-304%)"
          },
          "85%": {
            transform: "translateY(-412%)"
          },
          "100%": {
            transform: "translateY(-404%)"
          }
        }
      },
      animation: {
        scroll: "scroll 8s infinite"
      }
    }
  },
  plugins: [Myclass],
};