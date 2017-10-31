import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
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
//store.dispatch(loadHandRanges());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/home"
          render={props => {
            store.dispatch(loadHandRanges());
            return <App {...props} />;
          }}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route path="/test" component={Callback} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
