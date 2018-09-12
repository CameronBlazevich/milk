import React from "react";
import { Link } from "react-router-dom";
import ScenarioTile from "./scenarioTile";

function ScenarioGrid(props) {
  const scenarios = props.scenarios.map(scenario => (
    <Link to="/play" key={scenario.id}>
      <ScenarioTile
        displayName={scenario.displayName}
        id={scenario.id}
        key={scenario.id}
        onClick={props.handleScenarioClick}
      />
    </Link>
  ));

  return (
    <div className="container scenario-grid-container">
      <div className="row">{scenarios}</div>
    </div>
  );
}

export default ScenarioGrid;
