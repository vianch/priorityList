import { ReactElement } from "react";

// Styles
import { taskListStyles } from "./styles/taskList.styles";

// Components
import TaskItem from "./TaskItem";
import Container from "@/components/core/Container/Container";
import EmptyContainer from "@/components/core/EmptyContainer/EmptyContainer";

/*
 * TODO:
 *  1. Progress bar
 *  2. max description 180 characters
 *  3. info bar with rules
 *  4. sort drag and drop
 *  5. Editable fields
 *  6. lazy load with silhouette
 */

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps): ReactElement => {
  const classes = taskListStyles();

  return (
    <Container className={classes.container}>
      {tasks?.length > 0 &&
        tasks?.map((taskItem: Task, index: number) => (
          <TaskItem
            key={`task-item-${index}`}
            title={taskItem.title}
            description={taskItem.description}
          />
        ))}
      {(!tasks || tasks?.length < 1) && <EmptyContainer />}
    </Container>
  );
};

export default TaskList;
