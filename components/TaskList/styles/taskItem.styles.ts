import { createUseStyles } from "react-jss";

export const taskItemStyles = createUseStyles(
  ({ palette, breakpoints, typography }: CustomThemeProps) => {
    return {
      container: {
        display: "flex",
        flexFlow: "row nowrap",
        width: "100%",
      },

      infoContainer: {
        display: "flex",
        flexFlow: "column nowrap",
        width: "100%",
      },

      iconsContainer: {
        width: "10%",
      },

      titleWrapper: {
        display: "flex",
        flexFlow: "row nowrap",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        height: "5rem",
        marginBottom: "1rem",
      },

      title: {
        fontSize: "2rem",
        color: palette.primary,

        [breakpoints.down("xs")]: {
          fontSize: "clamp(0.2vw, 4vw, 6vw)",
        },
      },

      strike: {
        position: "relative",

        "&::after": {
          content: "' '",
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: "0.2rem",
          background: palette.primary,
          animationName: "$strike",
          animationDuration: "0.3s",
          animationTimingFunction: "linear",
          animationIterationCount: 1,
          animationFillMode: "forwards",

          [breakpoints.down("out")]: {
            visibility: "hidden",
          },
        },
      },

      completedIcon: {
        width: "4.8rem",
        cursor: "pointer",
        marginRight: "1rem",
        animation: "$bounce .5s ease",
      },

      descriptionWrapper: {
        display: "flex",
        flexFlow: "row nowrap",
        width: "100%",
        marginBottom: "2.5rem",
      },

      description: {
        fontSize: "1.6rem",
        color: palette.greyLight,
        lineHeight: "2.5rem",
        fontFamily: typography.primaryFont,

        [breakpoints.down("xs")]: {
          fontSize: "1.4rem",
        },
      },

      buttonWrapper: {
        display: "flex",
        flexFlow: "row nowrap",
        width: "100%",
        alignItems: "center,",
        marginBottom: "1.2rem",
        justifyContent: "flex-end",

        [breakpoints.down("xs")]: {
          flexFlow: "row wrap",
        },
      },

      button: {
        marginRight: "1rem",
        width: "inherit%",
        transition: "all 0.4s",

        [breakpoints.down("xs")]: {
          width: "100%",
          marginRight: 0,
          marginBottom: "1rem",

          "&:last-child": {
            marginBottom: 0,
          },
        },
      },

      "@keyframes bounce": {
        "0%": { transform: "scale(1.1)" },
        "50%": { transform: "scale(1.4)" },
        "60%": { transform: "scale(0.6)" },
        "80%": { transform: "scale(0.95)" },
        "100%": { transform: "scale(0.85)" },
      },

      "@keyframes strike": {
        "0%": { width: 0 },
        "100%": { width: "100%;" },
      },
    };
  }
);
