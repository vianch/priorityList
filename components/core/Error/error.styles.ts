import { createUseStyles } from "react-jss";

export const errorStyles = createUseStyles(
  ({ breakpoints, palette, typography }: CustomThemeProps) => {
    return {
      title: {
        color: palette.error,
        textAlign: "center",
        fontSize: "4rem",
        fontStyle: "normal",
        fontWeight: "bold",
        fontFamily: typography.secondaryFont,
        lineHeight: "5.2rem",
        padding: "2rem 0 1rem 0",
        transition: " all 0.25s ease-in-out",

        [breakpoints.down("sm")]: {
          fontSize: "2rem",
        },
      },

      description: {
        fontWeight: 400,
        color: palette.midGray,
        textAlign: "center",
        fontSize: "2.4rem",
        fontStyle: "normal",
        paddingBottom: "3rem",
        transition: " all 0.25s ease-in-out",

        [breakpoints.down("sm")]: {
          fontSize: "1rem",
        },
      },

      image: {
        maxHeight: "50rem",
        paddingTop: "6rem",
      },

      container: {
        textAlign: "center",
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
        marginBottom: "8rem",
      },

      gridContainer: {
        paddingTop: "7rem",
      },
    };
  }
);
