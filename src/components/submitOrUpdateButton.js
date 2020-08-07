import React from "react";
import { Button } from "reactstrap";

function getClickAction(props) {
  return props.saveHandRange;
}

function getButtonText() {
  return "Update Range";
}

function UpdateRangeButton(props) {
  return (
    <Button disabled={props.isLoading} onClick={getClickAction(props)}>
      {getButtonText()}
    </Button>
  );
}

export default UpdateRangeButton;
