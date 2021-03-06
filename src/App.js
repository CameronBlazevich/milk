import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Switch from "react-bootstrap-switch";
import { Notify } from "react-redux-notify";
import "./App.css";
import HandGrid from "./components/handGrid";
import PositionMenu from "./components/positionMenu";
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
      hands: this.props.selectedHands
    });
  };

  checkAnswer = () => {
    this.props.actions.checkAnswer();
  };

  reset = () => {
    this.refs.selectableGroup.clearSelection();
    this.props.actions.reset();
  };

  handlePositionSelection = positionId => {
    this.refs.selectableGroup.clearSelection();
    this.props.positionActions.positionSelected(positionId);
  };
  toggleMode = (element, isQuizMode) => {
    this.refs.selectableGroup.clearSelection();
    this.props.modeActions.modeChanged(this.props, isQuizMode);
  };

  sliderMoving = value => {
    //this.props.sliderActions.sliderMoving(value);
  };

  sliderMoved = value => {
    this.refs.selectableGroup.selectedItems = new Set();
    this.props.sliderActions.sliderMoved(value);
  };

  selectHands = selection => {
    let selectedHandIds = selection.map(selectedItem => {
      return selectedItem.node.id;
    });

    if (selectedHandIds.length > 0) {
      this.refs.selectableGroup.clearSelection();
    }
    this.props.actions.handsSelected(selectedHandIds);
  };

  render() {
    //console.log(this.props);
    //console.log(this.props.selectedHands);

    return (
      <div className="App container" ref="test">
        <Notify />
        <Login auth={auth} />
        {!auth.isAuthenticated() && <UnauthenticatedWarningMessage />}
        <div className="row">
          <div className="col-md-2">
            <PositionMenu
              selectedPositionId={this.props.selectedPositionId}
              positions={this.props.positions}
              onSelect={this.handlePositionSelection}
            />
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
              <Switch
                bsSize="normal"
                labelWidth={100}
                labelText="Mode"
                onText="Quiz"
                offText="Edit"
                onColor="success"
                offColor="danger"
                onChange={(element, mode) => this.toggleMode(element, mode)}
              />{" "}
              <SubmitOrUpdateButton
                isLoading={this.props.isLoading}
                hasCheckedAnswer={this.props.quizResults.hasCheckedAnswer}
                saveHandRange={this.saveHandRange}
                checkAnswer={this.checkAnswer}
                reset={this.reset}
                isQuizMode={this.props.isQuizMode}
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
    isQuizMode: state.isQuizMode,
    quizResults: state.quizResults,
    sliderValue: state.sliderValue,
    auth: state.auth,
    isLoading: state.isLoading
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(handActions, dispatch),
    positionActions: bindActionCreators(positionActions, dispatch),
    modeActions: bindActionCreators(modeActions, dispatch),
    sliderActions: bindActionCreators(sliderActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
