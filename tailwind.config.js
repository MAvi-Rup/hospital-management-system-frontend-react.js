

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#318f72',
        secondary: '#079d49',
        'color-white': '#fff',
        'color-black': '#333',
        'color-para': '#e8e8e8',
      },
    },
  },
  plugins: [],
}