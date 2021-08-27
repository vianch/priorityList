import { ReactElement } from "react";

import { ButtonStyle } from "./button.style";
import clsx from "clsx";

interface ButtonProps {
  text: string;
  onPress: () => void;
  variant?: Variant;
}

const Button = ({ text, variant, onPress }: ButtonProps): ReactElement => {
  const classes = ButtonStyle();

  return (
    <button
      className={clsx(classes.button, {
        primary: variant === "primary",
        secondary: variant === "secondary",
        accent: variant === "accent",
        disabled: variant === "disabled",
      })}
      type="button"
      onClick={onPress}
    >
      {text}
    </button>
  );
};

export default Button;
