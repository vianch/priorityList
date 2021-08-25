import { createUseStyles } from "react-jss";

export const cardStyles = createUseStyles(({ palette }: CustomThemeProps) => {
  return {
    container: {
      width: "calc(100% - 3rem)",
      padding: "1.5rem",
      background: palette.white,
      minHeight: "2.5rem",
      borderRadius: "0.6rem",
      marginBottom: "1rem",
      boxShadow: "0 0.3rem 0.5rem rgba(0, 0, 0, 0.1)",
      cursor: "pointer",

      "&:last-child": {
        marginBottom: 0,
      },
    },
  };
});
