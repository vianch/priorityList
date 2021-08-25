export const WEB_TITLE = "The priority list";

export enum Orientation {
  top = "top",
  left = "left",
  right = "right",
  inBetween = "in-between",
}

export enum Environments {
  local = "local",
  development = "development",
  production = "production",
}

export enum HttpCodes {
  success = 200,
  badRequestError = 400,
  unauthorizedError = 401,
  forbiddenError = 403,
  notFoundError = 404,
  serverError = 500,
}

export enum KeyboardKeys {
  escape = "escape",
}

export enum Events {
  mousedown = "mousedown",
  resize = "resize",
  scroll = "scroll",
}

export enum sendStates {
  sending = "sending",
  error = "error",
  success = "success",
}

export enum ErrorMessages {
  notFoundError = "Error 404: Data could not be loaded!",
  notSet = "Error: Data could not be set!",
}
