import React from "react";
import {Row, Col} from 'reactstrap';

function GridLegend(props) {
  return (
      <Row className="row grid-legend">
          <Col sm={{ size: 1}} className="grid-legend-entry" style={{backgroundColor: "#cc33ff"}}>Raise</Col>
          <Col sm={{ size: 1}} className="grid-legend-entry" style={{backgroundColor: "#00cc00"}}>Call</Col>
          <Col sm={{ size: 1}} className="grid-legend-entry" style={{backgroundColor: "#ffff66"}}>Fold</Col>
      </Row>
  );
}

export default GridLegend;
