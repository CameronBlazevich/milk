import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function handRangeReducer(
  state = initialState.handRanges,
  action
) {
  switch (action.type) {
    case ActionTypes.LOAD_HAND_RANGES_SUCCESS:
      return action.handRanges;

    case ActionTypes.SAVE_HAND_RANGE_SUCCESS:
      let handRanges = [...state];
      const selectedPosition = action.handRange.position;

      if (positionAlreadyHasAssociatedHandRange(handRanges, selectedPosition)) {
        updateHandRangeAtSelectedPosition(
          handRanges,
          selectedPosition,
          action.handRange
        );
      } else {
        handRanges.push(action.handRange);
      }
      return handRanges;

    default:
      return state;
  }
}

function positionAlreadyHasAssociatedHandRange(handRanges, position) {
  return (
    typeof handRanges.find(range => range.position === position) !== "undefined"
  );
}

function updateHandRangeAtSelectedPosition(
  handRanges,
  selectedPosition,
  newHands
) {
  const existingHandRangeIndex = handRanges.findIndex(
    a => a.position === selectedPosition
  );
  handRanges.splice(existingHandRangeIndex, 1, newHands);
}
