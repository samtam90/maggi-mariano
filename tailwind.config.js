const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@italwebcom/tailwind-components/*.js",
    "./node_modules/@italwebcom/brocante-shopapp-tailwind-components/*.js",
  ],
  theme: {
    animation: {
      grow: "grow 250ms ease-in-out 1",
      "trace-path": "trace-path 1250ms ease-in-out 1",
    },
    keyframes: {
      grow: {
        "0%": { transform: "scale(1)" },
        "80%": { transform: "scale(1.15)" },
        "100%": { transform: "scale(1)" },
      },
      "trace-path": {
        "0%": { "stroke-dasharray": "0 1500" },
        "100%": { "stroke-dasharray": "1500 1500" },
      },
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        green: {
          dark: "#1E3226",
          primary: "#006940",
          lighter: "#6BA637",
        },
        red: {
          primary: "#F0353A",
          opaqueTitle: "rgb(255, 0, 0, 0.95)",
        },
        yellow: {
          primary: "#F8C100",
          default: "#F8C100",
          alt: "#f0ad4e",
          light: "#f0f6eb",
        },
      },
      fontFamily: {
        content: "Montserrat",
        title: "Montserrat",
        titleBold: "MontserratBold",
      },
      flexBasis: {
        "1/7": "14.2857143%",
        "1/2": "50%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
      },
      fontSize: {
        xxs: "0.6rem",
        md: "1rem",
      },
      maxWidth: {
        "8xl": "1440px",
        "2/3": "75%",
        "1/2": "50%",
        "3/5": "66.66666667%",
      },
      backgroundImage: {
        homeFeedbackImage:
          "url('https://www.maggi-mariano.it/images/home/desc-1.jpg')",
        title: "url('https://www.maggi-mariano.it/images/title.jpg')",
        camera: "url('https://www.maggi-mariano.it/images/home/camera.jpg')",
      },
    },
    zIndex: {
      0: "0",
      bottom: "-9999",
      "-20": "-20",
      "-10": "-10",
      "-1": "-1",
      10: "10",
      20: "20",
      30: "30",
      top: "9999",
      toptop: "10000",
    },
    opacity: {
      0: "0",
      10: "0.1",
      15: "0.15",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      33: "0.33",
      35: "0.35",
      40: "0.4",
      45: "0.45",
      50: "0.5",
      55: "0.55",
      60: "0.6",
      65: "0.65",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      85: "0.85",
      90: "0.9",
      95: "0.95",
      100: "1",
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '[type="search"]::-webkit-search-decoration': { display: "none" },
        '[type="search"]::-webkit-search-cancel-button': { display: "none" },
        '[type="search"]::-webkit-search-results-button': { display: "none" },
        '[type="search"]::-webkit-search-results-decoration': {
          display: "none",
        },
        "@media (min-width: 512px)": {
          "::-webkit-scrollbar": {
            height: "8px",
            inset: "0 0 2px 0",
          },
          "::-webkit-scrollbar-track": {
            background: "rgb(245, 245, 245)",
          },
          "::-webkit-scrollbar-thumb": {
            background: "rgb(200, 200, 200)",
            width: "25px",
          },
          "::-webkit-scrollbar-button": {
            display: "none",
          },
        },
      });
    }),
  ],
};
