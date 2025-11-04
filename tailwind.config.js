/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#12120D',
        'primary-light': '#F4F4F4',
        'accent': '#F4C196',
        'secondary-dark': '#1D1D1B',
      },
    },
  },
  plugins: [],
}