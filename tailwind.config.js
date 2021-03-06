const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px, base) => `${round(px / base)}rem`;


module.exports = {
  purge: {
    mode: "all",
    content: [
      `${__dirname}/src/components/*.js`,
      `${__dirname}/src/components/**/*.js`,
      `${__dirname}/src/components/**/**/*.js`,
      `${__dirname}/src/components/**/**/**/*.js`,
      `${__dirname}/src/components/blocks/**/*.js`,
      `${__dirname}/src/styled-elements/**/*.js`,
      `${__dirname}/src/styles/*.js`,
      `${__dirname}/src/templates/*.js`,
    ],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
        /data-v-.*/,
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: false,
      padding: 0,
    },
    extend: {
      screens: {},
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
        3: 3,
        4: 4,
        5: 5,
      },
      minHeight: {
        2.5: "2.5rem",
        3: "3rem",
        3.5: "3.5rem",
        4: "4rem",
        4.5: "4.5rem",
      },
      maxWidth: {
        20: "20rem",
      },
      spacing: {
        px: "1px",
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        20: "5rem",
        21: "5.25rem",
        22: "5.50rem",
        23: "5.75rem",
        24: "6rem",
        25: "6.25rem",
        26: "6.50rem",
        27: "6.75rem",
        28: "7rem",
        29: "7.25rem",
        30: "7.50rem",
        31: "7.75rem",
        32: "8rem",
        33: "8.25rem",
        34: "8.50rem",
        35: "8.75rem",
        36: "9rem",
        37: "9.25rem",
        38: "9.50rem",
        39: "9.75rem",
        40: "10rem",
        41: "10.15rem",
        42: "10.25rem",
        43: "10.35rem",
        44: "10.45rem",
        45: "10.55rem",
        46: "10.65rem",
        47: "11rem",
        48: "12rem",
        49: "12.5rem",
        50: "13rem",
        51: "13.5rem",
        52: "14.5rem",
        53: "15rem",
        54: "15.5rem",
        55: "16rem",
        56: "17rem",
        57: "18rem",
        58: "19rem",
        59: "20rem",
        60: "21rem",
        61: "22rem",
        62: "23rem",
        63: "24rem",
        64: "25rem",
        "50v": "50vh",
        "59v": "59vh",
        "60v": "60vh",
        "65v": "65vh",
        "70v": "70vh",
        "80v": "80vh",
      },
      borderRadius: {
        15: "15px",
        30: "30px",
        60: "60px",
        90: "90px",
      },
      opacity: {
        0: "0",
        5: ".05",
        10: ".1",
        15: ".15",
        20: ".2",
        25: ".25",
        30: ".3",
        35: ".35",
        40: ".4",
        45: ".45",
        50: ".5",
        55: ".55",
        60: ".6",
        65: ".65",
        70: ".7",
        75: ".75",
        80: ".8",
        85: ".85",
        90: ".9",
        95: ".95",
        100: "1",
      },
      colors: {
        cararra: "#EFEEEA",
        "catskill-white": "#F7F9FB",
        whitelilac: "#F3F1F9",
        mineshaft: "#242121",
        cream: "#F9EAF7",
        cream300: "#F9EAF7",
        cream400: "#F8E2E3",
        cream500: "#ecd1d2",
        darkblue: "#24242A",
        orange: "#f36c3e",
        orange300: "#F7C88C",
        orange500: "#F36C3E",
        orange600: "#E75C57",
        orange700: "#e2643a",
        silver: "#A7A6A6",
      },
      fontSize: (theme) => ({
        sm: [rem(13, 16), theme("lineHeight.normal")], // 13
        xs: [rem(14, 16), theme("lineHeight.normal")], // 14
        base: ["1rem", theme("lineHeight.normal")], // 16
        md: [rem(18, 16), theme("lineHeight.normal")], // 18
        lg: [rem(20, 16), theme("lineHeight.normal")], // 20
        xl: [rem(25, 16), theme("lineHeight.normal")], // 25
        "2xl": [rem(30, 16), theme("lineHeight.normal")], // 30
        "3xl": [rem(35, 16), theme("lineHeight.normal")], // 35
        "4xl": [rem(45, 16), theme("lineHeight.normal")], // 45
        "5xl": [rem(60, 16), theme("lineHeight.normal")], // 60
      }),
      fontFamily: {
        "helvetica-neue": ["helvetica-neue", "sans-serif"],
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover", "checked"],
    opacity: ["responsive", "hover", "group-hover", "disabled"],
    translate: ["responsive", "hover", "group-hover"],
    scale: ["responsive", "hover", "group-hover"],
    margin: ["responsive", "first", "last"],
    padding: ["responsive", "first", "last"],
    borderStyle: ["hover", "focus", "last"],
    borderColor: ["responsive", "hover", "focus", "checked"],
    fontWeight: ["hover"],
  },
  plugins: [],
}
