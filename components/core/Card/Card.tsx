import { HTMLAttributes, ReactElement } from "react";

// styles
import { cardStyles } from "@/components/core/Card/card.styles";

const Card = (props: HTMLAttributes<ReactElement>): ReactElement => {
  const classes = cardStyles();

  return <div className={classes.container}>{props.children}</div>;
};

export default Card;
