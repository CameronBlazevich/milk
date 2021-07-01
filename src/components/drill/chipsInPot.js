import React from "react";
import {Row, Col} from "reactstrap"

function ChipsInPot(props) {
    const {chipAmount, isBlindAndFolded} = props;
    const classes = ["chips-in-pot-container"]
    if (isBlindAndFolded) {
        classes.push("folded");
    }
    if (chipAmount) {
        return <Row className={[...classes]}><Col className="chips"><strong>$</strong></Col><Col className="chip-amount"><strong>{`${chipAmount}B`}</strong></Col></Row>
    } else {
        return <div></div>
    }
}

export default ChipsInPot;