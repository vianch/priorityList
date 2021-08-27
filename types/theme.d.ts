type Breakpoint = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "out";
type JustifyContent = "flex-start" | "center" | "flex-end";
type Variant = "primary" | "secondary" | "accent" | "disabled";

interface BreakPoints {
  keys: Breakpoint[];
  values: { [key: string]: number };
  up: (key: Breakpoint) => string;
  down: (key: Breakpoint) => string;
  between: (start: Breakpoint, end: Breakpoint) => string;
}

interface ObjectString {
  [key: string]: string;
}

interface CustomThemeProps {
  breakpoints?: BreakPoints;
  palette?: ObjectString;
  typography?: ObjectString;
}
