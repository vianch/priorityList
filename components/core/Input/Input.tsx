import { ChangeEvent, MutableRefObject, ReactElement, forwardRef } from "react";
import clsx from "clsx";

import { InputStyles } from "./input.styles";

import { maxCharsDescription } from "@/lib/common";

interface InputProps {
  name: string;
  placeholder: string;
  value: string;
  isTitle?: boolean;
  max?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (
  {
    name,
    placeholder,
    value,
    onChange,
    isTitle = false,
    max = maxCharsDescription,
  }: InputProps,
  ref: MutableRefObject<HTMLInputElement | undefined>
): ReactElement => {
  const classes = InputStyles();

  return (
    <input
      className={clsx(classes.input, {
        title: isTitle,
        description: !isTitle,
      })}
      ref={ref}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      max={max}
    />
  );
};

export default forwardRef(Input);
