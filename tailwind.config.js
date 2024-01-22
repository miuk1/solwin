/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'russian-violet': '#100139',
      'persian-indigo': '#100139',
      'oxford-blue': '#181e33',
      'prussian-blue': '#213b50',
      'ncs-blue': '#298cb4',
      'fandango': '#b72488',
      'eminence': '#682c87',
      'dark-purple': '#4a154b',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#808080',
    }
  },
  plugins: [],
}

