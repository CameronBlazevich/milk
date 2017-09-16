import * as ActionTypes from "./actionTypes";
// import handRangeApi from "../api/handRangeApi";
import handRangeApi from "../api/mockHandRangeApi";

export function handClicked(clickedHand) {
  return { type: ActionTypes.HAND_CLICKED, clickedHand };
}

export function loadHandRangesSuccess(handRanges) {
  return { type: ActionTypes.LOAD_HAND_RANGES_SUCCESS, handRanges };
}

export function loadHandRanges() {
  //dispatch(isLoadingHandRanges(true));

  return function(dispatch) {
    return handRangeApi
      .getHandRanges()
      .then(ranges => {
        dispatch(loadHandRangesSuccess(ranges));
      })
      .catch(error => {
        throw error;
      });
  };
}
