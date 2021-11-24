module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      // custom background for side bar
      backgroundColor: {
        gray: {
          600: "#252b3b",
        },
      },
      // custom color for side bar text
      textColor: {
        blue: {
          200: '#d7e4ec',
          100: '#74788d',
        }
      },
      transitionProperty: {
        'transition-duration': '1000ms'
      },
      margin: {
        '-15':'-3.7rem'
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
