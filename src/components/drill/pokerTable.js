import React from "react";
import { Col, Row } from "reactstrap";
import PokerSeat from "./pokerSeat";

function PokerTable(props) {
  return (
    <div className="poker-table">
      <Row className="poker-table-row poker-table-row-end">
        <Col className="seat-container" sm="4">
          <PokerSeat></PokerSeat>
        </Col>
      </Row>
      <Row className="poker-table-row poker-table-row-middle">
        <Col sm="12" className="seat-container">
          <Col sm="4">
            <PokerSeat></PokerSeat>
          </Col>
          <Col sm="4"></Col>
          <Col sm="4">
            <PokerSeat></PokerSeat>
          </Col>
        </Col>
      </Row>
      <Row className="poker-table-row poker-table-row-middle">
        <Col sm="12" className="seat-container">
          <Col sm="4">
            <PokerSeat></PokerSeat>
          </Col>
          <Col sm="4"></Col>
          <Col sm="4">
            <PokerSeat></PokerSeat>
          </Col>
        </Col>
      </Row>
      <Row className="poker-table-row poker-table-row-end">
        <Col className="seat-container" sm="4">
          <PokerSeat></PokerSeat>
        </Col>
      </Row>
    </div>
  );
}

export default PokerTable;
