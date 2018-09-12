import React from "react";

function ScenarioTile(props) {
  return (
    <div
      className="scenario-tile"
      id={props.id}
      onClick={() => props.onClick(props.id)}
    >
      {props.displayName}
    </div>
  );
}

export default ScenarioTile;
