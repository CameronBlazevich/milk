import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import { addOrRemoveHandFromSelectedHands } from "../utilities/handClicked";

export default function handReducer(
  state = initialState.selectedHands,
  action
) {
  switch (action.type) {
    case ActionTypes.HAND_CLICKED:
      let selectedHands = addOrRemoveHandFromSelectedHands(
        action.clickedHand,
        state
      );
      return selectedHands;

    case ActionTypes.MODE_CHANGED:
      //console.log(action);
      //return state;
      return action.handsThatShouldBeSelected;

    default:
      return state;
  }
}
