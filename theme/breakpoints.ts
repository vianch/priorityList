const values = {
  out: 271,
  xxs: 380,
  xs: 480,
  sm: 768,
  md: 1180,
  lg: 1440,
  xl: 1920,
};

const breakpoints = {
  keys: ["xxs", "xs", "sm", "md", "lg", "xl", "out"],
  values,
  up: (key: Breakpoint): string => `@media (min-width: ${values[key]}px)`,
  down: (key: Breakpoint): string => `@media (max-width: ${values[key]}px)`,
  between: (start: Breakpoint, end: Breakpoint): string =>
    `@media (max-width:${values[end]}px) and (min-width:${values[start]}px) `,
};

export default breakpoints;
