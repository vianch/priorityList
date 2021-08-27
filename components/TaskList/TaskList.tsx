import { ReactElement } from "react";

import { taskListStyles } from "./styles/taskList.styles";

import { Logger } from "@/lib/common";

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
 *  7. Max title 25 characteres
 *  8. Expand description
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
            completed={taskItem.completed}
            onCompleted={() => Logger.info("COMPLETED")}
          />
        ))}
      {(!tasks || tasks?.length < 1) && <EmptyContainer />}
    </Container>
  );
};

export default TaskList;
