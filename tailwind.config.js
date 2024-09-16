/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
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
          left: '0%',
          },
          '1%': {
            mask: 'linear-gradient(90deg, white 99%, transparent 100%);',
            left: '0%',
          },
          '2%': {
            mask: 'linear-gradient(90deg, white 98%, transparent 100%);',
            left: '0%',
          },
          '3%': {
            mask: 'linear-gradient(90deg, white 97%, transparent 100%);',
            left: '0%',
          },
          '4%': {
            mask: 'linear-gradient(90deg, white 96%, transparent 100%);',
            left: '0%',
          },
          '5%': {
            mask: 'linear-gradient(90deg, white 95%, transparent 100%);',
            left: '0%',
          },
          '6%': {
            mask: 'linear-gradient(90deg, white 94%, transparent 100%);',
            left: '0%',
          },
          '7%': {
            mask: 'linear-gradient(90deg, white 93%, transparent 100%);',
            left: '0%',
          },
          '8%': {
            mask: 'linear-gradient(90deg, white 92%, transparent 100%);',
            left: '0%',
          },
          '9%': {
            mask: 'linear-gradient(90deg, white 91%, transparent 100%);',
            left: '0%',
          },
          '10%': {
            mask: 'linear-gradient(90deg, white 90%, transparent 100%);',
            left: '0%',
          },
          '11%': {
            mask: 'linear-gradient(90deg, white 89%, transparent 100%);',
            left: '0%',
          },
          '12%': {
            mask: 'linear-gradient(90deg, white 88%, transparent 100%);',
            left: '0%',
          },
          '13%': {
            mask: 'linear-gradient(90deg, white 87%, transparent 100%);',
            left: '0%',
          },
          '14%': {
            mask: 'linear-gradient(90deg, white 86%, transparent 100%);',
            left: '0%',
          },
          '15%': {
            mask: 'linear-gradient(90deg, white 85%, transparent 100%);',
            left: '0%',
          },
          '16%': {
            mask: 'linear-gradient(90deg, white 84%, transparent 100%);',
            left: '0%',
          },
          '17%': {
            mask: 'linear-gradient(90deg, white 83%, transparent 100%);',
            left: '0%',
          },
          '18%': {
            mask: 'linear-gradient(90deg, white 82%, transparent 100%);',
            left: '0%',
          },
          '19%': {
            mask: 'linear-gradient(90deg, white 81%, transparent 100%);',
            left: '0%',
          },
          '20%': {
            mask: 'linear-gradient(90deg, white 80%, transparent 100%);',
            left: '0%',
          },
          '21%': {
            mask: 'linear-gradient(90deg, white 79%, transparent 100%);',
            left: '0%',
          },
          '22%': {
            mask: 'linear-gradient(90deg, white 78%, transparent 100%);',
            left: '0%',
          },
          '23%': {
            mask: 'linear-gradient(90deg, white 77%, transparent 100%);',
            left: '0%',
          },
          '24%': {
            mask: 'linear-gradient(90deg, white 76%, transparent 100%);',
            left: '0%',
          },
          '25%': {
            mask: 'linear-gradient(90deg, white 75%, transparent 100%);',
            left: '0%',
          },
          '26%': {
            mask: 'linear-gradient(90deg, white 74%, transparent 100%);',
            left: '0%',
          },
          '27%': {
            mask: 'linear-gradient(90deg, white 73%, transparent 100%);',
            left: '0%',
          },
          '28%': {
            mask: 'linear-gradient(90deg, white 72%, transparent 100%);',
            left: '0%',
          },
          '29%': {
            mask: 'linear-gradient(90deg, white 71%, transparent 100%);',
            left: '0%',
          },
          '30%': {
            mask: 'linear-gradient(90deg, white 70%, transparent 100%);',
            left: '0%',
          },
          '31%': {
            mask: 'linear-gradient(90deg, white 69%, transparent 100%);',
            left: '0%',
          },
          '32%': {
            mask: 'linear-gradient(90deg, white 68%, transparent 100%);',
            left: '0%',
          },
          '33%': {
            mask: 'linear-gradient(90deg, white 67%, transparent 100%);',
            left: '0%',
          },
          '34%': {
            mask: 'linear-gradient(90deg, white 66%, transparent 100%);',
            left: '0%',
          },
          '35%': {
            mask: 'linear-gradient(90deg, white 65%, transparent 100%);',
            left: '0%',
          },
          '36%': {
            mask: 'linear-gradient(90deg, white 64%, transparent 100%);',
            left: '0%',
          },
          '37%': {
            mask: 'linear-gradient(90deg, white 63%, transparent 100%);',
            left: '0%',
          },
          '38%': {
            mask: 'linear-gradient(90deg, white 62%, transparent 100%);',
            left: '0%',
          },
          '39%': {
            mask: 'linear-gradient(90deg, white 61%, transparent 100%);',
            left: '0%',
          },
          '40%': {
            mask: 'linear-gradient(90deg, white 60%, transparent 100%);',
            left: '0%',
          },
          '41%': {
            mask: 'linear-gradient(90deg, white 59%, transparent 100%);',
            left: '0%',
          },
          '42%': {
            mask: 'linear-gradient(90deg, white 58%, transparent 100%);',
            left: '0%',
          },
          '43%': {
            mask: 'linear-gradient(90deg, white 57%, transparent 100%);',
            left: '0%',
          },
          '44%': {
            mask: 'linear-gradient(90deg, white 56%, transparent 100%);',
            left: '0%',
          },
          '45%': {
            mask: 'linear-gradient(90deg, white 55%, transparent 100%);',
            left: '0%',
          },
          '46%': {
            mask: 'linear-gradient(90deg, white 54%, transparent 100%);',
            left: '0%',
          },
          '47%': {
            mask: 'linear-gradient(90deg, white 53%, transparent 100%);',
            left: '0%',
          },
          '48%': {
            mask: 'linear-gradient(90deg, white 52%, transparent 100%);',
            left: '0%',
          },
          '49%': {
            mask: 'linear-gradient(90deg, white 51%, transparent 100%);',
            left: '0%',
          },
          '50%': {
            mask: 'linear-gradient(90deg, white 50%, transparent 100%);',
            left: '0%',
          },
          '51%': {
            mask: 'linear-gradient(90deg, white 49%, transparent 100%);',
            left: '0%',
          },
          '52%': {
            mask: 'linear-gradient(90deg, white 48%, transparent 100%);',
            left: '0%',
          },
          '53%': {
            mask: 'linear-gradient(90deg, white 47%, transparent 100%);',
            left: '0%',
          },
          '54%': {
            mask: 'linear-gradient(90deg, white 46%, transparent 100%);',
            left: '0%',
          },
          '55%': {
            mask: 'linear-gradient(90deg, white 45%, transparent 100%);',
            left: '0%',
          },
          '56%': {
            mask: 'linear-gradient(90deg, white 44%, transparent 100%);',
            left: '0%',
          },
          '57%': {
            mask: 'linear-gradient(90deg, white 43%, transparent 100%);',
            left: '0%',
          },
          '58%': {
            mask: 'linear-gradient(90deg, white 42%, transparent 100%);',
            left: '0%',
          },
          '59%': {
            mask: 'linear-gradient(90deg, white 41%, transparent 100%);',
            left: '0%',
          },
          '60%': {
            mask: 'linear-gradient(90deg, white 40%, transparent 100%);',
            left: '0%',
          },
          '61%': {
            mask: 'linear-gradient(90deg, white 39%, transparent 100%);',
            left: '0%',
          },
          '62%': {
            mask: 'linear-gradient(90deg, white 38%, transparent 100%);',
            left: '0%',
          },
          '63%': {
            mask: 'linear-gradient(90deg, white 37%, transparent 100%);',
            left: '0%',
          },
          '64%': {
            mask: 'linear-gradient(90deg, white 36%, transparent 100%);',
            left: '0%',
          },
          '65%': {
            mask: 'linear-gradient(90deg, white 35%, transparent 100%);',
            left: '0%',
          },
          '66%': {
            mask: 'linear-gradient(90deg, white 34%, transparent 100%);',
            left: '0%',
          },
          '67%': {
            mask: 'linear-gradient(90deg, white 33%, transparent 100%);',
            left: '0%',
          },
          '68%': {
            mask: 'linear-gradient(90deg, white 32%, transparent 100%);',
            left: '0%',
          },
          '69%': {
            mask: 'linear-gradient(90deg, white 31%, transparent 100%);',
            left: '0%',
          },
          '70%': {
            mask: 'linear-gradient(90deg, white 30%, transparent 100%);',
            left: '0%',
          },
          '71%': {
            mask: 'linear-gradient(90deg, white 29%, transparent 100%);',
            left: '0%',
          },
          '72%': {
            mask: 'linear-gradient(90deg, white 28%, transparent 100%);',
            left: '0%',
          },
          '73%': {
            mask: 'linear-gradient(90deg, white 27%, transparent 100%);',
            left: '0%',
          },
          '74%': {
            mask: 'linear-gradient(90deg, white 26%, transparent 100%);',
            left: '0%',
          },
          '75%': {
            mask: 'linear-gradient(90deg, white 25%, transparent 100%);',
            left: '0%',
          },
          '76%': {
            mask: 'linear-gradient(90deg, white 24%, transparent 100%);',
            left: '0%',
          },
          '77%': {
            mask: 'linear-gradient(90deg, white 23%, transparent 100%);',
            left: '0%',
          },
          '78%': {
            mask: 'linear-gradient(90deg, white 22%, transparent 100%);',
            left: '0%',
          },
          '79%': {
            mask: 'linear-gradient(90deg, white 21%, transparent 100%);',
            left: '0%',
          },
          '80%': {
            mask: 'linear-gradient(90deg, white 20%, transparent 100%);',
            left: '0%',
          },
          '81%': {
            mask: 'linear-gradient(90deg, white 19%, transparent 100%);',
            left: '0%',
          },
          '82%': {
            mask: 'linear-gradient(90deg, white 18%, transparent 100%);',
            left: '0%',
          },
          '83%': {
            mask: 'linear-gradient(90deg, white 17%, transparent 100%);',
            left: '0%',
          },
          '84%': {
            mask: 'linear-gradient(90deg, white 16%, transparent 100%);',
            left: '0%',
          },
          '85%': {
            mask: 'linear-gradient(90deg, white 15%, transparent 100%);',
            left: '0%',
          },
          '86%': {
            mask: 'linear-gradient(90deg, white 14%, transparent 100%);',
            left: '0%',
          },
          '87%': {
            mask: 'linear-gradient(90deg, white 13%, transparent 100%);',
            left: '0%',
          },
          '88%': {
            mask: 'linear-gradient(90deg, white 12%, transparent 100%);',
            left: '0%',
          },
          '89%': {
            mask: 'linear-gradient(90deg, white 11%, transparent 100%);',
            left: '0%',
          },
          '90%': {
            mask: 'linear-gradient(90deg, white 10%, transparent 100%);',
            left: '0%',
          },
          '91%': {
            mask: 'linear-gradient(90deg, white 9%, transparent 100%);',
            left: '0%',

          },
          '92%': {
            mask: 'linear-gradient(90deg, white 8%, transparent 100%);',
            left: '0%',

          },
          '93%': {
            mask: 'linear-gradient(90deg, white 7%, transparent 100%);',
            left: '0%',
            opacity: '0.7',
          },
          '94%': {
            mask: 'linear-gradient(90deg, white 6%, transparent 100%);',
            left: '0%',
            opacity: '0.6',
          },
          '95%': {
            mask: 'linear-gradient(90deg, white 5%, transparent 100%);',
            left: '0%',
            opacity: '0.5',
          },
          '96%': {
            mask: 'linear-gradient(90deg, white 4%, transparent 100%);',
            left: '0%',
            opacity: '0.4',
          },
          '97%': {
            mask: 'linear-gradient(90deg, white 3%, transparent 100%);',
            left: '0%',
            opacity: '0.3',
          },
          '98%': {
            mask: 'linear-gradient(90deg, white 2%, transparent 100%);',
            left: '0%',
            opacity: '0.2',
          },
          '99%': {
            mask: 'linear-gradient(90deg, white 1%, transparent 100%);',
            left: '0%',
            opacity: '0.1',
          },

          '100%': {
            mask: 'linear-gradient(90deg, white 0%, transparent 100%);',
            left: '-100%',
            opacity: '0',
          },
        },
        topCenter:{
          '0%': {
            transform: 'translateY(-200px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        bottomCenter:{
          '0%': {
            transform: 'translateY(100px)',
            opacity: '0',
          },
          
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        leftCenter: {
          '0%': {
            transform: 'translateX(-200px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        
      },
      animation: {
        rightToLeft: 'rightToLeft 3s ease-in-out forwards',
        topCenter: 'topCenter 0.35s ease-in-out forwards',
        bottomCenter: 'bottomCenter 0.35s ease-in-out  forwards',
        leftCenter: 'leftCenter 0.35s ease-in-out  forwards',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
  ],
}