import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for redux devtools

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk, reduxImmutableStateInvariant()))
);

export default store;
