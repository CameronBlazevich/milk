import React from "react";
import { CardSvg } from "./cards";

export function PlayingCard(props) {
  const { cardText, selected, classNameProp } = props;
  return (
    <div
      className={"text-center " + (selected ? "selected " : "") + classNameProp}
    >
      <CardSvg cardId={cardText}></CardSvg>
    </div>
  );
}
