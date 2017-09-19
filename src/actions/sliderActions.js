import * as ActionTypes from "./actionTypes";

export function sliderMoving(sliderValue) {
  return {
    type: ActionTypes.SLIDER_MOVING,
    sliderValue
  };
}

export function sliderMoved(sliderValue) {
  return { type: ActionTypes.SLIDER_MOVED, sliderValue };
}
