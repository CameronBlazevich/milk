import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function positionReducer(
  state = initialState.positions,
  action
) {
  switch (action.type) {
    case ActionTypes.LOAD_POSITIONS_SUCCESS:
      return action.positions;

    case ActionTypes.POSITION_SELECTED_FOR_EDIT:
      return Object.assign({}, state, {
        selectedPositionKey: action.positionCompositeKey,
      });

    default:
      return state;
  }
}
