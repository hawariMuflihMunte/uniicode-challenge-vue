/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'uniicode-black': '#03090E',
        'uniicode-green': '#B8FA00',
        'uniicode-dark': '#191F32'
      }
    },
  },
  plugins: [],
}
