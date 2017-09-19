import React from "react";

function getClassForHand(quizResults, selectedHands, hand) {
  let className = "hand ";
  if (quizResults.correctlySelectedHands.includes(hand)) {
    return className + "correctlySelected";
  }

  if (quizResults.incorrectlySelectedHands.includes(hand)) {
    return className + "incorrectlySelected";
  }

  if (quizResults.handsThatShouldHaveBeenSelectedButWerent.includes(hand)) {
    return className + "shouldHaveBeenSelected";
  }

  if (selectedHands.includes(hand)) {
    return className + "selected";
  }

  return className;
}

function Hand(props) {
  let handText = "";
  if (props.row < props.column) {
    handText = `${props.rowCard + props.columnCard}s`;
  } else {
    handText = `${props.columnCard + props.rowCard}o`;
  }

  let className = getClassForHand(
    props.quizResults,
    props.selectedHands,
    handText
  );

  return (
    <div
      id={handText}
      onClick={() => props.handClicked(handText)}
      className={className}
    >
      {handText}
    </div>
  );
}

export default Hand;
