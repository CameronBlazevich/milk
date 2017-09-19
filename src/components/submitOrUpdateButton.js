import React from "react";
import { Button } from "react-bootstrap";

function getClickAction(props) {
  if (props.hasCheckedAnswer) {
    return props.reset;
  }

  if (props.isQuizMode) {
    return props.checkAnswer;
  }

  return props.saveHandRange;
}

function getButtonText(props) {
  if (props.hasCheckedAnswer) {
    return "Reset";
  }

  if (props.isQuizMode) {
    return "Check Answer";
  }

  return "Update Range";
}

function SubmitOrUpdateButton(props) {
  return (
    <Button onClick={getClickAction(props)}>{getButtonText(props)}</Button>
  );
}

export default SubmitOrUpdateButton;
