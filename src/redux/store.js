import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);

const reduxStore = createStore(reducers, composeWithDevTools(enhancers));

export default reduxStore;
