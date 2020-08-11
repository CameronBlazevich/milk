import React, { useState } from "react";
import { Button, ButtonGroup, Row } from "reactstrap";

const GameModeSelector = (props) => {
  return (
    <div>
      <Row>Mode</Row>
      <ButtonGroup>
        <Button>Edit</Button>
        <Button disabled>Quiz</Button>
        <Button disabled>Play</Button>
      </ButtonGroup>
    </div>
  );
};

export default GameModeSelector;
