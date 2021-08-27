import React, {
  KeyboardEvent,
  MutableRefObject,
  ReactElement,
  useState,
  useEffect,
} from "react";
import clsx from "clsx";

import { editableStyles } from "./editable.styles";

interface EditableProps {
  customClass: string;
  text: string;
  type: TaskFields;
  isEditable: boolean;
  placeholder: string;
  children: ReactElement;
  childRef: MutableRefObject<HTMLInputElement | undefined>;
  fullWidth?: boolean;
  isTitle?: boolean;
}

const Editable = ({
  customClass,
  text,
  type,
  isEditable,
  placeholder,
  children,
  childRef,
  fullWidth = false,
  isTitle = false,
}: EditableProps): ReactElement => {
  const [isEditing, setIsEditing] = useState(false);
  const classes = editableStyles();

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    type: TaskFields
  ) => {
    const { key } = event;
    const keys = ["Escape", "Tab"];
    const enterKey = "Enter";
    const allKeys = [...keys, enterKey]; // All keys array, when is not textarea

    if (
      (type === "textarea" && keys.indexOf(key) > -1) ||
      (type === "input" && allKeys.indexOf(key) > -1)
    ) {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if (childRef?.current && isEditing) {
      childRef?.current?.focus();
    }

    return () => {
      if (childRef?.current && isEditing) {
        childRef?.current?.blur();
      }
    };
  }, [isEditing, childRef]);

  return (
    <section className={clsx({ [classes.section]: fullWidth })}>
      {isEditing && isEditable ? (
        <div
          onBlur={() => setIsEditing(false)}
          onKeyDown={(event: KeyboardEvent<HTMLDivElement>) =>
            handleKeyDown(event, type)
          }
        >
          {children}
        </div>
      ) : (
        <div onClick={() => setIsEditing(true)}>
          {!isTitle && (
            <p className={customClass}>
              {text || placeholder || "Editable content"}
            </p>
          )}

          {isTitle && (
            <h2 className={customClass}>
              {text || placeholder || "Editable content"}
            </h2>
          )}
        </div>
      )}
    </section>
  );
};

export default Editable;
