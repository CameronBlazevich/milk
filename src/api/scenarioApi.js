import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const liteScenarios = [
  {
    id: 0,
    displayName: "Open Opportunity",
    situations: [
      {
        id: 0,
        scenarioId: 0,
        displayName: "Unopened Pot",
        positions: [
          {
            key: "UTG",
            situationId: 0,
            handRange: [],
          },
          {
            key: "HJ",
            situationId: 0,
            handRange: [],
          },
          {
            key: "CO",
            situationId: 0,
            handRange: [],
          },
          {
            key: "BTN",
            situationId: 0,
            handRange: [],
          },
          {
            key: "SB",
            situationId: 0,
            handRange: [],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    displayName: "3Bet Opportunity",
    situations: [
      {
        id: 1,
        scenarioId: 1,
        displayName: "UTG Open",
        positions: [
          {
            key: "HJ",
            situationId: 1,
            handRange: [],
          },
          {
            key: "CO",
            situationId: 1,
            handRange: [],
          },
          {
            key: "BTN",
            situationId: 1,
            handRange: [],
          },
          {
            key: "SB",
            situationId: 1,
            handRange: [],
          },
          {
            key: "BB",
            situationId: 1,
            handRange: [],
          },
        ],
      },
      {
        id: 2,
        scenarioId: 1,
        displayName: "HJ Open",
        positions: [
          {
            key: "CO",
            situationId: 2,
            handRange: [],
          },
          {
            key: "BTN",
            situationId: 2,
            handRange: [],
          },
          {
            key: "SB",
            situationId: 2,
            handRange: [],
          },
          {
            key: "BB",
            situationId: 2,
            handRange: [],
          },
        ],
      },
      {
        id: 3,
        scenarioId: 1,
        displayName: "CO Open",
        positions: [
          {
            key: "BTN",
            situationId: 3,
            handRange: [],
          },
          {
            key: "SB",
            situationId: 3,
            handRange: [],
          },
          {
            key: "BB",
            situationId: 3,
            handRange: [],
          },
        ],
      },
      {
        id: 4,
        scenarioId: 1,
        displayName: "BTN Open",
        positions: [
          {
            key: "SB",
            situationId: 4,
            handRange: [],
          },
          {
            key: "BB",
            situationId: 4,
            handRange: [],
          },
        ],
      },
      {
        id: 5,
        scenarioId: 1,
        displayName: "SB Open",
        positions: [
          {
            key: "BB",
            situationId: 5,
            handRange: [],
          },
        ],
      },
    ],
  },
  // {
  //   id: 2,
  //   displayName: "Open Facing 3-Bet",
  // },
];

class ScenarioApi {
  static getAllScenarios() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], liteScenarios));
      }, delay);
    });
  }

  static getHydratedScenario(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          Object.assign(
            [],
            hydratedScenarios.find((s) => s.id === id)
          )
        );
      }, delay);
    });
  }
}

export default ScenarioApi;

const hydratedScenarios = [
  {
    id: 1,
    displayName: "RFI",
    situations: [
      {
        id: 1,
        scenarioId: 1,
        opponentsPositionId: 2,
        opponentsPosition: {
          id: 2,
          displayName: "BB",
        },
        herosPositionId: 1,
        herosPosition: {
          id: 1,
          displayName: "SB",
        },
        handRanges: [
          {
            id: 2,
            name: "Raising Range",
            situationId: 1,
            hands: [
              {
                h: "AAo",
                f: 95,
              },
              {
                h: "AKs",
                f: 90,
              },
            ],
            handsWithFrequencies:
              '[{"h": "AAo", "f": 95}, {"h": "AKs", "f": 90}]',
          },
        ],
      },
      {
        id: 2,
        scenarioId: 1,
        opponentsPositionId: 3,
        opponentsPosition: {
          id: 3,
          displayName: "UTG",
        },
        herosPositionId: 2,
        herosPosition: {
          id: 2,
          displayName: "BB",
        },
        handRanges: [
          {
            id: 3,
            name: "Raising Range",
            situationId: 2,
            hands: [
              {
                h: "AAo",
                f: 95,
              },
              {
                h: "AKs",
                f: 90,
              },
              {
                h: "AKo",
                f: 85,
              },
            ],
            handsWithFrequencies:
              '[{"h": "AAo", "f": 95}, {"h": "AKs", "f": 90}, {"h": "AKo", "f": 85}]',
          },
        ],
      },
      {
        id: 3,
        scenarioId: 1,
        opponentsPositionId: 4,
        opponentsPosition: {
          id: 4,
          displayName: "UTG1",
        },
        herosPositionId: 3,
        herosPosition: {
          id: 3,
          displayName: "UTG",
        },
        handRanges: [
          {
            id: 4,
            name: "Raising Range",
            situationId: 3,
            hands: [
              {
                h: "AAo",
                f: 100,
              },
            ],
            handsWithFrequencies: '[{"h": "AAo", "f": 100}]',
          },
          {
            id: 6,
            name: "Folding Range",
            situationId: 3,
            hands: [
              {
                h: "72o",
                f: 100,
              },
            ],
            handsWithFrequencies: '[{"h": "72o", "f": 100}]',
          },
        ],
      },
    ],
  },
];
