import palette from "../palette";
import typography from "../typography";

const globalStyles = {
  "@global": {
    html: {
      background: palette.white,
      fontSize: "62.5%", // reset default font size to 10px = 1rem
      margin: 0,
      padding: 0,
    },

    ["*::before, *::after"]: {
      boxSizing: "inherit",
    },

    body: {
      backgroundColor: palette.white,
      fontFamily: typography.primaryFont,
      margin: 0,
      padding: 0,
    },

    p: {
      margin: 0,
      padding: 0,
    },

    h1: {
      margin: 0,
      padding: 0,
      fontSize: "5.4rem",
      fontFamily: `${typography.secondaryFont}`,
      fontWeight: 800,
    },

    h2: {
      margin: 0,
      padding: 0,
      fontSize: "4.8rem",
      fontFamily: `${typography.secondaryFont}`,
      fontWeight: 800,
    },

    h3: {
      margin: 0,
      padding: 0,
      fontSize: "3.6rem",
      fontFamily: `${typography.secondaryFont}`,
      fontWeight: 800,
    },

    h4: {
      margin: 0,
      padding: 0,
      fontSize: "2.6rem",
      fontFamily: `${typography.secondaryFont}`,
      fontWeight: 800,
    },

    h5: {
      margin: 0,
      padding: 0,
      fontSize: "1.8rem",
      fontFamily: `${typography.secondaryFont}`,
      fontWeight: 800,
    },

    ul: {
      margin: 0,
      padding: 0,
    },

    a: {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
};

export default globalStyles;
