import { ReactElement, useState, useEffect } from "react";

// styles
import { emptyContainerStyles } from "./emptyContainer.styles";
import clsx from "clsx";

interface EmptyContainerProps {
  description?: string;
}

const EmptyContainer = ({ description }: EmptyContainerProps): ReactElement => {
  const classes = emptyContainerStyles();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    }

    return () => {
      if (!isLoading) {
        setIsLoading(true);
      }
    };
  }, [isLoading]);

  return (
    <div
      className={clsx(classes.container, {
        loading: isLoading,
        loaded: !isLoading,
      })}
    >
      <img
        className={classes.spooky}
        src="/static/images/spooky.png"
        height="100"
        alt="spooky"
      />
      <h5 className={classes.description}>
        {description || "Congratulations you have no pending tasks"}
      </h5>
    </div>
  );
};

export default EmptyContainer;
