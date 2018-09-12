import * as ActionTypes from "./actionTypes";

export function modeChanged(state, mode) {
  return {
    type: ActionTypes.MODE_CHANGED,
    mode
  };
}
