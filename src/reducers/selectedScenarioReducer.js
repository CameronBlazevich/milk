import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function selectedScenarioReducer(
  state = initialState.selectedScenarioId,
  action
) {
  switch (action.type) {
    case ActionTypes.SCENARIO_SELECTED:
      return action.scenarioId;

    default:
      return state;
  }
}
