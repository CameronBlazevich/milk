import React from "react";

function getClassForHand(selectedHands, hand) {
  let className = "hand ";

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

  let className = getClassForHand(props.selectedHands, handText);

  return (
    <div id={handText} className={className}>
      {handText}
    </div>
  );
}

export default Hand;
