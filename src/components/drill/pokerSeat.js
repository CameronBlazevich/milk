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

  const classes = ["poker-seat "];
  // if (actionDisplay === "Fold") {
  //     classes.push(" folded ");
  // }
  return (
    <div>
        {/*{ actionDisplay === "3 Bet" && <div className={"bet-bubble"}><p className="bet-bubble">{actionDisplay}</p></div> }*/}
      <div
        className={[...classes]}
      >
        <div><strong>{`${displayName}`}</strong></div>
        <div>100B</div>
      </div>
    </div>
  );
}

export default PokerSeat;
