import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import HandRankService from "../services/handRankService";
import { addOrRemoveHandFromSelectedHands } from "../utilities/handClicked";

export default function handReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.HAND_CLICKED:
      let selectedHands = addOrRemoveHandFromSelectedHands(
        action.clickedHand,
        state.selectedHands
      );
      return selectedHands;

    case ActionTypes.HANDS_SELECTED:
      return [...state.selectedHands, ...action.handsSelected];

    case ActionTypes.RESET:
      return [];

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

    case ActionTypes.SLIDER_MOVED:
      let hands = HandRankService.getHandsByPercent(action.sliderValue);
      return hands;

    default:
      return state.selectedHands;
  }
}

function getHandsThatShouldBeSelected(state, incomingPositionId) {
  let handRange = state.handRanges.find(
    range => range.position === incomingPositionId
  );
  return handRange ? handRange.hands : [];
}
