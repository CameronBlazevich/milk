import React from "react";
import { Col } from "reactstrap";
import PokerSeat from "./pokerSeat";

function SeatContainer(props) {
  const {
    openerSeat,
    seatNumber,
    btnSeat,
    smallBlind,
    bigBlind,
    classes,
    childClasses,
    isBottomRow,
    openAmount,
      displayName,
  } = props;

  const isBtn = btnSeat == seatNumber;
  const isBigBlind = bigBlind === seatNumber;
  const isSmallBlind = smallBlind === seatNumber;
  const isOpener = openerSeat === seatNumber;

  const display = isBtn
    ? "D"
    : isBigBlind
    ? "1"
    : isSmallBlind
    ? ".5"
    : isOpener
    ? "3"
    : "";

  return isBottomRow ? (
    <Col className={classes} sm="4">
      <div
        className={
          [...childClasses] +
          " chip-area " +
          (isBtn ? "dealer-button show-button" : "") +
          (isSmallBlind ? "blinds small-blind" : "") +
          (isBigBlind ? "blinds big-blind" : "") +
          (isOpener ? "open" : "")
        }
      >
        <strong>{display}</strong>
      </div>
      <PokerSeat openerSeat={openerSeat} seatNumber={seatNumber} displayName={displayName}></PokerSeat>
    </Col>
  ) : (
    <Col className={classes} sm="4">
      <PokerSeat openerSeat={openerSeat} seatNumber={seatNumber} displayName={displayName}></PokerSeat>
      <div
        className={
          [...childClasses] +
          " chip-area " +
          (isBtn ? "dealer-button show-button" : "") +
          (isSmallBlind ? "blinds small-blind" : "") +
          (isBigBlind ? "blinds big-blind" : "") +
          (isOpener ? "open" : "")
        }
      >
        <strong>{display}</strong>
      </div>
    </Col>
  );
}

export default SeatContainer;
