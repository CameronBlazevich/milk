import { createSelector } from "reselect";

const getIsQuizMode = state => state.isQuizMode;
const getSelectedPositionId = state => state.selectedPositionId;
const getHandRanges = state => state.handRanges;
const getHands = state => state.selectedHands;

export const getSelectedHands = createSelector(
  [getIsQuizMode, getSelectedPositionId, getHandRanges, getHands],
  (isQuizMode, selectedPositionId, handRanges, hands) => {
    console.log("In getSelectedHands");

    if (!isQuizMode && handRanges !== undefined) {
      const selectedHands = handRanges.find(
        ranges => ranges.position === selectedPositionId
      ).hands;

      console.log(selectedHands);
      return selectedHands;
    }

    return [];
  }
);
