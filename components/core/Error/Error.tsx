import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";

// Constants
import { HttpCodes } from "@/lib/common/constants";
import { Logger } from "@/lib/common";

// Styles
import { errorStyles } from "./error.styles";

interface ErrorStructureProps {
  statusCode: number;
}

const Error = ({ statusCode }: ErrorStructureProps): ReactElement => {
  const classes = errorStyles();
  const [urlPath, setUrlPath] = useState("");

  const imageSource =
    statusCode === HttpCodes.notFoundError
      ? "/static/images/404.png"
      : "/static/images/sad404.svg";

  useEffect(() => {
    if (window) {
      setUrlPath(window?.location?.origin || process.env.NEXT_PUBLIC_APP_URL);
    } else {
      Logger.error("window doesnt exist");
    }
  }, []);

  if (statusCode) {
    return (
      <div>
        <div>
          <Image
            src={imageSource}
            className={classes.image}
            alt="error"
            width={350}
            height={250}
          />

          <h2 className={classes.title}>{`${statusCode} Error`}</h2>

          <p className={classes.description}>
            We couldn&apos;t find the page you&apos;re looking for. Try
            searching or go back to the
          </p>

          <a href={urlPath || ""}>
            <button>Home</button>
          </a>
        </div>
      </div>
    );
  }

  return null;
};

export default Error;
