import React from "react";
import PokerSeat from "./pokerSeat";
import ChipsInPot from "./chipsInPot"

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
    displayName,
    preflopActions,
  } = props;

  const isBtn = btnSeat == seatNumber;
  const isBigBlind = bigBlind === seatNumber;
  const isSmallBlind = smallBlind === seatNumber;
  const isOpener = openerSeat === seatNumber;

    const calculateThreeBetAmount = (preflopActionForSeat, allPreflopActions) => {
        // ToDo: This only works for subset of usecases up to and included defending 3bets
        const opener = allPreflopActions.find(pfa => pfa.actionType === "Open");
        if (opener && opener.actorsPosition === "SB") {
            return "7.5";
        }

        if (preflopActionForSeat.actorsPosition === "BB") {
            return "12";
        }

        if (preflopActionForSeat.actorsPosition === "SB") {
            return "11";
        }

        return "7.5";
    }

  let chipAmount = isBigBlind
    ? "1"
    : isSmallBlind
    ? ".5"
    : "";

  const actionForThisSeat = preflopActions?.find(pfa => pfa.actorsPosition === displayName);

  if (actionForThisSeat) {
      if (actionForThisSeat.actionType === "Open") {
          chipAmount = "2.5";
      } else if (actionForThisSeat.actionType === "ThreeBet") {
          chipAmount = calculateThreeBetAmount(actionForThisSeat, preflopActions);
      }
  }

  const isSmallBlindAndFolded = isSmallBlind && chipAmount === ".5";
  const isBigBlindAndFolded = isBigBlind && chipAmount === "1";
  const isBlindAndFolded = isSmallBlindAndFolded || isBigBlindAndFolded;


  return isBottomRow ? (
    <div className={classes} style={{top: top, left: left}}>
      <div
        className={
          [...childClasses] +
          " chip-area "
        }
      >
          <ChipsInPot chipAmount={chipAmount} isBlindAndFolded={isBlindAndFolded}></ChipsInPot>
          <div className={"dealer-button" + (isBtn ? " show-button " : " ")}><strong>D</strong></div>
      </div>
      <PokerSeat preflopActions={preflopActions} displayName={displayName}></PokerSeat>
    </div>
  ) : (
    <div className={classes} style={{top: top, left: left}}>
      <PokerSeat preflopActions={preflopActions} displayName={displayName}></PokerSeat>
      <div
        className={
          [...childClasses] +
          " chip-area "
        }
      >
          <div className={"dealer-button" + (isBtn ? " show-button " : " ")}><strong>D</strong></div>
          <ChipsInPot chipAmount={chipAmount} isBlindAndFolded={isBlindAndFolded}></ChipsInPot>
      </div>
    </div>
  );
}

export default SeatContainer;
