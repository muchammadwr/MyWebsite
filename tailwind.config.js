/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blueZodiac: "#0C243C",
        tiara: "#C9D1D5",
        fountainBlue: "#55C2C3",
        regentGray: "#7E8C9C",
      },
    },
  },
  plugins: [],
};
