/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'color1' : '#A20202',
        'color2' : 'rgba(155, 2, 2, 0.81)' 
      }
    },
  },
  plugins: [],
}

