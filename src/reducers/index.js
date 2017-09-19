import selectedHands from "./handReducer";
import positions from "./positionReducer";
import selectedPositionId from "./selectedPositionReducer";
import handRanges from "./handRangeReducer";
import isQuizMode from "./modeReducer";
import quizResults from "./quizResultsReducer";
import sliderValue from "./sliderReducer";
import initialState from "./initialState";

export default function rootReducer(state = initialState, action) {
  return {
    quizResults: quizResults(state, action),
    selectedHands: selectedHands(state, action),
    handRanges: handRanges(state.handRanges, action),
    positions: positions(state.positions, action),
    selectedPositionId: selectedPositionId(state.selectedPositionId, action),
    isQuizMode: isQuizMode(state.isQuizMode, action),
    sliderValue: sliderValue(state.sliderValue, action)
  };
}
