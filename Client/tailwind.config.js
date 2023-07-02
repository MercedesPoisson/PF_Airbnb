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
        // argentina: "#E96479",
        argentina: "#0081B4",
        dark_purple: "#0B2447",
        btn_primary: "#576CBC",
        heading_color: "#abd9d9",
        // primero: "#7DB9B6",
        // segundo: "#4D455D",
        // tercero: "#E96479"
        primero: "#E96479",
        segundo: "#ADE4DB",
        tercero: "#146C94"
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
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px)scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      },
      animation: {
        scroll: "scroll 7s infinite",
        blob: "blob 8s infinite"
      },
      darkMode: [
        "className", "[data-mode='dark']"
      ],
    }
  },
  plugins: [Myclass],
};