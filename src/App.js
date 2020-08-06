import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { Notify } from "react-redux-notify";
import "./App.css";
import HandGrid from "./components/handGrid";
import ScenarioSelector from "./components/scenarioSelector";
import SubmitOrUpdateButton from "./components/submitOrUpdateButton";
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

const auth = new Auth();

class App extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  static selectableGroupReference = null;

  saveHandRange = () => {
    this.props.actions.updateHandRange({
      position: this.props.selectedPositionId,
      hands: this.props.selectedHands,
    });
  };

  checkAnswer = () => {
    this.props.actions.checkAnswer();
  };

  reset = () => {
    this.refs.selectableGroup.clearSelection();
    this.props.actions.reset();
  };

  handlePositionSelection = (positionCompositeKey) => {
    this.refs.selectableGroup.clearSelection();
    this.props.positionActions.positionSelectedForEdit(positionCompositeKey);
  };

  handleModeChange = (switchValue) => {
    this.refs.selectableGroup.clearSelection();
    //get which mode we're in, adjust accordingly
    console.log(switchValue);
    this.props.modeActions.modeChanged(this.props, switchValue);
  };

  sliderMoving = (value) => {
    //this.props.sliderActions.sliderMoving(value);
  };

  sliderMoved = (value) => {
    this.refs.selectableGroup.selectedItems = new Set();
    this.props.sliderActions.sliderMoved(value);
  };

  selectHands = (selection) => {
    let selectedHandIds = selection.map((selectedItem) => {
      return selectedItem.node.id;
    });

    if (selectedHandIds.length > 0) {
      this.refs.selectableGroup.clearSelection();
    }
    this.props.actions.handsSelected(selectedHandIds);
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
            <div className="row">
              <SelectableGroup
                ref={"selectableGroup"}
                tolerance={1}
                className="main"
                clickClassName="tick"
                enableDeselect
                allowClickWithoutSelected={true}
                //duringSelection={() => console.log("selecting...")}
                onSelectionFinish={this.selectHands}
                // ignoreList={['.not-selectable', '.item:nth-child(10)', '.item:nth-child(27)']}
              >
                <HandGrid
                  selectedHands={this.props.selectedHands}
                  quizResults={this.props.quizResults}
                  selectableGroupReference={this.refs.selectableGroup}
                />
              </SelectableGroup>
            </div>
            <div className="row">
              <div className="col-md-offset-2 col-md-8">
                <SliderWithToolTip
                  value={this.props.sliderValue}
                  onAfterChange={this.sliderMoved}
                  onChange={this.sliderMoving}
                />
              </div>
              <div className="pull-left">{this.props.sliderValue + "%"}</div>
            </div>
            <div className="row center">
              <DropdownButton
                id="GameModeSelector"
                title={this.props.mode}
                onSelect={this.handleModeChange}
              >
                <MenuItem eventKey="PLAY">Play</MenuItem>
                <MenuItem eventKey="EDIT">Edit</MenuItem>
                <MenuItem eventKey="QUIZ" disabled>
                  Quiz
                </MenuItem>
              </DropdownButton>{" "}
              <SubmitOrUpdateButton
                isLoading={this.props.isLoading}
                hasCheckedAnswer={this.props.quizResults.hasCheckedAnswer}
                saveHandRange={this.saveHandRange}
                checkAnswer={this.checkAnswer}
                reset={this.reset}
                mode={this.props.mode}
              />
            </div>
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
    positions: state.positions,
    selectedPositionId: state.selectedPositionId,
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
    actions: bindActionCreators(handActions, dispatch),
    positionActions: bindActionCreators(positionActions, dispatch),
    modeActions: bindActionCreators(modeActions, dispatch),
    sliderActions: bindActionCreators(sliderActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
