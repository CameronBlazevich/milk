import React from "react";
import { Button } from "react-bootstrap";

function getClickAction(props) {
  if (props.hasCheckedAnswer) {
    return props.reset;
  }

  if (props.mode === "QUIZ") {
    return props.checkAnswer;
  }

  return props.saveHandRange;
}

function getButtonText(props) {
  if (props.hasCheckedAnswer) {
    return "Reset";
  }

  if (props.mode === "QUIZ") {
    return "Check Answer";
  }
  return "Update Range";
}

function SubmitOrUpdateButton(props) {
  return (
    (props.mode === "QUIZ" || props.mode === "EDIT") && (
      <Button disabled={props.isLoading} onClick={getClickAction(props)}>
        {getButtonText(props)}
      </Button>
    )
  );
}

export default SubmitOrUpdateButton;
