import * as ActionTypes from "./actionTypes";
//import positionsApi from "../api/mockPositionApi";
import scenarioApi from "../api/scenarioApi";

export function scenarioSelected(scenarioId) {
  return { type: ActionTypes.SCENARIO_SELECTED, scenarioId };
}

export function loadScenariosSuccess(scenarios) {
  return { type: ActionTypes.LOAD_SCENARIOS_SUCCESS, scenarios };
}

export function loadScenarios() {
  //dispatch(isLoadingPositions(true));

  return function(dispatch) {
    return scenarioApi
      .getAllScenarios()
      .then(scenarios => {
        dispatch(loadScenariosSuccess(scenarios));
      })
      .catch(error => {
        throw error;
      });
  };
}
