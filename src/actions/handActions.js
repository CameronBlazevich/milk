import * as ActionTypes from "./actionTypes";
import isLoading from "./isLoadingAction";
import authenticatedHandRangeApi from "../api/handRangeApi";
import unauthenticatedHandRangeApi from "../api/mockHandRangeApi";
import { createNotification } from "react-redux-notify";
import { handRangeUpdateSuccessNotification } from "../components/notifications/handRangeUpdateSuccessNotification";

import { getAuthToken } from "../api/getAuthToken";

import Auth from "../services/authService";

let handRangeApi = unauthenticatedHandRangeApi;

export function reset() {
  return { type: ActionTypes.RESET };
}

export function handClicked(clickedHand) {
  return { type: ActionTypes.HAND_CLICKED, clickedHand };
}

export function handsSelected(handsSelected) {
  return { type: ActionTypes.HANDS_SELECTED, handsSelected };
}

export function checkAnswer() {
  return { type: ActionTypes.CHECK_ANSWER };
}

export function loadHandRangesSuccess(handRanges) {
  return { type: ActionTypes.LOAD_HAND_RANGES_SUCCESS, handRanges };
}

export function loadHandRangeSuccess(handRange) {
  return { type: ActionTypes.LOAD_HAND_RANGE_SUCCESS, handRange };
}

export function getHandRange(positionKey) {
  const auth = new Auth();
  const authBearer = getAuthToken(auth);
  if (auth.isAuthenticated()) {
    handRangeApi = authenticatedHandRangeApi;
  } else {
    handRangeApi = unauthenticatedHandRangeApi;
  }
  return function (dispatch) {
    dispatch(isLoading(ActionTypes.IS_LOADING_HAND_RANGES, true));
    return handRangeApi
      .getHandRange(authBearer, positionKey.positionId)
      .then((handRange) => {
        dispatch(loadHandRangeSuccess(handRange));
        dispatch(isLoading(ActionTypes.IS_LOADING_HAND_RANGES, false));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function updateHandRange({ positionKey, hands }) {
  const auth = new Auth();
  const authBearer = getAuthToken(auth);
  if (auth.isAuthenticated()) {
    handRangeApi = authenticatedHandRangeApi;
  } else {
    handRangeApi = unauthenticatedHandRangeApi;
  }
  return function (dispatch) {
    dispatch(isLoading(ActionTypes.IS_UPDATING_HAND_RANGES, true));
    return handRangeApi
      .updateHandRange(positionKey, hands, authBearer)
      .then((handRange) => {
        dispatch({
          type: ActionTypes.SAVE_HAND_RANGE_UPDATE_SUCCESS,
          handRange,
        });
        dispatch(isLoading(ActionTypes.IS_UPDATING_HAND_RANGES, false));
        dispatch(createNotification(handRangeUpdateSuccessNotification));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadHandRanges() {
  const auth = new Auth();
  const authBearer = getAuthToken(auth);
  if (auth.isAuthenticated()) {
    handRangeApi = authenticatedHandRangeApi;
  } else {
    handRangeApi = unauthenticatedHandRangeApi;
  }
  return function (dispatch) {
    dispatch(isLoading(ActionTypes.IS_LOADING_HAND_RANGES, true));
    return handRangeApi
      .getHandRanges(authBearer)
      .then((ranges) => {
        dispatch(loadHandRangesSuccess(ranges));
        dispatch(isLoading(ActionTypes.IS_LOADING_HAND_RANGES, false));
      })
      .catch((error) => {
        throw error;
      });
  };
}
