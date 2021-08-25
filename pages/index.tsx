import { ReactElement } from "react";

// Components
import { MetaHead } from "@/components/index";

const HomePage = (): ReactElement => {
  return (
    <>
      <MetaHead description="Home page" url="/" />
      <h1>WELCOME DOC!!</h1>
    </>
  );
};

export default HomePage;
