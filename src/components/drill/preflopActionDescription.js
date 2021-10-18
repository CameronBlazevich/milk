import React from "react";

function PreflopActionDescription(props) {
    console.log(props)
    if (props.preflopActions) {
        const actions = props.preflopActions.map(pfa => <li>{`${pfa.actorsPosition}: ${pfa.actionType}`}</li>);
        if (actions.length === 0) {
            actions.push(<li>None</li>)
        }
        return (
            <div>
                <p>Preflop Action:</p>
                <ul>
                    {actions}
                </ul>
            </div>)
    } else {
        return <div></div>
    }
}

export default PreflopActionDescription;