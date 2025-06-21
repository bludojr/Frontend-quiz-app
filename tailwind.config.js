/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xsm': '240px',
      'sssm': '321px',
      'ssm': '380px',
      'sm' : '480px',
      'md' : '768px',
      'lg' : '1025px',
      'xlg' : '1998px',
    },
    extend: {
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite'
      },    
      colors: {
        "lightGray": "#f4f6fa",
        "lightBlue": "#e3e8f3",
        "hot-purple": "#a729f5",
        "soft-gray": "#3c4c67"
      },
      fontWeight:{
        "mid":"450",
      },
      fontSize:{
        "6.5xl":"4.125rem",
        "5.5xl":"3.375rem",
        "4.5xl":"2.625rem",
        '2.5xl': ['1.75rem', '2.125rem']
      },
      margin:{
        "1.3":"0.325rem",
        "1.4":"0.35rem",
      },
      spacing:{
        "lg":"48rem",
        "124":"26rem",
        "200":"50rem",
        "6.5":"1.6rem",
      },
      textColor:{
        "dark-gray": "#313e51",
        "hot-purple": "#a729f5",
        "nice" : "#f4f6fa",
        "lightBlue": "#e3e8f3",
      },
      backgroundColor:{
        "dark-gray": "#313e51",
        "hot-purple": "#a729f5",
        "nice": "#f4f6fa",
        "red": "#c85053",
        "icon-html-opacity":"rgba(255,126,53,0.2)",
        "icon-css-opacity":"rgba(47,216,135,0.2)",
        "icon-js-opacity":"rgba(48,106,255,0.2)",
        "icon-accessibility-opacity":"rgba(167,41,245,0.2)",
        "opacity":"rgba(0,0,0,0.2)"
      },
      backgroundImage: {
        "desktop-light": "url('/assets/images/pattern-background-desktop-light.svg')",
        "desktop-dark": "url('/assets/images/pattern-background-desktop-dark.svg')",
        "tablet-light": "url('/assets/images/pattern-background-tablet-light.svg')",
        "tablet-dark": "url('/assets/images/pattern-background-tablet-dark.svg')",
        "mobile-light": "url('/assets/images/pattern-background-mobile-light.svg')",
        "mobile-dark": "url('/assets/images/pattern-background-mobile-dark.svg')",
      },
      fontFamily: {
        "rubik": ["Rubik", "Montserrat", "sans-serif"],
        "rubik-italic": ["Rubik-Italic", "Montserrat Italic", "sans-serif"]
      }
    },
  },
  plugins: [],
}