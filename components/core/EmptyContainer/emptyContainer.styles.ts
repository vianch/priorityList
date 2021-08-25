import { createUseStyles } from "react-jss";

export const emptyContainerStyles = createUseStyles(
  ({ breakpoints, palette }: CustomThemeProps) => {
    return {
      container: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "calc(100% - 3rem)",
        display: "flex",
        padding: "2rem 1.5rem",
        transition: "opacity 0.6s",

        "&.loading": {
          opacity: "0",
        },

        "&.loaded": {
          opacity: "0.7",
        },
      },

      spooky: {
        height: "10rem",

        [breakpoints.down("xxs")]: {
          display: "none",
        },
      },

      description: {
        color: palette.primary,
        fontSize: "2rem",
        transition: "all 0.5s",

        [breakpoints.down("xs")]: {
          fontSize: "1.6rem",
        },

        [breakpoints.down("xxs")]: {
          fontSize: "1.2rem",
        },
      },
    };
  }
);
