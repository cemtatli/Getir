/** @type {import('tailwindcss').Config} */
module.exports = {
  mod: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      xxs: ['11.25px','14px'],
      fontgetir: ['14px','20px'],
      xxl: ['20px','28px'],
      xxxl: ['24px','34px'],
    },
    extend: {
      flex: {
        '2': '2 2 0%'
      },
       backgroundImage: {
        'mobile-app': "url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')",
      },
      screens: {       
        'xxs':'355px',
        'xs': '425px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
    },
      colors:{
        'getir': '#fafafa',
        'getir-d-purple': '#483c93',
        'getir-l-purple': '#5849b6',
        'getir-yellow': '#ffce45',
        'getir-icon': '#dcdcff',
        'getir-darkgray': '#3e3e3e',
        'getir-hover': '#dbdbff',
        'getir-lightgray': '#697488',
        'getir-black': '#191919',
      }
    },
  },
  plugins: [],
}