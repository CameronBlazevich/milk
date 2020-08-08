import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import GameModeSelector from "./components/gameModeSelector";
import { Notify } from "react-redux-notify";
import HandGrid from "./components/handGrid";
import ScenarioSelector from "./components/scenarioSelector";
import UpdateRangeButton from "./components/submitOrUpdateButton";
import GridLegend from "./components/gridLegend";
import SliderWithToolTip from "./components/slider";
import Login from "./components/login";
import UnauthenticatedWarningMessage from "./components/unauthenticatedWarningMessage";
import * as handActions from "./actions/handActions";
import * as positionActions from "./actions/positionActions";
import * as modeActions from "./actions/modeActions";
import * as sliderActions from "./actions/sliderActions";
import Auth from "./services/authService";
import { SelectableGroup } from "react-selectable-fast";
import RangeUpdater from "./components/RangeUpdater";
import "./App.css";

const auth = new Auth();

class App extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.rangeUpdater = React.createRef();
  }

  checkAnswer = () => {
    this.props.handActions.checkAnswer();
  };

  reset = () => {
    this.rangeUpdater.current.clearSelection();
    this.props.handActions.reset();
  };

  handlePositionSelection = (positionCompositeKey) => {
    this.rangeUpdater.current.clearSelection();
    this.props.positionActions.positionSelectedForEdit(positionCompositeKey);
    this.props.positionActions.getPosition(positionCompositeKey);
  };

  handleModeChange = (switchValue) => {
    this.rangeUpdater.current.clearSelection();
    //get which mode we're in, adjust accordingly
    console.log(switchValue);
    this.props.modeActions.modeChanged(this.props, switchValue);
  };

  render() {
    return (
      <div className="App container" ref="test">
        <Notify />
        <Login auth={auth} />
        {!auth.isAuthenticated() && <UnauthenticatedWarningMessage />}
        <div className="row">
          <div className="col-md-2">
            <ScenarioSelector
              onItemSelect={this.handlePositionSelection}
            ></ScenarioSelector>
          </div>
          <div className="col-md-8">
            <RangeUpdater ref={this.rangeUpdater}></RangeUpdater>
          </div>
          {this.props.quizResults.hasCheckedAnswer && <GridLegend />}
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
    quizResults: state.quizResults,
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
