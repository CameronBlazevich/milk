import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import { addOrRemoveHandFromSelectedHands } from "../utilities/handClicked";

export default function handReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.HAND_CLICKED:
      let selectedHands = addOrRemoveHandFromSelectedHands(
        action.clickedHand,
        state.selectedHands
      );
      return selectedHands;

    case ActionTypes.MODE_CHANGED:
      if (action.isQuizMode) {
        return [];
      }
      return getHandsThatShouldBeSelected(state, state.selectedPositionId);

    case ActionTypes.POSITION_SELECTED:
      if (state.isQuizMode) {
        return [];
      }
      return getHandsThatShouldBeSelected(state, action.positionId);

    default:
      return state.selectedHands;
  }
}

function getHandsThatShouldBeSelected(state, incomingPositionId) {
  return state.handRanges.find(range => range.position === incomingPositionId)
    .hands;
}
