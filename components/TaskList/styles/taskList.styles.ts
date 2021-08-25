import { createUseStyles } from "react-jss";

export const taskListStyles = createUseStyles(
  ({ palette }: CustomThemeProps) => {
    return {
      container: {
        justifyContent: "center",
        alignItems: "center",
        background: palette.primaryLight,
        minHeight: "5rem",
        borderRadius: "0.6rem",
        flexFlow: "column nowrap",
        padding: "1.5rem",
        width: "calc(100% - 3rem)",
        transition: "all 1s",
      },
    };
  }
);
