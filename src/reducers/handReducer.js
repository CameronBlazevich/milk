import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import HandRankService from "../services/handRankService";

export default function handReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.HANDS_SELECTED:
      let currentlySelectedHands = [...(state.selectedHands || [])];
      let incomingSelectedHands = [...(action.handsSelected || [])];

      let handsToBeUnselected = currentlySelectedHands.filter((x) =>
        incomingSelectedHands.includes(x)
      );

      let handsToAddToSelection = incomingSelectedHands.filter(
        (x) => !currentlySelectedHands.includes(x)
      );

      let resultSet = [...currentlySelectedHands].filter(
        (x) => !handsToBeUnselected.includes(x)
      );

      return [...handsToAddToSelection, ...resultSet];

    case ActionTypes.RESET:
      return [];

    case ActionTypes.MODE_CHANGED:
      if (action.mode === "QUIZ") {
        return [];
      }
      return getHandsThatShouldBeSelected(state, state.selectedPositionKey);

    case ActionTypes.SAVE_HAND_RANGE_UPDATE_SUCCESS:
      return action.handRange.hands;

    case ActionTypes.LOAD_HAND_RANGE_SUCCESS:
      const handsForPosition = action.handRange.hands;
      return handsForPosition;

    case ActionTypes.SLIDER_MOVED:
      let hands = HandRankService.getHandsByPercent(action.sliderValue);
      return hands;

    default:
      return state.selectedHands;
  }
}

function getHandsThatShouldBeSelected(state, incomingPositionKey) {
  let handRange = state.handRanges.find(
    (range) => range.position === incomingPositionKey
  );
  return handRange ? handRange.hands : [];
}

function getHandsFromHydratedScenarioThatShouldBeSelected(
  state,
  incomingPositionKey
) {
  const scenario = state.scenarios.find(
    (scenario) => scenario.id === incomingPositionKey.scenarioId
  );

  if (!scenario) {
    console.log(
      `Couldn't find scenario for position key ${incomingPositionKey}`
    );
    return [];
  }

  const situation = scenario.situations.find(
    (s) => s.id === incomingPositionKey.situationId
  );

  if (!situation) {
    console.log(
      `Couldn't find situation for position key ${incomingPositionKey}`
    );
    return [];
  }

  const position = situation.positions.find(
    (p) => p.key === incomingPositionKey.positionKey
  );
  if (!position) {
    console.log(
      `Couldn't find position for position key ${incomingPositionKey}`
    );
    return {};
  }

  let handRange = position.handRange;

  if (!handRange) {
    console.log(
      `Couldn't find hand range for position key ${incomingPositionKey}`
    );
    return [];
  }
  var mappedForNow = handRange.hands;
  return mappedForNow;
}
