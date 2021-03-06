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
      selectedHands={props.selectedHands}
      quizResults={props.quizResults}
      selectableRef={props.selectableRef}
    />
  ));
  return <div className="row">{row}</div>;
}

export default HandGridRow;
