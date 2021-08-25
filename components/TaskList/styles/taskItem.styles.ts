import { createUseStyles } from "react-jss";

export const taskItemStyles = createUseStyles(
  ({ palette }: CustomThemeProps) => {
    return {
      container: {
        display: "flex",
        flexFlow: "row nowrap",
        width: "100%",
      },

      infoContainer: {
        display: "flex",
        flexFlow: "column nowrap",
        width: "90%",
      },

      iconsContainer: {
        width: "10%",
      },

      title: {
        fontSize: "2rem",
        color: palette.primary,
      },

      description: {
        fontSize: "1.8rem",
        color: palette.fontLight,
        lineHeight: "2.5rem",
        fontWeight: "bold",
      },
    };
  }
);
