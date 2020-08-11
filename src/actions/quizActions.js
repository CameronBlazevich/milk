import * as ActionTypes from "./actionTypes";

export function quizScenarioSelectorChanged(scenarioIds) {
  return { type: ActionTypes.QUIZ_SCENARIO_SELECTOR_CHANGE, scenarioIds };
}

export function quizGenerated(quizKey, { situation, position }) {
  return { type: ActionTypes.QUIZ_GENERATED, quizKey, situation, position };
}