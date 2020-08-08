import React from "react";
import { Col, Row } from "reactstrap";
import PokerSeat from "./pokerSeat";

function PokerTable(props) {
  return (
    <div className="poker-table">
      <Row className="poker-table-row poker-table-row-end">
        <Col className="seat-container" sm="4">
          <PokerSeat></PokerSeat>
          <div className={"dealer-button"}></div>
        </Col>
      </Row>
      <Row className="poker-table-row poker-table-row-middle">
        <Col sm="12" className="seat-container">
          <Col sm="4">
            <PokerSeat></PokerSeat>
            <div className={"dealer-button pull-right"}></div>
          </Col>
          <Col sm="4"></Col>
          <Col sm="4">
            <PokerSeat></PokerSeat>
            <div className={"dealer-button pull-left"}></div>
          </Col>
        </Col>
      </Row>
      <Row className="poker-table-row poker-table-row-middle">
        <Col sm="12" className="seat-container">
          <Col sm="4">
            <div className={"dealer-button pull-right"}></div>
            <PokerSeat></PokerSeat>
          </Col>
          <Col sm="4"></Col>
          <Col sm="4">
            <div className={"dealer-button pull-left"}></div>
            <PokerSeat></PokerSeat>
          </Col>
        </Col>
      </Row>
      <Row className="poker-table-row poker-table-row-end">
        <Col className="seat-container" sm="4">
          <div className={"dealer-button"}>
            <strong>D</strong>
          </div>
          <PokerSeat></PokerSeat>
        </Col>
      </Row>
    </div>
  );
}

export default PokerTable;
