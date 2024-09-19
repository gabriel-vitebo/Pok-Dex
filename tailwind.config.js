/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    width: {
      '90p': '90%',
      'image': '90px'
    },
    colors: {
      'default': '#0f172a',
      'white': '#ffffff',
      'black': '#020617',
      'h3': '#111827',
      'card': '#94a3b8',
      'green': '#16a34a'
    },
  },
  plugins: [],
}