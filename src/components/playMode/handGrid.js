import React from "react";
import HandGridRow from "./handGridRow";
import { CardArray } from "../../common/cardArray";

function CardGrid(props) {
  return (
    <div className={"card-grid"}>
      {CardArray.map((card, index) => (
        <HandGridRow
          key={index}
          row={index}
          rowCard={card}
          selectedHands={props.selectedHands}
          highlighted={props.quizzedHand}
        />
      ))}
    </div>
  );
}

export default CardGrid;
