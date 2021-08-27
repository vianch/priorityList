import { createUseStyles } from "react-jss";

export const ButtonStyle = createUseStyles(
  ({ breakpoints, palette }: CustomThemeProps) => {
    return {
      button: {
        width: "auto",
        minWidth: "10rem",
        minHeight: "2.4rem",
        padding: "0.8rem",
        background: "transparent",
        color: palette.greyLight,
        border: `0.1rem solid ${palette.greyLight}`,
        fontSize: "1.2rem",
        cursor: "pointer",
        borderRadius: "0.6rem",
        transition: "all .6s",

        [breakpoints.down("xs")]: {
          width: "100%",
        },

        "&.primary": {
          background: palette.primary30,
          color: palette.primary,
          border: `0.1rem solid ${palette.primary30}`,
        },

        "&.secondary": {
          background: palette.red10,
          color: palette.red,
          border: `0.1rem solid ${palette.primary10}`,
        },

        "&.accent": {
          background: palette.yellow10,
          color: palette.yellow,
          border: `0.1rem solid ${palette.yellow10}`,
        },

        "&.disabled": {
          background: palette.primary10,
          color: palette.greyLight,
          border: `0.1rem solid ${palette.primary10}`,
          cursor: "default",
        },
      },
    };
  }
);
