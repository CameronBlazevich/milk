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
      top, left,
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
    <div className={classes} style={{top: top, left: left}}>
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
    </div>
  ) : (
    <div className={classes} style={{top: top, left: left}}>
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
    </div>
  );
}

export default SeatContainer;
