import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const liteScenarios = [
  {
    id: 0,
    displayName: "RFI"
  },
  {
    id: 1,
    displayName: "Facing RFI"
  },
  {
    id: 2,
    displayName: "RFI Facing 3-Bet"
  }
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
        resolve(Object.assign([], hydratedScenarios.find(s => s.id === id)));
      }, delay);
    });
  }
}

export default ScenarioApi;

const hydratedScenarios = [
  {
    id: 1,
    displayName: "RFI",
    situation: [
      {
        id: 1,
        scenarioId: 1,
        opponentsPositionId: 2,
        opponentsPosition: {
          id: 2,
          displayName: "BB"
        },
        herosPositionId: 1,
        herosPosition: {
          id: 1,
          displayName: "SB"
        },
        handRanges: [
          {
            id: 2,
            name: "Raising Range",
            situationId: 1,
            hands: [
              {
                h: "AAo",
                f: 95
              },
              {
                h: "AKs",
                f: 90
              }
            ],
            handsWithFrequencies:
              '[{"h": "AAo", "f": 95}, {"h": "AKs", "f": 90}]'
          }
        ]
      },
      {
        id: 2,
        scenarioId: 1,
        opponentsPositionId: 3,
        opponentsPosition: {
          id: 3,
          displayName: "UTG"
        },
        herosPositionId: 2,
        herosPosition: {
          id: 2,
          displayName: "BB"
        },
        handRanges: [
          {
            id: 3,
            name: "Raising Range",
            situationId: 2,
            hands: [
              {
                h: "AAo",
                f: 95
              },
              {
                h: "AKs",
                f: 90
              },
              {
                h: "AKo",
                f: 85
              }
            ],
            handsWithFrequencies:
              '[{"h": "AAo", "f": 95}, {"h": "AKs", "f": 90}, {"h": "AKo", "f": 85}]'
          }
        ]
      },
      {
        id: 3,
        scenarioId: 1,
        opponentsPositionId: 4,
        opponentsPosition: {
          id: 4,
          displayName: "UTG1"
        },
        herosPositionId: 3,
        herosPosition: {
          id: 3,
          displayName: "UTG"
        },
        handRanges: [
          {
            id: 4,
            name: "Raising Range",
            situationId: 3,
            hands: [
              {
                h: "AAo",
                f: 100
              }
            ],
            handsWithFrequencies: '[{"h": "AAo", "f": 100}]'
          },
          {
            id: 6,
            name: "Folding Range",
            situationId: 3,
            hands: [
              {
                h: "72o",
                f: 100
              }
            ],
            handsWithFrequencies: '[{"h": "72o", "f": 100}]'
          }
        ]
      }
    ]
  }
];
