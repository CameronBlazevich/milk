import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function positionReducer(state = initialState.position, action) {
  switch (action.type) {
    case ActionTypes.LOAD_POSITION_SUCCESS:
      return action.position;

    default:
      return state;
  }
}
