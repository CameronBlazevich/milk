import * as ActionTypes from "./actionTypes";
import authenticatedHandRangeApi from "../api/handRangeApi";
import unauthenticatedHandRangeApi from "../api/mockHandRangeApi";

import Auth from "../services/authService";

let handRangeApi = unauthenticatedHandRangeApi;

export function reset() {
  return { type: ActionTypes.RESET };
}
export function handClicked(clickedHand) {
  return { type: ActionTypes.HAND_CLICKED, clickedHand };
}

export function checkAnswer() {
  return { type: ActionTypes.CHECK_ANSWER };
}

export function loadHandRangesSuccess(handRanges) {
  return { type: ActionTypes.LOAD_HAND_RANGES_SUCCESS, handRanges };
}

export function loadHandRanges() {
  //dispatch(isLoadingHandRanges(true));
  const auth = new Auth();
  const authBearer = getAuthToken(auth);
  if (auth.isAuthenticated()) {
    handRangeApi = authenticatedHandRangeApi;
  } else {
    handRangeApi = unauthenticatedHandRangeApi;
  }
  return function(dispatch) {
    return handRangeApi
      .getHandRanges(authBearer)
      .then(ranges => {
        dispatch(loadHandRangesSuccess(ranges));
      })
      .catch(error => {
        throw error;
      });
  };
}

function getAuthToken(auth) {
  const access_token = auth.getAccessToken();
  const authBearer = "Bearer " + access_token;

  return authBearer;
}

export function updateHandRange(handRange) {
  const auth = new Auth();
  const authBearer = getAuthToken(auth);
  return function(dispatch) {
    return handRangeApi
      .updateHandRange(handRange, authBearer)
      .then(savedHandRange => {
        dispatch({
          type: ActionTypes.SAVE_HAND_RANGE_SUCCESS,
          handRange: savedHandRange
        });
      })
      .catch(error => {
        throw error;
      });
  };
}
