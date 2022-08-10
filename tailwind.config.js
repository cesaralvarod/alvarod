module.exports = {
  content: ["./src/**/*.{js, jsx.ts.tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f59842",
        second: "#f93e3e",
        hoverSecond: "#f95d5d",
        fontColor: "#383d54",
        titleColor: "#181a23",
        fontColorLight: "#71768b",
        fontColorGray: "#c1c4d0",
        fontColorWhite: "#f6f8ff",
      },
      fontFamily: {
        rubik: ["Rubik", "ui-sans-serif", "Arial", "Helvetica"],
        raleway: ["Raleway", "ui-sans-serif", "Arial", "Helvetica"],
      },
      keyframes: {
        boung: {
          "0%, 100%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1)" },
        },
      },
      animation: {
        boung: "boung 2s ease-in-out infinite",
        // width: "width 1s ease-out",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
