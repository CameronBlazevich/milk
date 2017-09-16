import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function modeReducer(state = initialState.isQuizMode, action) {
  switch (action.type) {
    case ActionTypes.MODE_CHANGED:
      return action.isQuizMode;

    default:
      return state;
  }
}
