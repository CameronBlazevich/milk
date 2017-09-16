import React from "react";
import HandGridRow from "./handGridRow";
import { CardArray } from "../common/cardArray";

function CardGrid(props) {
  return (
    <div className="">
      {CardArray.map((card, index) => (
        <HandGridRow
          key={index}
          row={index}
          rowCard={card}
          handClicked={props.handClicked}
          selectedHands={props.selectedHands}
        />
      ))}
    </div>
  );
}

export default CardGrid;
