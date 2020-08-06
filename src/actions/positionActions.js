import * as ActionTypes from "./actionTypes";
//import positionsApi from "../api/mockPositionApi";
import positionsApi from "../api/positionApi";

export function setPositionToNull() {
  return { type: ActionTypes.POSITION_SET_TO_NULL };
}

export function positionSelectedForEdit(positionCompositeKey) {
  return { type: ActionTypes.POSITION_SELECTED_FOR_EDIT, positionCompositeKey };
}

export function loadPositionsSuccess(positions) {
  return { type: ActionTypes.LOAD_POSITIONS_SUCCESS, positions };
}

export function loadPositions() {
  //dispatch(isLoadingPositions(true));

  return function (dispatch) {
    return positionsApi
      .getAllPositions()
      .then((positions) => {
        dispatch(loadPositionsSuccess(positions));
      })
      .catch((error) => {
        throw error;
      });
  };
}
