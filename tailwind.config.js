/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    width: {
      '90p': '90%'
    },
    colors: {
      'default': '#0f172a',
      'white': '#ffffff',
      'black': '#020617',
      'card': '#94a3b8'
    },
  },
  plugins: [],
}