/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        Mulish: ["Mulish", "sans-serif"],
      },
      boxShadow: {
        '3xl': '0px 5px 10px rgba(0, 0, 0, 0.3)',
        '4xl': '0px 0px 10px rgba(0, 0, 0, 0.2)',
        '5xl': ' rgb(217 217 217) 15px 15px 55px, rgb(255 255 255) -15px -15px 55px'
      },
      border:{
        'big': '0.02667rem solid rgba(49,108,169,.015)'
      },  
      colors: {
        'opay-green': '#1dcf9f',
        'kuda-purple': '#40196d'
        
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin')
  
  ],
}