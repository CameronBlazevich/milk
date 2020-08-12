import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { SelectableGroup } from "react-selectable-fast";
import SliderWithToolTip from "./slider";
import UpdateRangeButton from "./submitOrUpdateButton";
import HandGrid from "./handGrid";
import { connect } from "react-redux";
import * as positionActions from "../actions/positionActions";
import * as handActions from "../actions/handActions";
import * as sliderActions from "../actions/sliderActions";

class RangeUpdater extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  clearSelection() {
    this.refs.selectableGroup.clearSelection();
  }

  selectHands = (selection) => {
    let selectedHandIds = selection.map((selectedItem) => {
      return selectedItem.node.id;
    });

    if (selectedHandIds.length > 0) {
      this.refs.selectableGroup.clearSelection();
    }
    this.props.handActions.handsSelected(selectedHandIds);
  };

  sliderMoving = (value) => {
    //this.props.sliderActions.sliderMoving(value);
  };

  sliderMoved = (value) => {
    this.refs.selectableGroup.selectedItems = new Set();
    this.props.sliderActions.sliderMoved(value);
  };

  saveHandRange = () => {
    this.props.handActions.updateHandRange({
      positionKey: this.props.selectedPositionKey,
      hands: this.props.selectedHands,
    });
  };

  render() {
    return (
      <div className="range-updater-container">
        <div className="row">
          <SelectableGroup
            ref={"selectableGroup"}
            tolerance={1}
            className="main"
            clickClassName="tick"
            enableDeselect
            allowClickWithoutSelected={true}
            onSelectionFinish={this.selectHands}
          >
            <HandGrid
              selectedHands={this.props.selectedHands}
              quiz={this.props.quiz}
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
          {/* <GameModeSelector></GameModeSelector> */}
          <UpdateRangeButton
            isLoading={this.props.isLoading}
            saveHandRange={this.saveHandRange}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    selectedHands: ownProps.isQuiz
      ? state.quiz.position.handRange.hands
      : state.selectedHands,
    handRanges: state.handRanges,
    position: state.position,
    selectedPositionKey: ownProps.isQuiz
      ? state.quiz.quizKey
      : state.selectedPositionKey,
    mode: state.mode,
    quiz: state.quiz,
    sliderValue: state.sliderValue,
    auth: state.auth,
    selectedScenarioId: state.selectedScenarioId,
    isLoading: state.isLoading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    positionActions: bindActionCreators(positionActions, dispatch),
    handActions: bindActionCreators(handActions, dispatch),
    sliderActions: bindActionCreators(sliderActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(RangeUpdater);
