import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function handRangeReducer(
  state = initialState.handRanges,
  action
) {
  switch (action.type) {
    case ActionTypes.LOAD_HAND_RANGES_SUCCESS:
      return action.handRanges;

    default:
      return state;
  }
}
