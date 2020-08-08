import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import PokerTable from "../components/drill/pokerTable";
import RangeUpdater from "../components/RangeUpdater";

class Drill extends Component {
  render() {
    return (
      <div className="drill-container">
        <Row>
          <div>
            <h2>Choose Scenarios to Drill</h2>
          </div>
        </Row>
        <Row>
          <PokerTable></PokerTable>
          {/* <RangeUpdater></RangeUpdater> */}
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // return {
  //   selectedHands: state.selectedHands,
  //   handRanges: state.handRanges,
  //   position: state.position,
  //   selectedPositionKey: state.selectedPositionKey,
  //   mode: state.mode,
  //   quizResults: state.quizResults,
  //   sliderValue: state.sliderValue,
  //   auth: state.auth,
  //   selectedScenarioId: state.selectedScenarioId,
  //   isLoading: state.isLoading,
  // };
}
function mapDispatchToProps(dispatch) {
  // return {
  //   handActions: bindActionCreators(handActions, dispatch),
  //   positionActions: bindActionCreators(positionActions, dispatch),
  //   modeActions: bindActionCreators(modeActions, dispatch),
  //   sliderActions: bindActionCreators(sliderActions, dispatch),
  // };
}

export default connect(mapStateToProps, mapDispatchToProps)(Drill);
