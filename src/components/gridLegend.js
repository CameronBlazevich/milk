import React from "react";

function GridLegend(props) {
  return (
    <div className="col-md-2 legend">
      <div className="row legend-row">
        <div className="hand correctlySelected pull-left" />
        <div className="legend-label">{"Correctly Selected"}</div>
      </div>
      <div className="row legend-row">
        <div className="hand incorrectlySelected pull-left" />
        <div className="legend-label">{"Incorrectly Selected"}</div>
      </div>
      <div className="row legend-row">
        <div className="hand shouldHaveBeenSelected pull-left" />
        <div className="legend-label">{"Incorrectly Not Selected"}</div>
      </div>
    </div>
  );
}

export default GridLegend;
