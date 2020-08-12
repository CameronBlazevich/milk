export default {
  quiz: {
    scenarioIds: [],
    quizKey: {
      scenarioId: null,
      situationId: null,
      positionId: null,
    },
    position: { handRange: { hands: [] } },
    situation: {},
    hand: "",
    userScenarios: [],
    hasAnswered: false,
  },
  scenarios: [],
  selectedScenarioId: null,
  selectedHands: [],
  selectedPositionKey: 0,
  handRanges: [],
  mode: "PLAY",
  sliderValue: 0,
  auth: { isAuthenticated: false, id_token: "" },
  isLoading: false,
};
