export default {
  quizResults: {
    correctlySelectedHands: [],
    incorrectlySelectedHands: [],
    handsThatShouldHaveBeenSelectedButWerent: [],
    hasCheckedAnswer: false
  },
  scenarios: [],
  selectedScenarioId: null,
  hasCheckedAnswer: false,
  selectedHands: [],
  positions: [],
  selectedPositionId: 0,
  handRanges: [],
  mode: "PLAY",
  sliderValue: 0,
  auth: { isAuthenticated: false, id_token: "" },
  isLoading: false,
  hydratedScenario: {}
};
