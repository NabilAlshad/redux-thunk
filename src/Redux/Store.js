import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducers from "./Reducers/index";

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
