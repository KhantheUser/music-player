module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors :{
        'second':'#909dbd',
        'purple-primary':'#9b4de0',
        'back-second':'#2f2739',
        'back-primary':'#221a2d',
        'purple-secondary':'#1e1728'
      },
      screens:{
        'md-900': '900px',
        'md-800': '800px',
        'sm-500':'500px',
        'sm-550':'550px'
      }

      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}