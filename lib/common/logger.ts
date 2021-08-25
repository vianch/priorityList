import noop from "lodash/noop";
import { Environments } from "@/lib/common/constants";

const defaultLogger = {
  debug: noop,
  error: noop,
  info: noop,
  logException: noop,
  warn: noop,
};

export const isProduction =
  process.env.NEXT_PUBLIC_APP_ENV === Environments.production;
export const Logger = isProduction ? defaultLogger : console;
