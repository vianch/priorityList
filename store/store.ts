import { applyMiddleware, createStore, Store } from "redux";
import { logger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

// Store
import rootReducers, { RootReducer } from "store/rootReducers";

// Constants
import { Environments } from "@/lib/common/constants";

const localEnvironmentName =
  process.env.NEXT_PUBLIC_APP_ENV ||
  process.env.APP_ENV ||
  Environments.production;

const bindMiddleware = (): ReturnType<typeof applyMiddleware> => {
  if (localEnvironmentName === "local") {
    return composeWithDevTools(applyMiddleware(logger, thunkMiddleware));
  }

  return applyMiddleware(thunkMiddleware);
};

export const makeStore = (initialState = {}): Store<RootReducer> => {
  return createStore(rootReducers, initialState, bindMiddleware());
};

export const wrapper = createWrapper(makeStore, {
  debug: false,
});
