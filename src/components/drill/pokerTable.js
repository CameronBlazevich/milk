import React from "react";
import { Col, Row } from "reactstrap";
import backgroundImage from "../../images/PokerTable_v3.png";
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

  const leftAlignedSeats = "1%";
  const rightAlignedSeats = "75%";
  const centerAlignedSeats = "38%";
  const midTopAlignedSeats = "20%";
  const lowTopAlignedSeats = "65%";


  const seatPositions = {
    // seatNumber: {top: x, left: y}
    0: {top: "75%", left: centerAlignedSeats},
    1: {top: lowTopAlignedSeats, left: rightAlignedSeats},
    2: {top: midTopAlignedSeats, left: rightAlignedSeats},
    3: {top: "1%", left: centerAlignedSeats},
    4: {top: midTopAlignedSeats, left: leftAlignedSeats},
    5: {top: lowTopAlignedSeats, left: leftAlignedSeats},
  };

  return (
      <div className="poker-table" style={{backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"}}>
        <SeatContainer
          openerSeat={openerSeat}
          btnSeat={btnSeat}
          smallBlind={smallBlindSeat}
          bigBlind={bigBlindSeat}
          classes={"seat-container"}
          childClasses={[""]}
          seatNumber={3}
          displayName={getKeyByValue(seatingChart, 3)}
          top={seatPositions["3"].top}
          left={seatPositions["3"].left}
        ></SeatContainer>
          <SeatContainer
            openerSeat={openerSeat}
            btnSeat={btnSeat}
            smallBlind={smallBlindSeat}
            bigBlind={bigBlindSeat}
            classes={"seat-container"}
            childClasses={["pull-right"]}
            seatNumber={4}
            displayName={getKeyByValue(seatingChart, 4)}
            top={seatPositions["4"].top}
            left={seatPositions["4"].left}
          ></SeatContainer>

          <SeatContainer
            openerSeat={openerSeat}
            btnSeat={btnSeat}
            smallBlind={smallBlindSeat}
            bigBlind={bigBlindSeat}
            classes={"seat-container"}
            childClasses={["pull-left"]}
            seatNumber={2}
            displayName={getKeyByValue(seatingChart, 2)}
            top={seatPositions["2"].top}
            left={seatPositions["2"].left}
          ></SeatContainer>

          <SeatContainer
            isBottomRow={true}
            openerSeat={openerSeat}
            btnSeat={btnSeat}
            smallBlind={smallBlindSeat}
            bigBlind={bigBlindSeat}
            classes={"seat-container"}
            childClasses={["pull-right"]}
            seatNumber={5}
            displayName={getKeyByValue(seatingChart, 5)}
            top={seatPositions["5"].top}
            left={seatPositions["5"].left}
          ></SeatContainer>

          <SeatContainer
            isBottomRow={true}
            openerSeat={openerSeat}
            btnSeat={btnSeat}
            smallBlind={smallBlindSeat}
            bigBlind={bigBlindSeat}
            classes={"seat-container"}
            childClasses={["pull-left"]}
            seatNumber={1}
            displayName={getKeyByValue(seatingChart, 1)}
            top={seatPositions["1"].top}
            left={seatPositions["1"].left}
          ></SeatContainer>

        <SeatContainer
          isBottomRow={true}
          openerSeat={openerSeat}
          btnSeat={btnSeat}
          smallBlind={smallBlindSeat}
          bigBlind={bigBlindSeat}
          classes={"seat-container"}
          childClasses={["pull-bottom"]}
          seatNumber={0}
          displayName={getKeyByValue(seatingChart, 0)}
          top={seatPositions["0"].top}
          left={seatPositions["0"].left}
        ></SeatContainer>
    </div>
  );
}

function getKeyByValue(object, value) {
  if (!object) {
    return "None";
  }
  const displayName =  Object.keys(object).find(key => object[key] === value) || "BTN";
  return displayName;
}


export default PokerTable;
