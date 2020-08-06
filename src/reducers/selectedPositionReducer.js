import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function selectedPositionReducer(
  state = initialState.selectedPositionKey,
  action
) {
  switch (action.type) {
    case ActionTypes.POSITION_SET_TO_NULL:
      return null;

    case ActionTypes.POSITION_SELECTED_FOR_EDIT:
      return action.positionCompositeKey;

    default:
      return state;
  }
}
