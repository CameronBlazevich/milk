import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const handRanges = [
  {
    userId: 0,
    position: 0,
    hands: [
      "AKo",
      "KKo",
      "KJo",
      "KQo",
      "QQo",
      "QJo",
      "JJo",
      "JTo",
      "J9o",
      "Q9o",
      "QTo",
      "KTo",
      "A9o",
      "K9o",
      "ATo",
      "AJo",
      "AQo",
      "AAo",
      "AKs"
    ]
  },
  { userId: 0, position: 1, hands: ["AAo", "KKo", "QQo", "A5s"] },
  {
    userId: 0,
    position: 2,
    hands: [
      "22o",
      "33o",
      "44o",
      "55o",
      "66o",
      "77o",
      "88o",
      "99o",
      "TTo",
      "JJo",
      "QQo",
      "KKo",
      "AAo",
      "AKo",
      "AKs",
      "AQs",
      "KQs",
      "AJs",
      "KJs",
      "ATs",
      "A5s",
      "AQo",
      "JTs",
      "QJs"
    ]
  },
  { userId: 0, position: 3, hands: ["AAo", "KKo", "AKo", "KQs", "AQs", "AKs"] }
];

class HandRangeApi {
  static getHandRanges() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], handRanges));
      }, delay);
    });
  }

  static updateHandRange(handRange) {
    handRange = Object.assign({}, handRange); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (handRanges.find(range => range.position === handRange.position)) {
          const existingHandRangeIndex = handRanges.findIndex(
            a => a.position === handRange.position
          );
          handRanges.splice(existingHandRangeIndex, 1, handRange);
        } else {
          //Just simulating creation here.
          handRanges.push(handRange);
        }

        resolve(handRange);
      }, delay);
    });
  }
}

export default HandRangeApi;
