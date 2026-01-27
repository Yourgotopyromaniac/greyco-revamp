/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "greyco-primary": "#140a90",
      "greyco-primary-100": "#243ce6",
      "greyco-secondary": "#11befe",
      black: "#000000",
      white: "#FFFFFF",
      transparent: "#00000000",
      "gray-10": "#A7A8CD",
      "gray-20": "#E9E9F0",
    },
    extend: {
      screens: {
        xs: { max: "380px" },
      },
    },
  },
  plugins: [],
};
