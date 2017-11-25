import React from "react";
import { SelectableGroup } from "react-selectable-fast";
import HandGridRow from "./handGridRow";
import { CardArray } from "../common/cardArray";

function CardGrid(props) {
  return (
    <SelectableGroup
      ref={selectableGroupReference => {
        props.setupRef(selectableGroupReference);
      }}
      tolerance={1}
      className="main"
      clickClassName="tick"
      enableDeselect
      allowClickWithoutSelected={true}
      //duringSelection={() => console.log("selecting...")}
      onSelectionFinish={selected => props.onSelectionFinish(selected)}
      // ignoreList={['.not-selectable', '.item:nth-child(10)', '.item:nth-child(27)']}
    >
      {CardArray.map((card, index) => (
        <HandGridRow
          key={index}
          row={index}
          rowCard={card}
          handClicked={props.handClicked}
          selectedHands={props.selectedHands}
          quizResults={props.quizResults}
        />
      ))}
    </SelectableGroup>
  );
}

export default CardGrid;
