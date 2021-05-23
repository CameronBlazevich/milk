import React, {useState} from "react";
import { Form, Button, FormGroup, Label, Input } from 'reactstrap'

function FormattedRangeInputForm(props) {
    const initialInputState = { raisingRange: "", flattingRange: "" };
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const {raisingRange, flattingRange} = eachEntry;
    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
    };
    return <Form inline className="formatted-range-input-form"  onSubmit={e => props.onSubmit(e, eachEntry)}>
            <FormGroup>
                <Label for="raisingRange" className="mb-2 mr-sm-2 mb-sm-0">Raising Range:</Label>
                <Input type="text" name="raisingRange" id="raisingRange" className="mr-sm-2" onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="flattingRange" className="mb-2 mr-sm-2 mb-sm-0">Flatting Range:</Label>
                <Input type="text" name="flattingRange" id="flattingRange" className="mr-sm-2" onChange={handleInputChange}/>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
}

export default FormattedRangeInputForm;