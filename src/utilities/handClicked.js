export const addOrRemoveHandFromSelectedHands = (
  hand,
  currentlySelectedHands
) => {
  let selectedHands = [];
  if (currentlySelectedHands.includes(hand)) {
    selectedHands = removeHandFromSelectedHands(hand, currentlySelectedHands);
  } else {
    selectedHands = addHandToSelectedHands(hand, currentlySelectedHands);
  }
  return selectedHands;
};

function removeHandFromSelectedHands(handToBeRemoved, currentlySelectedHands) {
  return currentlySelectedHands.filter(hand => hand !== handToBeRemoved);
}

function addHandToSelectedHands(handToBeAdded, currentlySelectedHands) {
  return currentlySelectedHands.concat([handToBeAdded]);
}
