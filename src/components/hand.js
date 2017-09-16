import React from "react";

const style = {
  width: 35,
  height: 35,
  display: "inline-block",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "grey",
  borderRadius: 5,
  margin: 3,
  "text-align": "center",
  "vertical-align": "middle",
  "line-height": 35
};

function Hand(props) {
  let handText = "";
  if (props.row < props.column) {
    handText = `${props.rowCard + props.columnCard}s`;
  } else {
    handText = `${props.columnCard + props.rowCard}o`;
  }

  let className = props.selectedHands.includes(handText)
    ? "selected hand"
    : "hand";

  return (
    <div
      id={handText}
      style={style}
      onClick={() => props.handClicked(handText)}
      className={className}
    >
      {handText}
    </div>
  );
}

export default Hand;
