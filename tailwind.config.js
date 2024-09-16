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
          '0%':{
          mask: 'linear-gradient(90deg, white 100%, transparent 100%);',
          left: '0',
          },
          '10%': {
            mask: 'linear-gradient(90deg, white 90%, transparent 100%);',
            left: '-10%',
          },
          '20%': {
            mask: 'linear-gradient(90deg, white 80%, transparent 100%);',
            left: '-20%',
          },
          '30%': {
            mask: 'linear-gradient(90deg, white 70%, transparent 100%);',
            left: '-30%',
          },
          '40%': {
            mask: 'linear-gradient(90deg, white 60%, transparent 100%);',
            left: '-40%',
          },
          '50%': {
            mask: 'linear-gradient(90deg, white 50%, transparent 100%);',
            left: '-50%',
          },
          '60%': {
            mask: 'linear-gradient(90deg, white 40%, transparent 100%);',
            left: '-60%',
          },
          '70%': {
            mask: 'linear-gradient(90deg, white 30%, transparent 100%);',
            left: '-70%',
          },
          '80%': {
            mask: 'linear-gradient(90deg, white 20%, transparent 100%);',
            left: '-80%',
          },
          '90%': {
            mask: 'linear-gradient(90deg, white 10%, transparent 100%);',
            left: '-90%',
          },
          '100%': {
            mask: 'linear-gradient(90deg, white 0%, transparent 100%);',
            left: '-100%',
          },
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