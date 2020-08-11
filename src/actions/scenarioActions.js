import * as ActionTypes from "./actionTypes";
//import positionsApi from "../api/mockPositionApi";
import scenarioApi from "../api/scenarioApi";
import Auth from "../services/authService";
import { getAuthToken } from "../api/getAuthToken";

export function scenarioSelected(scenarioId) {
  return { type: ActionTypes.SCENARIO_SELECTED, scenarioId };
}

export function loadScenariosSuccess(scenarios) {
  return { type: ActionTypes.LOAD_SCENARIOS_SUCCESS, scenarios };
}

export function loadUserScenariosSuccess(scenarios) {
  return { type: ActionTypes.LOAD_USER_SCENARIOS_SUCCESS, scenarios };
}

export function loadScenarios() {
  //dispatch(isLoadingPositions(true));

  return function (dispatch) {
    return scenarioApi
      .getAllScenarios()
      .then((scenarios) => {
        dispatch(loadScenariosSuccess(scenarios));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadUserScenarios() {
  const auth = new Auth();
  const authBearer = getAuthToken(auth);
  if (!auth.isAuthenticated()) {
    debugger;
  }
  return function (dispatch) {
    return scenarioApi
      .getUserScenarios(authBearer)
      .then((scenarios) => {
        dispatch(loadUserScenariosSuccess(scenarios));
      })
      .catch((error) => {
        throw error;
      });
  };
}
