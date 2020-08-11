import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col } from "reactstrap";
import PokerTable from "../components/drill/pokerTable";
import { Button } from "reactstrap";
import ScenarioSelector from "../components/selectors/scenarioSelector";
import * as quizActions from "../actions/quizActions";
// import RangeUpdater from "../components/rangeUpdater";

class Drill extends Component {
  handleScenarioSelectorChange = (selectedValues) => {
    const ints = selectedValues.map((val) => parseInt(val));
    this.props.quizActions.quizScenarioSelectorChanged(ints);
  };

  startDrill = () => {
    const availableScenarios = this.props.scenarios.filter((scenario) => {
      return this.props.scenarioIdsForQuiz.includes(scenario.id);
    });

    const availableSituations = availableScenarios
      .map((scenario) => scenario.situations)
      .flat();

    const availableSituationsWithPositionsThatHaveData = availableSituations.filter(
      (x) => x.positions.length > 0
    );

    const randomSituation =
      availableSituationsWithPositionsThatHaveData[
        Math.floor(
          Math.random() * availableSituationsWithPositionsThatHaveData.length
        )
      ];

    const availablePositions = randomSituation.positions;
    const randomPosition =
      availablePositions[Math.floor(Math.random() * availablePositions.length)];

    if (!randomPosition) {
      alert("No ranges set up for this scenario");
      return;
    }

    this.props.quizActions.quizGenerated(
      {
        scenarioId: randomSituation.scenarioId,
        situationId: randomSituation.id,
        positionId: randomPosition.id,
      },
      { situation: randomSituation, position: randomPosition }
    );
    console.log(randomSituation, randomPosition);
  };

  render() {
    return (
      <div className="drill-container">
        <Row>
          <Col sm="12">
            <h2>Choose Scenarios to Drill</h2>
            <Row>
              <Col sm="4">
                <ScenarioSelector
                  onChange={this.handleScenarioSelectorChange}
                  scenarios={this.props.scenarios}
                ></ScenarioSelector>
              </Col>
              <Col sm="4">
                {" "}
                <Button color="primary" onClick={this.startDrill}>
                  GO
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <PokerTable
            heroPosition={this.props.quizPosition.key}
            openerPosition={this.props.quizSituation.openerPosition}
          ></PokerTable>
          {/* <RangeUpdater></RangeUpdater> */}
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const scenarios =
    state.quiz.userScenarios.length > 0
      ? state.quiz.userScenarios
      : state.scenarios;
  return {
    scenarios,
    scenarioIdsForQuiz: state.quiz.scenarioIds,
    quizPosition: state.quiz.position,
    quizSituation: state.quiz.situation,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    quizActions: bindActionCreators(quizActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Drill);
