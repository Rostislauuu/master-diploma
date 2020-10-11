import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import mainReducer  from "./mainReducer";

//will use redux-saga later

const configureStore = () => {
  const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

  return store;
};

export default configureStore;