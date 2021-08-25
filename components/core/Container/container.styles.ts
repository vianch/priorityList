import { createUseStyles } from "react-jss";

export const containerStyles = createUseStyles(
  ({ breakpoints }: CustomThemeProps) => {
    return {
      section: {
        display: "block",
        padding: "0 1.5rem 0 1.5rem",
      },

      container: {
        width: "100%",
        display: "flex",
        margin: "0 auto",
        maxWidth: `${breakpoints.values.sm}px`,
        transition: "all 0.5s",

        [breakpoints.down("xs")]: {
          maxWidth: "100%",
        },
      },
    };
  }
);
