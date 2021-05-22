import React from "react";

function getHandBackground(selectedHands, hand) {
  //console.log(selectedHands);
  const correspondingHand = selectedHands.find(h => h.hand === hand);
  //console.log(correspondingHand)

  let raiseFreq, callFreq, foldFreq;
  if (correspondingHand) {
    raiseFreq = correspondingHand.actionFrequencies.find(af => af.actionType === "Raise")?.percentFrequency || 0;
    callFreq = correspondingHand.actionFrequencies.find(af => af.actionType === "Call")?.percentFrequency || 0;
    foldFreq = 100 - raiseFreq - callFreq;
  } else {
    raiseFreq = 0;
    callFreq = 0;
    foldFreq = 100;
  }

  return {raiseFreq, callFreq, foldFreq};
}

function Hand(props) {
  let handText = "";
  if (props.row < props.column) {
    handText = `${props.rowCard + props.columnCard}s`;
  } else {
    handText = `${props.columnCard + props.rowCard}o`;
  }

  const frequencies = getHandBackground(props.selectedHands, handText);
  const raiseFreq = frequencies.raiseFreq;
  const callFreq = frequencies.callFreq;
  const foldFreq = frequencies.callFreq;

  const linearGrad = `linear-gradient(to right, #cc33ff ${raiseFreq}%, #00cc00 ${raiseFreq}% ${foldFreq}%, #ffff66 ${raiseFreq + foldFreq}%)`
  return (
    <div id={handText} className={"hand"} style={{background: linearGrad }}>
      <strong>{handText}</strong>
    </div>
  );
}

export default Hand;
