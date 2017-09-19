import React from "react";
import Hand from "./hand";
import { CardArray } from "../common/cardArray";

function HandGridRow(props) {
  const row = CardArray.map((card, index) => (
    <Hand
      key={index}
      column={index}
      row={props.row}
      columnCard={card}
      rowCard={props.rowCard}
      handClicked={props.handClicked}
      selectedHands={props.selectedHands}
      quizResults={props.quizResults}
    />
  ));
  return <div className="row">{row}</div>;
}

export default HandGridRow;
