import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import * as Actions from "./actions/actionTypes";
import { addOrRemoveHandFromSelectedHands } from "./utilities/handClicked";

const defaultState = {
  positions: [],
  selectedPositionId: 0,
  selectedHands: []
};

function store(state = defaultState, action) {
  switch (action.type) {
    case Actions.INITIAL_MOUNT:
      return AssignNewState({ positions: action.positions });

    case Actions.POSITION_SELECTED:
      return AssignNewState({ selectedPositionId: action.positionId });

    case Actions.HAND_CLICKED:
      let selectedHands = addOrRemoveHandFromSelectedHands(
        action.clickedHand,
        state.selectedHands
      );
      return AssignNewState({ selectedHands });

    case Actions.SAVE_HAND_RANGE:
      console.log("saving range: " + state.selectedHands);
      SaveHandRangeAsync();
    default:
      return state;
  }

  function AssignNewState(modifiedAspect) {
    return Object.assign({}, state, modifiedAspect);
  }

  //need to figure out redux and thunks
  function SaveHandRangeAsync() {
    fetch("http://localhost:50338/api/handRanges/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Hands: state.selectedHands,
        Position: state.selectedPositionId
      })
    });
  }
}

export default createStore(store);
