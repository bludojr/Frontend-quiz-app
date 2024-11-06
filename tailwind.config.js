/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
        "lightGray": "#f4f6fa",
        "lightBlue": "#e3e8f3",
      },
      fontWeight:{
        "mid":"450",
      },
      fontSize:{
        "6.5xl":"4.125rem",
        "5.5xl":"3.375rem",
      },
      margin:{
        "1.3":"0.325rem",
        "1.4":"0.35rem",
      },
      spacing:{
        "lg":"48rem",
        "200":"50rem",
      },
      textColor:{
        "dark-gray": "#313e51",
        "hot-purple": "#a729f5",
      },
      backgroundColor:{
        "dark-gray": "#313e51",
        "hot-purple": "#a729f5",
        "nice": "#f4f6fa",
        "icon-html-opacity":"rgba(255,126,53,0.2)",
        "icon-css-opacity":"rgba(47,216,135,0.2)",
        "icon-js-opacity":"rgba(48,106,255,0.2)",
        "icon-accessibility-opacity":"rgba(167,41,245,0.2)"
      },
      backgroundImage: {
        "desktop-light": "url('src/assets/images/pattern-background-desktop-light.svg')",
        "desktop-dark": "url('src/assets/images/pattern-background-desktop-dark.svg')",
        "tablet-light": "url('src/assets/images/pattern-background-tablet-light.svg')",
        "tablet-dark": "url('src/assets/images/pattern-background-tablet-dark.svg')",
        "mobile-light": "url('src/assets/images/pattern-background-mobile-light.svg')",
        "mobile-dark": "url('src/assets/images/pattern-background-mobile-dark.svg')",
        "icon-html":"url('src/assets/images/icon-html.svg')",
        "icon-css":"url('src/assets/images/icon-css.svg')",
        "icon-js":"url('src/assets/images/icon-js.svg')",
        "icon-accessibility":"url('src/assets/images/icon-accessibility.svg')"
      },
      fontFamily: {
        "rubik": "rubik",
        "rubik-italic": "rubik-italic" 
      }
    },
  },
  plugins: [],
}