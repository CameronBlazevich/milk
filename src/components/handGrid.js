import React from "react";
import HandGridRow from "./handGridRow";
import { CardArray } from "../common/cardArray";

function CardGrid(props) {
  return (
    <div>
      {CardArray.map((card, index) => (
        <HandGridRow
          key={index}
          row={index}
          rowCard={card}
          selectedHands={props.selectedHands}
          quizResults={props.quizResults}
        />
      ))}
    </div>
  );
}

export default CardGrid;
