import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Notify } from "react-redux-notify";
import PositionSelector from "../components/selectors/positionSelector";
import GridLegend from "../components/gridLegend";
import Login from "../components/login";
import UnauthenticatedWarningMessage from "../components/unauthenticatedWarningMessage";
import * as handActions from "../actions/handActions";
import * as positionActions from "../actions/positionActions";
import * as modeActions from "../actions/modeActions";
import * as sliderActions from "../actions/sliderActions";
import Auth from "../services/authService";
import CardGrid from "../components/playMode/handGrid";
import "../App.css";

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
                <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-1" style={{backgroundColor: "#cc33ff"}}>Raise</div>
                <div className="col-md-1" style={{backgroundColor: "#00cc00"}}>Call</div>
                <div className="col-md-1" style={{backgroundColor: "#ffff66"}}>Fold</div>
                </div>
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
