import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { loadPositions } from "./actions/positionActions";
import { loadHandRanges } from "./actions/handActions";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.min.css";
import "./index.css";
import "rc-slider/assets/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//import initialState from "./reducers/initialState";

// const store = configureStore(initialState);
const store = configureStore();
store.dispatch(loadPositions());
store.dispatch(loadHandRanges());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
