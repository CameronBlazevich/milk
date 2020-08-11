import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function quizReducer(state = initialState.quiz, action) {
  switch (action.type) {
    case ActionTypes.QUIZ_SCENARIO_SELECTOR_CHANGE:
      return Object.assign({}, state, {
        scenarioIds: action.scenarioIds,
      });

    case ActionTypes.QUIZ_GENERATED:
      return Object.assign(
        {},
        state,
        { quizKey: action.quizKey },
        { position: action.position },
        { situation: action.situation }
      );

    case ActionTypes.LOAD_USER_SCENARIOS_SUCCESS:
      return Object.assign({}, state, { userScenarios: action.scenarios });

    case ActionTypes.CHECK_ANSWER:
      return {
        hasCheckedAnswer: true,
      };

    case ActionTypes.RESET:
      return initialState.quiz;

    default:
      return initialState.quiz;
  }
}
