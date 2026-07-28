/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A192F',
          800: '#112240',
          700: '#1d3557',
        },
        cyan: {
          accent: '#64FFDA',
        },
        slateText: '#8892B0',
        lightText: '#CCD6F6'
      }
    },
  },
  plugins: [],
}