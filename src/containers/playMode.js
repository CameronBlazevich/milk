import React, { Component } from "react";
import HandGrid from "../components/playMode/handGrid";
import PositionMenu from "../components/positionMenu";
import HandRangeMenu from "../components/handRangeSelector/handRangeSelector";
import * as positionActions from "../actions/positionActions";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class PlayMode extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  handlePositionSelection = positionId => {
    this.props.positionActions.positionSelected(positionId);
  };

  render() {
    console.log(this.props);
    return (
      <div className="container App">
        <div className="row">
          <div className="col-md-8">
            <HandRangeMenu handRanges={this.props.handRanges} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <PositionMenu
              selectedPositionId={this.props.selectedPositionId}
              positions={this.props.positions}
              onSelect={this.handlePositionSelection}
            />
          </div>
          <div className="col-md-8">
            <HandGrid selectedHands={this.props.selectedHands} />
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
    positions: state.positions,
    selectedPositionId: state.selectedPositionId,
    mode: state.mode,
    sliderValue: state.sliderValue,
    auth: state.auth,
    isLoading: state.isLoading,
    scenarios: state.scenarios,
    selectedScenarioId: state.selectedScenarioId,
    hydratedScenario: state.hydratedScenario
  };
}
function mapDispatchToProps(dispatch) {
  return {
    //scenarioActions: bindActionCreators(scenarioActions, dispatch)
    positionActions: bindActionCreators(positionActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayMode);
