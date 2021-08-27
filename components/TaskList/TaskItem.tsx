import { ChangeEvent, ReactElement, useState, useRef } from "react";
import clsx from "clsx";

// Styles
import { taskItemStyles } from "./styles/taskItem.styles";

import { maxCharsDescription, maxCharsTitle } from "@/lib/common";

// Components
import Card from "@/components/core/Card/Card";
import Button from "@/components/core/Button/Button";
import Editable from "@/components/core/Editable/Editable";
import Input from "@/components/core/Input/Input";

interface TaskItemProps extends Task {
  onCompleted: (isCompleted: boolean) => void;
}

const TaskItem = ({
  title,
  description,
  completed,
  onCompleted,
}: TaskItemProps): ReactElement => {
  const classes = taskItemStyles();
  const inputRef = useRef();
  const [isCompleted, setIsComplete] = useState(completed);
  const [editedTask, setEditedTask] = useState({
    title,
    description,
    completed,
  } as Task);

  const handleOnCompleted = (): void => {
    if (!isCompleted && editedTask?.description?.length > 0) {
      setIsComplete(true);
      onCompleted(true);
    }
  };

  const handleDescriptionEdit = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const newValue = event?.target?.value;
    if (newValue?.length <= maxCharsDescription) {
      setEditedTask({
        ...editedTask,
        description: event?.target?.value || "",
      });
    }
  };

  const handleTitleEdit = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = event?.target?.value;
    if (newValue?.length <= maxCharsTitle) {
      setEditedTask({
        ...editedTask,
        title: event?.target?.value || "",
      });
    }
  };

  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <div className={classes.titleWrapper}>
            <Editable
              customClass={clsx(classes.title, {
                [classes.strike]: isCompleted,
              })}
              text={editedTask.title}
              isEditable={!isCompleted}
              type="input"
              placeholder="Click to edit the title"
              childRef={inputRef}
              isTitle
            >
              <Input
                ref={inputRef}
                name="title"
                placeholder="Write a title"
                value={editedTask.title}
                max={maxCharsTitle}
                onChange={handleTitleEdit}
                isTitle
              />
            </Editable>

            {isCompleted && (
              <img
                className={classes.completedIcon}
                alt="completed"
                src="/static/images/icons/completed.svg"
              />
            )}
          </div>

          <div className={classes.descriptionWrapper}>
            <Editable
              customClass={classes.description}
              text={editedTask.description}
              isEditable={!isCompleted}
              type="input"
              placeholder="Click to edit the description"
              childRef={inputRef}
              fullWidth
            >
              <Input
                ref={inputRef}
                name="description"
                placeholder="Write a description"
                value={editedTask.description}
                onChange={handleDescriptionEdit}
              />
            </Editable>
          </div>
        </div>
      </div>

      <div className={classes.buttonWrapper}>
        <div className={classes.button}>
          <Button
            text="Complete"
            variant={
              isCompleted || editedTask?.description?.length < 1
                ? "disabled"
                : "primary"
            }
            onPress={handleOnCompleted}
          />
        </div>

        <div className={classes.button}>
          <Button
            text="Reject"
            variant="secondary"
            onPress={handleOnCompleted}
          />
        </div>
      </div>
    </Card>
  );
};

export default TaskItem;
