import React from "react";

function PokerSeat(props) {
  const { preflopActions, displayName } = props;
  const actionForSeat = preflopActions?.find(pfa => pfa.actorsPosition === displayName);
  let actionDisplay = "Fold";
  if (actionForSeat) {
      if (actionForSeat.actionType === "ThreeBet") {
          actionDisplay = "3 Bet";
      } else {
          actionDisplay = actionForSeat.actionType;
      }
  }
  return (
    <div>
      <div
        className={"poker-seat "}
      >
        <div><strong>{`${displayName}`}</strong></div>
        <div>$100</div>
      </div>
    </div>
  );
}

export default PokerSeat;
