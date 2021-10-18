import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Row, Col, Button} from "reactstrap";
import PokerTable from "../components/drill/pokerTable";
import ScenarioSelector from "../components/selectors/scenarioSelector";
import * as quizActions from "../actions/quizActions";
import {hands} from "../services/handRankService";
import {PlayingCard} from "../components/cards/playingCard";
import CardGrid from "../components/playMode/handGrid";
import GridLegend from "../components/gridLegend";
import PreflopActionDescription from "../components/drill/preflopActionDescription"
import HerosPositionSelector from "../components/drill/herosPositionSelector"

class Drill extends Component {
    handleScenarioSelectorChange = (selectedValues) => {
        const ints = selectedValues.map((val) => parseInt(val));
        this.props.quizActions.quizScenarioSelectorChanged(ints);
    };

    getRandom = (arr, n) => {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    };

    makeHandForSvgs = (hand) => {
        const handParts = [...hand];
        const firstCardValue = handParts[0];
        const secondCardValue = handParts[1];
        const isSuited = handParts[2] === "s";

        const availableSuits = ["s", "d", "c", "h"];

        const randomSuits = this.getRandom(availableSuits, 2);
        if (isSuited) {
            return [
                `${firstCardValue}${randomSuits[0]}`,
                `${secondCardValue}${randomSuits[0]}`,
            ];
        }

        return [
            `${firstCardValue}${randomSuits[0]}`,
            `${secondCardValue}${randomSuits[1]}`,
        ];
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

        if (!availableSituationsWithPositionsThatHaveData?.length > 0) {
            alert('No data for this quiz')
            return;
        }

        // only quiz on positions selected if there are some selected
        let situationsThatMeetHerosPositionsToQuiz = [];
        const herosPositionsToQuiz = this.props.herosPositionsToQuiz;
        if (herosPositionsToQuiz?.length > 0) {
            situationsThatMeetHerosPositionsToQuiz = availableSituationsWithPositionsThatHaveData.filter(
                situation => situation.positions.some(pos => herosPositionsToQuiz.includes(pos.key))
            );
        }

        // if heros positions to quiz are selected, we need a situation that includes those positions
        let randomSituation = {};
        if (situationsThatMeetHerosPositionsToQuiz.length > 0) {
            randomSituation =
                situationsThatMeetHerosPositionsToQuiz[
                    Math.floor(
                        Math.random() * situationsThatMeetHerosPositionsToQuiz.length
                    )
                    ];
        } else {
            randomSituation =
                availableSituationsWithPositionsThatHaveData[
                    Math.floor(
                        Math.random() * availableSituationsWithPositionsThatHaveData.length
                    )
                    ];
        }



        let availablePositions = randomSituation.positions;
        if (herosPositionsToQuiz?.length > 0) {
            availablePositions = availablePositions.filter(pos => herosPositionsToQuiz.includes(pos.key));
        }

        const randomPosition =
            availablePositions[Math.floor(Math.random() * availablePositions.length)];

        if (!randomPosition) {
            alert("No ranges set up for this scenario");
            return;
        }

        // if the position selected has an "open" action use the hand range to pick the random hand
        const randomHand = this.generateRandomHand(randomPosition);

        // const randomHand = hands[Math.floor(Math.random() * hands.length)];

        this.props.quizActions.quizGenerated(
            {
                scenarioId: randomSituation.scenarioId,
                situationId: randomSituation.id,
                positionId: randomPosition.id,
            },
            {situation: randomSituation, position: randomPosition, hand: randomHand}
        );
    };

    generateRandomHand = (position) => {
        // if previous actions have handRanges, use those to generate the quiz hand otherwise just choose randomly from the deck
        const previousActionForThisPosition = position.preflopActions.find(pf => pf.actorsPosition === position.key);
        if (previousActionForThisPosition && previousActionForThisPosition.handRange) {
            const handsThatTookAction = previousActionForThisPosition.handRange.handsArray;
            if (handsThatTookAction?.length > 0) {
                const handToQuizAbout = handsThatTookAction[Math.floor(Math.random() * handsThatTookAction.length)].hand;
                return handToQuizAbout;
            }
        }

        return hands[Math.floor(Math.random() * hands.length)];
    }

    getOpenerPosition = (quizPosition) => {
        const openerPosition = quizPosition?.preflopActions?.find(x => x.actionType === "Open")?.actorsPosition || "";
        return openerPosition;
    }

    updateHerosPositionToDrill = (foo) => {
        this.props.quizActions.lockHerosPositionForQuiz(foo);
    }


    renderActionButtons = () => {
        return (
            <Row className="">
                    {!this.props.hasAnswered && (
                        <Button
                            className="action-button"
                            color="danger"
                            onClick={() => this.props.quizActions.quizAnswered("fold")}
                        >
                            Fold
                        </Button>
                    )}
                    {!this.props.hasAnswered && (
                        <Button
                            className="action-button"
                            color="primary"
                            onClick={() => this.props.quizActions.quizAnswered("call")}
                        >
                            Call
                        </Button>
                    )}
                    {!this.props.hasAnswered && (
                        <Button
                            className="action-button"
                            color="success"
                            onClick={() => this.props.quizActions.quizAnswered("raise")}
                        >
                            Raise
                        </Button>
                    )}
                    {this.props.hasAnswered && (
                        <Button
                            className="reset-button"
                            color="primary"
                            onClick={this.startDrill}
                        >
                            Reset
                        </Button>
                    )}
            </Row>
        );
    };

    renderRangeGrid = () => {
        return (
            <Row className={"card-grid-container"}>
                <CardGrid
                    selectedHands={this.props.quizPosition.handRange.hands}
                    quizzedHand={this.props.quizHand}
                />
                <GridLegend/>
            </Row>
        );
    };

    renderPreflopActionDescription = (i) => {
        return (
            <PreflopActionDescription
                key={i}
                preflopActions={this.props.quizPosition.preflopActions}
            />
        )
    }

    render() {
        const playingCards = !this.props.quizHand
            ? null
            : this.makeHandForSvgs(this.props.quizHand).map((card) => {
                return (
                    <PlayingCard
                        key={card}
                        cardText={card}
                        displayName={card}
                        classNameProp="playing-card "
                    />
                );
            });
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
                    <Col sm={1}>
                        <Row>
                        <HerosPositionSelector onChange={this.updateHerosPositionToDrill}/>
                        </Row>
                        <Row>
                            {this.renderPreflopActionDescription()}
                        </Row>
                    </Col>
                    <Col sm="4" className="text-align-center fit-content">
                        <Row>
                            <PokerTable
                                heroPosition={this.props.quizPosition.key}
                                openerPosition={this.getOpenerPosition(this.props.quizPosition)}
                                preflopActions={this.props.quizPosition.preflopActions}
                            ></PokerTable>
                        </Row>
                        <Row><Col className={"playing-cards-container"}>{playingCards}</Col></Row>

                        {this.props.quizHand && this.renderActionButtons()}
                    </Col>
                    <Col sm="4" className={"fit-content"}>{this.props.hasAnswered && this.renderRangeGrid()}</Col>
                    <Col sm="4" className={"fit-content"}>{!this.props.hasAnswered && this.renderPreflopActionDescription()}</Col>
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
        quizHand: state.quiz.hand,
        hasAnswered: state.quiz.hasAnswered,
        herosPositionsToQuiz: state.quiz.herosPositionsToQuiz,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        quizActions: bindActionCreators(quizActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Drill);
