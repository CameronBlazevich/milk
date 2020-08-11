import React from "react";
import { Col, Row } from "reactstrap";
import PokerSeat from "./pokerSeat";
import SeatContainer from "./seatContainer";

function PokerTable(props) {
  const { heroPosition, openerPosition } = props;

  const btnPlacement = { BTN: 0, CO: 5, HJ: 4, UTG: 3, BB: 2, SB: 1 };

  const seatMap = {
    // BTN Seat: [other positions seats]
    0: { SB: 5, BB: 4, UTG: 3, HJ: 2, CO: 1 },
    1: { SB: 0, BB: 5, UTG: 4, HJ: 3, CO: 2 },
    2: { SB: 1, BB: 0, UTG: 5, HJ: 4, CO: 3 },
    3: { SB: 2, BB: 1, UTG: 0, HJ: 5, CO: 4 },
    4: { SB: 3, BB: 2, UTG: 1, HJ: 0, CO: 5 },
    5: { SB: 4, BB: 3, UTG: 2, HJ: 1, CO: 0 },
  };

  const btnSeat = btnPlacement[heroPosition];
  const seatingChart = seatMap[btnSeat];
  const openerSeat = !openerPosition ? null : seatingChart[openerPosition];
  const smallBlindSeat = seatingChart ? seatingChart["SB"] : null;
  const bigBlindSeat = seatingChart ? seatingChart["BB"] : null;

  return (
    <div className="poker-table">
      <Row className="poker-table-row poker-table-row-end">
        <SeatContainer
          openerSeat={openerSeat}
          btnSeat={btnSeat}
          smallBlind={smallBlindSeat}
          bigBlind={bigBlindSeat}
          classes={"seat-container"}
          childClasses={[""]}
          seatNumber={3}
        ></SeatContainer>
      </Row>
      <Row className="poker-table-row poker-table-row-middle">
        <Col sm="12" className="seat-container">
          <SeatContainer
            openerSeat={openerSeat}
            btnSeat={btnSeat}
            smallBlind={smallBlindSeat}
            bigBlind={bigBlindSeat}
            childClasses={["pull-right"]}
            seatNumber={4}
          ></SeatContainer>
          <Col sm="4"></Col>
          <SeatContainer
            openerSeat={openerSeat}
            btnSeat={btnSeat}
            smallBlind={smallBlindSeat}
            bigBlind={bigBlindSeat}
            childClasses={["pull-left"]}
            seatNumber={2}
          ></SeatContainer>
        </Col>
      </Row>
      <Row className="poker-table-row poker-table-row-middle">
        <Col sm="12" className="seat-container">
          <SeatContainer
            isBottomRow={true}
            openerSeat={openerSeat}
            btnSeat={btnSeat}
            smallBlind={smallBlindSeat}
            bigBlind={bigBlindSeat}
            childClasses={["pull-right"]}
            seatNumber={5}
          ></SeatContainer>
          <Col sm="4"></Col>
          <SeatContainer
            isBottomRow={true}
            openerSeat={openerSeat}
            btnSeat={btnSeat}
            smallBlind={smallBlindSeat}
            bigBlind={bigBlindSeat}
            childClasses={["pull-left"]}
            seatNumber={1}
          ></SeatContainer>
        </Col>
      </Row>
      <Row className="poker-table-row poker-table-row-end">
        <SeatContainer
          isBottomRow={true}
          openerSeat={openerSeat}
          btnSeat={btnSeat}
          smallBlind={smallBlindSeat}
          bigBlind={bigBlindSeat}
          classes={"seat-container"}
          childClasses={[""]}
          seatNumber={0}
        ></SeatContainer>
      </Row>
    </div>
  );
}

export default PokerTable;
