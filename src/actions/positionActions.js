import * as ActionTypes from "./actionTypes";

export function setPositionToNull() {
  return { type: ActionTypes.POSITION_SET_TO_NULL };
}

export function positionSelectedForEdit(positionCompositeKey) {
  return { type: ActionTypes.POSITION_SELECTED_FOR_EDIT, positionCompositeKey };
}
