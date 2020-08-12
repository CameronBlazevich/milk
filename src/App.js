import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Notify } from "react-redux-notify";
import PositionSelector from "./components/selectors/positionSelector";
import GridLegend from "./components/gridLegend";
import Login from "./components/login";
import UnauthenticatedWarningMessage from "./components/unauthenticatedWarningMessage";
import * as handActions from "./actions/handActions";
import * as positionActions from "./actions/positionActions";
import * as modeActions from "./actions/modeActions";
import * as sliderActions from "./actions/sliderActions";
import Auth from "./services/authService";
import RangeUpdater from "./components/rangeUpdater";
import "./App.css";

const auth = new Auth();

class App extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.rangeUpdater = React.createRef();
  }

  reset = () => {
    this.rangeUpdater.current.clearSelection();
    this.props.handActions.reset();
  };

  handlePositionSelection = (positionCompositeKey) => {
    this.rangeUpdater.current.clearSelection();
    this.props.positionActions.positionSelectedForEdit(positionCompositeKey);
    this.props.handActions.getHandRange(positionCompositeKey);
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
            <PositionSelector
              onItemSelect={this.handlePositionSelection}
            ></PositionSelector>
          </div>
          <div className="col-md-8">
            <RangeUpdater ref={this.rangeUpdater}></RangeUpdater>
          </div>
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
