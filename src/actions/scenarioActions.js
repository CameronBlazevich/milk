import * as ActionTypes from "./actionTypes";
//import positionsApi from "../api/mockPositionApi";
import scenarioApi from "../api/scenarioApi";

export function scenarioSelected(scenarioId) {
  return { type: ActionTypes.SCENARIO_SELECTED, scenarioId };
}

export function loadScenariosSuccess(scenarios) {
  return { type: ActionTypes.LOAD_SCENARIOS_SUCCESS, scenarios };
}

export function loadHydratedScenarioSuccess(hydratedScenario) {
  return { type: ActionTypes.LOAD_HYDRATED_SCENARIO_SUCCESS, hydratedScenario };
}

export function getHydratedScenario(scenarioId) {
  console.log("getting hydrated scenario with id: " + scenarioId);
  return function (dispatch) {
    scenarioApi.getHydratedScenario(scenarioId).then((hydratedScenario) => {
      dispatch(loadHydratedScenarioSuccess(hydratedScenario));
    });
  };
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
