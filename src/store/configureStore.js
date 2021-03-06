import { createStore, applyMiddleware } from "redux";
//import { reduxImmutableStateInvariant } from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
//import initialState from "../reducers/initialState";

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    // applyMiddleware(thunk, reduxImmutableStateInvariant())
    applyMiddleware(thunk)
  );
}
