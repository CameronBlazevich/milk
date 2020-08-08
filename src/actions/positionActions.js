import * as ActionTypes from "./actionTypes";
import unAuthenticatedPositionsApi from "../api/mockPositionApi";
import authenticatedPositionsApi from "../api/positionApi";
import isLoading from "./isLoadingAction";
import Auth from "../services/authService";
import { getAuthToken } from "../api/getAuthToken";

let positionsApi = unAuthenticatedPositionsApi;

export function setPositionToNull() {
  return { type: ActionTypes.POSITION_SET_TO_NULL };
}

export function positionSelectedForEdit(positionCompositeKey) {
  return { type: ActionTypes.POSITION_SELECTED_FOR_EDIT, positionCompositeKey };
}

export function getPosition(positionKey) {
  const auth = new Auth();
  const authBearer = getAuthToken(auth);
  if (auth.isAuthenticated()) {
    positionsApi = authenticatedPositionsApi;
  } else {
    positionsApi = unAuthenticatedPositionsApi;
  }
  return function (dispatch) {
    dispatch(isLoading(ActionTypes.IS_LOADING_HAND_RANGES, true));
    return positionsApi
      .getPosition(authBearer, positionKey)
      .then((position) => {
        dispatch(loadPositionSuccess(position));
        dispatch(isLoading(ActionTypes.IS_LOADING_HAND_RANGES, false));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadPositionSuccess(position) {
  return { type: ActionTypes.LOAD_POSITION_SUCCESS, position };
}
