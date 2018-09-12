import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function scenarioReducer(
  state = initialState.scenarios,
  action
) {
  switch (action.type) {
    case ActionTypes.LOAD_SCENARIOS_SUCCESS:
      return action.scenarios;

    default:
      return state;
  }
}
