import { ReactElement } from "react";

import { Error } from "@/components/core/";

function ServerError(): ReactElement {
  return <Error statusCode={500} />;
}

export default ServerError;
