import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import configureStore from "./store/configureStore";
import { loadPositions } from "./actions/positionActions";
import { loadHandRanges } from "./actions/handActions";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.min.css";
import "./index.css";
import "rc-slider/assets/index.css";
import App from "./App";
import Callback from "./Callback";
import Auth from "./services/authService";
import history from "./history";
import registerServiceWorker from "./registerServiceWorker";
//import initialState from "./reducers/initialState";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};
// const store = configureStore(initialState);
const store = configureStore();
store.dispatch(loadPositions());
store.dispatch(loadHandRanges());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" component={App} />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
