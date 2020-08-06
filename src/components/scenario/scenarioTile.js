import React from "react";

function ScenarioTile(props) {
  const { selected, id, onClick, displayName } = props;
  return (
    <div
      className={"scenario-tile " + (selected ? "selected" : "")}
      id={id}
      onClick={() => onClick(id)}
    >
      {displayName}
    </div>
  );
}

export default ScenarioTile;
