import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function isLoadingReducer(
  state = initialState.isLoading,
  action
) {
  switch (action.type) {
    case ActionTypes.IS_LOADING_HAND_RANGES:
      return action.isLoading;

    case ActionTypes.IS_UPDATING_HAND_RANGES:
      return action.isLoading;

    default:
      return state;
  }
}
