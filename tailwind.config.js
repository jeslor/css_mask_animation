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
          mask: 'linear-gradient(90deg, white, white 90%)',
          left: '0',
          },
          '10%': {
          mask: 'linear-gradient(90deg, white, transparent 100%)',
          left: '-10%',
          },
          '100%': 
          {left: '-100%',
            mask: 'linear-gradient(90deg, white, transparent 100%)'
          }
        },
      },
      animation: {
        rightToLeft: 'rightToLeft 20s ease-in-out forwards',
      },
    },
  },
  plugins: [
    
  ],
}