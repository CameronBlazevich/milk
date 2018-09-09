import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import HandRankService from "../services/handRankService";

export default function handReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.HANDS_SELECTED:
      let currentlySelectedHands = [...state.selectedHands];
      let incomingSelectedHands = [...action.handsSelected];

      let handsToBeUnselected = currentlySelectedHands.filter(x =>
        incomingSelectedHands.includes(x)
      );

      let handsToAddToSelection = incomingSelectedHands.filter(
        x => !currentlySelectedHands.includes(x)
      );

      let resultSet = [...currentlySelectedHands].filter(
        x => !handsToBeUnselected.includes(x)
      );

      return [...handsToAddToSelection, ...resultSet];

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
