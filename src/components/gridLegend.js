import React from "react";

function GridLegend(props) {
  return (
      <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-1" style={{backgroundColor: "#cc33ff"}}>Raise</div>
          <div className="col-md-1" style={{backgroundColor: "#00cc00"}}>Call</div>
          <div className="col-md-1" style={{backgroundColor: "#ffff66"}}>Fold</div>
      </div>
  );
}

export default GridLegend;
