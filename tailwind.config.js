/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        primaryColor: '#A73121',
        primaryColorLight: '#E2C799',
        category2: '#C08261',
        secondaryColor: '#E2C799',
        paragraphColor: '#F2ECBE',
        whiteColor: '#fff',
        blackColor: '#000',
        greenColor: '#007936',
        darkColor: '#000',
        darkColorLight: '#171717',
      },
      keyframes: {
        move: {
          '50%': { transform: 'translateY(-1rem)' },
        },
      },
      animation: {
        movingY: 'move 2s linear infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
      },
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
};