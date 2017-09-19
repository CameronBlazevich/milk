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
      if (
        handRanges.find(range => range.position === action.handRange.position)
      ) {
        const existingHandRangeIndex = handRanges.findIndex(
          a => a.position === action.handRange.position
        );
        handRanges.splice(existingHandRangeIndex, 1, action.handRange);
      } else {
        handRanges.push(action.handRange);
      }
      return handRanges;

    default:
      return state;
  }
}
