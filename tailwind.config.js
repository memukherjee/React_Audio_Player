/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#451b02",
        secondary: "#e8bd7a",
      },
      fontFamily: {
        display: ["CCArea51Industrial", "sans-serif"],
        cursive: ['Sacramento',"Cursive", "sans-serif"],
      },
      backgroundImage: {
        "conic-gradient": `repeating-conic-gradient(
          from 0deg,
          #e8bd7a 0deg 14deg,
          #000 14deg 15deg,
          #c80204 15deg 29deg,
          #000 29deg 30deg,
          #5b7146 30deg 44deg,
          #000 44deg 45deg
        )`,
      },
      keyframes: {
        rotateGradient: {
          "0%": {
            transformOrigin: "top left",
            transform: "rotate(0) translate(-50%, -50%)",
          },
          "25%": {
            transformOrigin: "10% 10%",
          },
          "50%": {
            transformOrigin: "-10% 0",
          },
          "100%": {
            transformOrigin: "top left",
            transform: "rotate(360deg) translate(-50%, -50%)",
          },
        },
        spinSlow: {
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "rotate-gradient": "rotateGradient 20s linear infinite",
        "spin-slow": "spinSlow 20s linear infinite",
      },
    },
  },
  plugins: [],
};
