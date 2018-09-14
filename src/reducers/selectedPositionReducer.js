import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function selectedPositionReducer(
  state = initialState.selectedPositionId,
  action
) {
  switch (action.type) {
    case ActionTypes.POSITION_SELECTED:
      return action.positionId;

    case ActionTypes.POSITION_SET_TO_NULL:
      return null;

    default:
      return state;
  }
}
