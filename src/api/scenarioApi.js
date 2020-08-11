import delay from "./delay";
import { apiBaseUrl } from "../common/apiConstants";
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const liteScenarios = [
  {
    id: 1,
    displayName: "Open Opportunity",
    situations: [
      {
        id: 1,
        scenarioId: 1,
        displayName: "Unopened Pot",
        positions: [
          {
            key: "UTG",
            situationId: 1,
            handRange: { hands: ["AAo"] },
          },
          {
            key: "HJ",
            situationId: 1,
            handRange: { hands: ["AAo", "KKo", "QQo"] },
          },
          {
            key: "CO",
            situationId: 1,
            handRange: { hands: ["AAo", "KKo", "QQo", "AKs", "AKo"] },
          },
          {
            key: "BTN",
            situationId: 1,
            handRange: {
              hands: ["AAo", "KKo", "QQo", "AKs", "AKo", "AQs", "AQo", "JJo"],
            },
          },
          {
            key: "SB",
            situationId: 1,
            handRange: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    displayName: "3Bet Opportunity",
    situations: [
      {
        id: 2,
        scenarioId: 2,
        displayName: "UTG Open",
        positions: [
          {
            key: "HJ",
            situationId: 2,
            handRange: [],
          },
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
        scenarioId: 2,
        displayName: "HJ Open",
        positions: [
          {
            key: "CO",
            situationId: 3,
            handRange: [],
          },
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
        scenarioId: 2,
        displayName: "CO Open",
        positions: [
          {
            key: "BTN",
            situationId: 4,
            handRange: [],
          },
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
        scenarioId: 2,
        displayName: "BTN Open",
        positions: [
          {
            key: "SB",
            situationId: 5,
            handRange: [],
          },
          {
            key: "BB",
            situationId: 5,
            handRange: [],
          },
        ],
      },
      {
        id: 6,
        scenarioId: 2,
        displayName: "SB Open",
        positions: [
          {
            key: "BB",
            situationId: 6,
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
  static getAllScenarios(id_token) {
    var request = new Request(apiBaseUrl + "scenarios/", {
      headers: {
        Authorization: "Bearer " + id_token,
      },
      method: "GET",
    });
    return fetch(request)
      .then((response) => response.json())
      .then((data) => data);
  }

  static getUserScenarios(authBearer) {
    var request = new Request(apiBaseUrl + "scenarios/GetUserScenarios", {
      headers: {
        Authorization: authBearer,
      },
      method: "GET",
    });
    return fetch(request)
      .then((response) => response.json())
      .then((data) => data);
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
