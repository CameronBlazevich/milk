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
    userScenarios: [],
    hasCheckedAnswer: false,
  },
  scenarios: [],
  selectedScenarioId: null,
  hasCheckedAnswer: false,
  selectedHands: [],
  selectedPositionKey: 0,
  handRanges: [],
  mode: "PLAY",
  sliderValue: 0,
  auth: { isAuthenticated: false, id_token: "" },
  isLoading: false,
};
