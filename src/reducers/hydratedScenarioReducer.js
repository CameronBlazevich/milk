import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function hydratedScenarioReducer(
  state = initialState.hydratedScenario,
  action
) {
  switch (action.type) {
    case ActionTypes.LOAD_HYDRATED_SCENARIO_SUCCESS:
      console.log(
        "in hydrated scenario reducer with hydrated scenario: " +
          action.hydratedScenario
      );
      return action.hydratedScenario;

    default:
      return state;
  }
}
