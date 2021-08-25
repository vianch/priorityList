import { ReactElement } from "react";

// Components
import Card from "@/components/core/Card/Card";

// Styles
import { taskItemStyles } from "./styles/taskItem.styles";

interface TaskItemProps {
  title: string;
  description: string;
}

const TaskItem = ({ title, description }: TaskItemProps): ReactElement => {
  const classes = taskItemStyles();

  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.description}>{description}</p>
        </div>
        <div className={classes.iconsContainer}> icons</div>
      </div>

      <div>Buttons</div>
    </Card>
  );
};

export default TaskItem;
