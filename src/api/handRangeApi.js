import { apiBaseUrl } from "../common/apiConstants";

class HandRangeApi {
  static getHandRanges(authBearer) {
    var request = new Request(apiBaseUrl + "handRanges/", {
      headers: {
        Authorization: authBearer,
      },
      method: "GET",
    });
    return fetch(request).then((response) => response.json());
  }

  static updateHandRange(positionKey, hands, authBearer) {
    var request = new Request(apiBaseUrl + "handRanges/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authBearer,
      },
      method: "POST",
      body: JSON.stringify({
        positionKey,
        hands,
      }),
    });

    return fetch(request).then((response) => response.json());
  }
}

export default HandRangeApi;
