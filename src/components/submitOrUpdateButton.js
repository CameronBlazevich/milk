import React from "react";
import { Button } from "react-bootstrap";

function SubmitOrUpdateButton(props) {
  const buttonText = props.isQuizMode ? "Check Answer" : "Update Range";

  return <Button onClick={props.saveHandRange}>{buttonText}</Button>;
}

export default SubmitOrUpdateButton;
