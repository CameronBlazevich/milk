import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function quizResultsReducer(
  state = initialState.quizResults,
  action
) {
  switch (action.type) {
    case ActionTypes.CHECK_ANSWER:
      const correctHandRange = state.handRanges.find(
        range => range.position === state.selectedPositionId
      );
      const correctHands = correctHandRange ? correctHandRange.hands : [];

      const correctlySelectedHands = getCorrectlySelectedHands(
        state,
        correctHands
      );

      const incorrectlySelectedHands = state.selectedHands.filter(
        hand => !correctlySelectedHands.includes(hand)
      );

      const handsThatShouldHaveBeenSelectedButWerent = correctHands.filter(
        hand => !correctlySelectedHands.includes(hand)
      );

      //return state.quizResults;
      return {
        correctlySelectedHands,
        incorrectlySelectedHands,
        handsThatShouldHaveBeenSelectedButWerent,
        hasCheckedAnswer: true
      };

    case ActionTypes.RESET:
      return initialState.quizResults;

    default:
      return initialState.quizResults;
  }
}

function getCorrectlySelectedHands(state, correctAnswer) {
  const correctlySelectedHands = state.selectedHands.filter(hand =>
    correctAnswer.includes(hand)
  );
  return correctlySelectedHands;
}
