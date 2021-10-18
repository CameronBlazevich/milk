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
        { situation: action.situation },
        { hand: action.hand },
        { hasAnswered: false },
        { guess: "" }
      );

    case ActionTypes.LOAD_USER_SCENARIOS_SUCCESS:
      return Object.assign({}, state, { userScenarios: action.scenarios });

    case ActionTypes.QUIZ_ANSWERED:
      return Object.assign({}, state, {
        hasAnswered: true,
        guess: action.actionChosen,
      });

    case ActionTypes.RESET:
      return initialState.quiz;

    case ActionTypes.QUIZ_HEROS_POSITION_UPDATED:
      let currentlySelectedPositionsForHero = [...(state.herosPositionsToQuiz || [])];
      const isAlreadyInArray = currentlySelectedPositionsForHero.includes(action.position);

      if (isAlreadyInArray) {
        currentlySelectedPositionsForHero = currentlySelectedPositionsForHero.filter(x => x !== action.position);
      } else {
        currentlySelectedPositionsForHero.push(action.position);
      }
      return Object.assign({}, state, {herosPositionsToQuiz: currentlySelectedPositionsForHero})

    default:
      return initialState.quiz;
  }
}
