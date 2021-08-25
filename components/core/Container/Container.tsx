import { HTMLAttributes, ReactElement } from "react";
import clsx from "clsx";
//Styless
import { containerStyles } from "./container.styles";

const Container = (props: HTMLAttributes<ReactElement>): ReactElement => {
  const classes = containerStyles();
  return (
    <section className={classes.section}>
      <div className={clsx(classes.container, props.className)}>
        {props.children}
      </div>
    </section>
  );
};

export default Container;
