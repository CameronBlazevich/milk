import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Switch from "react-bootstrap-switch";
import "./App.css";
import HandGrid from "./components/handGrid";
import PositionMenu from "./components/positionMenu";
import SubmitOrUpdateButton from "./components/submitOrUpdateButton";
import * as ActionTypes from "./actions/actionTypes";
import * as handActions from "./actions/handActions";
import * as positionActions from "./actions/positionActions";
import * as modeActions from "./actions/modeActions";
import { getSelectedHands } from "./selectors";
//import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);
  }

  handClicked = clickedHand => {
    this.props.actions.handClicked(clickedHand);
  };

  saveHandRange = () => {
    //store.dispatch({ type: ActionTypes.SAVE_HAND_RANGE });
  };

  handlePositionSelection = positionId => {
    this.props.positionActions.positionSelected(positionId);
  };
  toggleMode = (element, isQuizMode) => {
    this.props.modeActions.modeChanged(this.props, isQuizMode);
  };

  render() {
    //console.log(this.props);
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-2">
            <PositionMenu
              selectedPositionId={this.props.selectedPositionId}
              positions={this.props.positions}
              onSelect={this.handlePositionSelection}
            />
          </div>
          <div className="col-md-8">
            <HandGrid
              handClicked={this.handClicked}
              selectedHands={this.props.selectedHands}
            />
            <Switch
              bsSize="normal"
              labelWidth={100}
              //defaultValue={false}
              labelText="Mode"
              onText="Quiz"
              offText="Edit"
              onColor="success"
              offColor="danger"
              onChange={(element, mode) => this.toggleMode(element, mode)}
            />{" "}
            <SubmitOrUpdateButton isQuizMode={this.props.isQuizMode} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  // const selectedHands = state.isQuizMode
  //   ? state.selectedHands
  //   : getSelectedHands(state);
  return {
    //selectedHands: selectedHands,
    selectedHands: state.selectedHands,
    handRanges: state.handRanges,
    positions: state.positions,
    selectedPositionId: state.selectedPositionId,
    isQuizMode: state.isQuizMode
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(handActions, dispatch),
    positionActions: bindActionCreators(positionActions, dispatch),
    modeActions: bindActionCreators(modeActions, dispatch)
    // handClicked: (selectedHands, clickedHand) =>
    //   dispatch(handActions.handClicked(selectedHands, clickedHand))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
