import React from "react";
import { createSelectable } from "react-selectable-fast";

function getClassForHand(quiz, selectedHands, hand) {
  let className = "hand ";

  if (quiz.hand === hand) {
    if (quiz.position.handRange.hands.includes(quiz.hand)) {
      if (quiz.guess === "fold") {
        return className + "incorrect";
      }

      if (quiz.guess === "raise") {
        return className + "correct";
      }
    }

    if (quiz.guess === "fold") {
      return className + "correct";
    }

    if (quiz.guess === "raise") {
      return className + "incorrect";
    }

    return className + "quized-hand";
  }
  // if (quizResults.incorrectlySelectedHands.includes(hand)) {
  //   return className + "incorrectlySelected";
  // }

  // if (quizResults.handsThatShouldHaveBeenSelectedButWerent.includes(hand)) {
  //   return className + "shouldHaveBeenSelected";
  // }

  if (selectedHands && selectedHands.includes(hand)) {
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

  let className = getClassForHand(props.quiz, props.selectedHands, handText);

  return (
    <div id={handText} className={className} ref={props.selectableRef}>
      {handText}
    </div>
  );
}

export default createSelectable(Hand);
