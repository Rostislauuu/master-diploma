import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import mainReducer  from "./mainReducer";
import rootSaga from "./rootSaga";

//will use redux-saga later

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;