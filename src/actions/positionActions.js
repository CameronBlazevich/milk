import * as ActionTypes from "./actionTypes";
import positionsApi from "../api/mockPositionApi";
//import positionsApi from "../api/positionApi";

export function positionSelected(positionId) {
  return { type: ActionTypes.POSITION_SELECTED, positionId };
}

export function loadPositionsSuccess(positions) {
  return { type: ActionTypes.LOAD_POSITIONS_SUCCESS, positions };
}

export function loadPositions() {
  //dispatch(isLoadingPositions(true));

  return function(dispatch) {
    return positionsApi
      .getAllPositions()
      .then(positions => {
        dispatch(loadPositionsSuccess(positions));
      })
      .catch(error => {
        throw error;
      });
  };
}
