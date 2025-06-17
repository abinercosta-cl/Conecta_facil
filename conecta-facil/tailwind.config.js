/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#1B4F72',
        'brand-blue-dark': '#154360',
        'brand-green': '#196F3D',
        'brand-green-dark': '#145A32',
        'brand-orange': '#F28E2B',
        'brand-orange-dark': '#B26A1B',
        'brand-bg': '#F4F6F7',
      }
    },
  },
  plugins: [],
}