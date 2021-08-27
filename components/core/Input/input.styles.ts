import { createUseStyles } from "react-jss";

export const InputStyles = createUseStyles(
  ({ breakpoints, palette, typography }: CustomThemeProps) => {
    return {
      input: {
        border: "none",
        borderColor: "transparent",
        width: "calc(100% - 1.5rem)",
        height: "2.5rem",
        outline: "none",
        borderStyle: "none",
        paddingRight: "1.5rem",

        "&.description": {
          color: palette.greyLight,
          lineHeight: "2.5rem",
          fontFamily: typography.primaryFont,
          fontSize: "1.6rem",
        },

        "&.title": {
          fontSize: "2rem",
          color: palette.primary,
          fontFamily: typography.secondaryFont,
          fontWeight: "bold",

          [breakpoints.down("xs")]: {
            fontSize: "clamp(0.2vw, 4vw, 6vw)",
          },
        },

        [breakpoints.down("xs")]: {
          fontSize: "1.2rem",
        },
      },
    };
  }
);
