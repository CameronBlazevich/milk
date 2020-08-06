import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DropdownButton, MenuItem } from "react-bootstrap";
import * as scenarioActions from "../actions/scenarioActions";
import * as positionActions from "../actions/positionActions";
import ScenarioGrid from "../components/scenario/scenarioGrid";
import "../ScenarioPage.css";

class ScenarioSelector extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  handleScenarioClick = (clickedScenarioId) => {
    this.props.scenarioActions.scenarioSelected(clickedScenarioId);
    this.props.positionActions.setPositionToNull();
    console.log(clickedScenarioId);
  };

  renderSituationDropdown = () => {
    if (
      this.props.selectedScenarioId === undefined ||
      this.props.selectedScenarioId === null
    ) {
      return null;
    }

    const situations = this.props.scenarios.find(
      (s) => s.id === this.props.selectedScenarioId
    ).situations;

    const dropDownItems = situations.map((situation) => {
      return (
        <MenuItem
          eventKey={situation.id}
          onSelect={() => console.log("Selected Situation " + situation.id)}
        >
          {situation.displayName}
        </MenuItem>
      );
    });

    return (
      <DropdownButton title="Situations" bsStyle="primary">
        {dropDownItems}
      </DropdownButton>
    );
  };

  render() {
    return (
      <div>
        <ScenarioGrid
          scenarios={this.props.scenarios}
          handleScenarioClick={this.handleScenarioClick}
          selectedScenarioId={this.props.selectedScenarioId}
        />
        {this.renderSituationDropdown()}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // selectedHands: state.selectedHands,
    // handRanges: state.handRanges,
    // positions: state.positions,
    // selectedPositionId: state.selectedPositionId,
    // mode: state.mode,
    // quizResults: state.quizResults,
    // sliderValue: state.sliderValue,
    auth: state.auth,
    isLoading: state.isLoading,
    scenarios: state.scenarios,
    selectedScenarioId: state.selectedScenarioId,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    scenarioActions: bindActionCreators(scenarioActions, dispatch),
    positionActions: bindActionCreators(positionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioSelector);
