import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as scenarioActions from "../actions/scenarioActions";
import ScenarioGrid from "../components/scenario/scenarioGrid";
import "../ScenarioPage.css";

class ScenarioSelector extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  handleScenarioClick = clickedScenarioId => {
    this.props.scenarioActions.scenarioSelected(clickedScenarioId);
    console.log(clickedScenarioId);
  };

  render() {
    return (
      <ScenarioGrid
        scenarios={this.props.scenarios}
        handleScenarioClick={this.handleScenarioClick}
      />
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
    isLoading: state.isLoading,
    scenarios: state.scenarios
  };
}
function mapDispatchToProps(dispatch) {
  return {
    scenarioActions: bindActionCreators(scenarioActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScenarioSelector);
