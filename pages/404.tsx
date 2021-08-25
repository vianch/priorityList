import { ReactElement } from "react";

import { HttpCodes } from "@/lib/common/constants";
import { Error } from "@/components/core/";

interface ErrorProps {
  statusCode?: number;
}

function LandingError({ statusCode }: ErrorProps): ReactElement {
  const showStatusCode = statusCode || HttpCodes.notFoundError;
  return <Error statusCode={showStatusCode} />;
}

export default LandingError;
