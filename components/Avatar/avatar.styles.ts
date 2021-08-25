import { createUseStyles } from "react-jss";

export const avatarStyles = createUseStyles(({ palette }: CustomThemeProps) => {
  return {
    container: {
      justifyContent: "center",
      alignItems: "center",
    },

    avatarContainer: {
      margin: "5rem auto",
      display: "flex",
      alignItems: "center",
      flexFlow: "column nowrap",
      maxWidth: "24rem",
    },

    avatarImg: {
      width: "6.4rem",
      height: "6.4rem",
      marginBottom: "1.5rem",
      borderRadius: "0.4rem",
    },

    name: {
      textAlign: "center",
      marginBottom: "0.25rem",
      color: palette.primary,
    },

    avatarDescription: {
      fontSize: "1.6rem",
      color: palette.fontLight,
      fontWeight: "bold",
    },
  };
});
