/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["CustomFont", "sans"], // Replace 'CustomFont' with your actual font name
      },
    },
  },
  plugins: [],
};
