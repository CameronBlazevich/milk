import { combineReducers } from "redux";
import selectedHands from "./handReducer";
import positions from "./positionReducer";
import selectedPositionId from "./selectedPositionReducer";
import handRanges from "./handRangeReducer";
import isQuizMode from "./modeReducer";

export default function rootReducer(state = {}, action) {
  //debugger;
  return {
    selectedHands: selectedHands(state.selectedHands, action),
    handRanges: handRanges(state.handRanges, action),
    positions: positions(state.positions, action),
    selectedPositionId: selectedPositionId(state.selectedPositionId, action),
    isQuizMode: isQuizMode(state.isQuizMode, action)
  };
}

// const rootReducer = combineReducers({
//   selectedHands,
//   handRanges,
//   positions,
//   selectedPositionId,
//   isQuizMode
// });

// export default rootReducer;
