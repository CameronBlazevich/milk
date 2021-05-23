import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Notify } from "react-redux-notify";
import PositionSelector from "../components/selectors/positionSelector";
import FormattedRangeInputForm from "../components/formattedRangeInputForm";
import Login from "../components/login";
import UnauthenticatedWarningMessage from "../components/unauthenticatedWarningMessage";
import * as handActions from "../actions/handActions";
import * as positionActions from "../actions/positionActions";
import * as modeActions from "../actions/modeActions";
import * as sliderActions from "../actions/sliderActions";
import Auth from "../services/authService";
import CardGrid from "../components/playMode/handGrid";
import "../App.css";
import GridLegend from "../components/gridLegend";

const auth = new Auth();

class App extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    handlePositionSelection = (positionCompositeKey) => {
        this.props.positionActions.positionSelectedForEdit(positionCompositeKey);
        this.props.handActions.getHandRange(positionCompositeKey);
    };

    submitRangeInputForm = (event, formValues) => {
        event.preventDefault();
        this.props.handActions.updateFormattedHandRange(
            {
                positionKey: this.props.selectedPositionKey,
                raisingRange: formValues.raisingRange,
                flattingRange: formValues.flattingRange,
            })
    }

    render() {
        return (
            <div className="App container" ref="test">
                <Notify />
                <Login auth={auth} />
                {!auth.isAuthenticated() && <UnauthenticatedWarningMessage />}
                <div className="row">
                    <div className="col-md-2">
                        <PositionSelector
                            onItemSelect={this.handlePositionSelection}
                        ></PositionSelector>
                    </div>
                    <div className="col-md-8">
                        <CardGrid selectedHands={this.props.selectedHands}></CardGrid>
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
                <GridLegend></GridLegend>
                <FormattedRangeInputForm onSubmit={this.submitRangeInputForm}></FormattedRangeInputForm>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        selectedHands: state.selectedHands,
        handRanges: state.handRanges,
        position: state.position,
        selectedPositionKey: state.selectedPositionKey,
        mode: state.mode,
        sliderValue: state.sliderValue,
        auth: state.auth,
        selectedScenarioId: state.selectedScenarioId,
        isLoading: state.isLoading,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        handActions: bindActionCreators(handActions, dispatch),
        positionActions: bindActionCreators(positionActions, dispatch),
        modeActions: bindActionCreators(modeActions, dispatch),
        sliderActions: bindActionCreators(sliderActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
