import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import configureStore from "./store/configureStore";
import { loadHandRanges } from "./actions/handActions";
import { loadScenarios, loadUserScenarios } from "./actions/scenarioActions";
import App from "./App";
import Drill from "./containers/drill";
import Callback from "./Callback";
import Auth from "./services/authService";
import history from "./history";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "rc-slider/assets/index.css";
import "react-redux-notify/dist/ReactReduxNotify.min.css";
import "./index.css";

//import initialState from "./reducers/initialState";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};
// const store = configureStore(initialState);
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/home"
          render={(props) => {
            // store.dispatch(loadHandRanges());
            store.dispatch(loadScenarios());
            return <App {...props} />;
          }}
        />
        <Route
          exact
          path="/scenarios"
          render={(props) => {
            store.dispatch(loadHandRanges());
            store.dispatch(loadScenarios());
            return <App {...props} />;
          }}
        />
        <Route
          exact
          path="/drill"
          render={(props) => {
            store.dispatch(loadUserScenarios());
            return <Drill {...props}></Drill>;
          }}
        ></Route>
        <Route
          path="/callback"
          render={(props) => {
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
