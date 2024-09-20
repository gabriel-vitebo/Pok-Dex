/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    width: {
      '90p': '90%',
      'image': '90px',
      'mainH': '30px'
    },
    colors: {
      'default': '#0f172a',
      'white': '#ffffff',
      'black': '#020617',
      'h3': '#111827',
      'card': '#94a3b8',
      'green': '#16a34a',

      'all': '#020617',
      'water': '#5090D6',
      'dragon': '#0B6DC3',
      'electric': '#F4D23C',
      'fairy': '#EC8FE6',
      'ghost': '#5269AD',
      'fire': '#FF9D55',
      'ice': '#73CEC0',
      'grass': '#63BC5A',
      'bug': '#91C12F',
      'fighting': '#CE416B',
      'normal': '#919AA2',
      'dark': '#5A5465',
      'steel': '#5A8EA2',
      'rock': '#C5B78C',
      'psychic': '#FA7179',
      'ground': '#D97845',
      'poison': '#B567CE',
      'flying': '#89AAE3'
    },
  },
  plugins: [],
}