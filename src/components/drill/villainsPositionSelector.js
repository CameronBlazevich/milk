import React, {useState} from "react";
import {Row, Col} from 'reactstrap'

export default function VillainsPositionSelector(props) {
    const positions = ["SB", "BB", "UTG", "HJ", "CO", "BTN"];
    const { onChange } = props;
    const [checkedState, setCheckedState] = useState(
        new Array(positions.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        onChange(positions[position]);
    };

    return (
        <Row className="hero-position-selector">
            <Row><h4>Villain's Position:</h4></Row>
            {positions.map((position, index) => {
                return (
                    <Row sm={2}>
                        <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={position}
                            value={position}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>{position}</label>
                    </Row>
                );
            })}
        </Row>
    );
}