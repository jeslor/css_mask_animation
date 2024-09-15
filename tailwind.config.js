/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        rightToLeft: {
          '0%': {left: '0'},
          '100%': {left: '-100%'}
        },
      },
      animation: {
        rightToLeft: 'rightToLeft 2s ease-in-out forwards',
      },
    },
  },
  plugins: [
    
  ],
}