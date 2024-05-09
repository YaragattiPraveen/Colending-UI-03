/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#283943",
        secodary: "#94403A",
        bgColor: "#F2F0EF",
        lightShadow: "#F1F0EF",
        shadowColor: "#F6F6F4",
        lightColor: "#9DA79F",
        cardColor: "#9DA79F",
        whiteColor: "#FFFFFF",
        borderColor: "#9E9E9E"
      }
    },
  },
  plugins: [],
}

