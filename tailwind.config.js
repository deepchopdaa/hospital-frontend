/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Primary": "#21A0B60D",
        "secondary": "#00849A"
      },
      fontFamily: {
        "Archivo": "Archivo"
      },
      textColor: {
        "Primary": "#00849A",
        "secondary": "#21A0B6",
        "secondary2": "#4D4D4D",
      },
      lineHeight: {
        "75": "75px",
        "90": "90px"
      },
      keyframes: {
        scrollUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }, // scroll half the height (because of image clone)
        },
        scrollDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'scroll-up': 'scrollUp 20s linear infinite',
        'scroll-down': 'scrollDown 20s linear infinite',
      },
    },
  },
  plugins: [],
}

