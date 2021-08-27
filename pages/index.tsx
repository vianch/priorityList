import { ReactElement } from "react";

// Components
import { MetaHead } from "@/components/index";
import Avatar from "@/components/Avatar/Avatar";
import TaskList from "@/components/TaskList/TaskList";

const HomePage = (): ReactElement => {
  const tasks = [
    {
      title: "Task 1",
      description: "short 1",
      completed: false,
    },
    {
      title: "Task 2",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      completed: true,
    },
    {
      title: "Task 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      completed: false,
    },
    {
      title: "Task 1",
      description: "terminar tarea 2",
      completed: false,
    },
  ] as Task[];
  return (
    <>
      <MetaHead description="Home page" url="/" />
      <Avatar />
      <TaskList tasks={tasks} />
    </>
  );
};

export default HomePage;
