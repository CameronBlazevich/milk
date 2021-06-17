import React from "react";
import { Col, Row } from "reactstrap";

function PokerSeat(props) {
  const { openerSeat, seatNumber, displayName } = props;
  return (
    <div>
      <div
        className={"poker-seat " + (openerSeat === seatNumber ? "opener" : "")}
      >
        <div><strong>{`${displayName}`}</strong></div>
        <div>$100</div>
      </div>
    </div>
  );
}

export default PokerSeat;
