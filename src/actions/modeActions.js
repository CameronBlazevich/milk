import * as ActionTypes from "./actionTypes";

export function modeChanged(state, isQuizMode) {
  return {
    type: ActionTypes.MODE_CHANGED,
    isQuizMode
  };
}
