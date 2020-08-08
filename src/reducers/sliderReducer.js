import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function sliderReducer(
  state = initialState.sliderValue,
  action
) {
  switch (action.type) {
    case ActionTypes.SLIDER_MOVED:
      return action.sliderValue;

    case ActionTypes.POSITION_SELECTED_FOR_EDIT:
      return 0;

    case ActionTypes.MODE_CHANGED:
      return 0;

    case ActionTypes.RESET:
      return 0;

    default:
      return state;
  }
}
