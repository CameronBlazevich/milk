class HandRangeApi {
  static getHandRanges() {
    var request = new Request("http://localhost:50338/api/handRanges/", {
      method: "GET"
    });
    return fetch(request).then(response => response.json());
  }

  static updateHandRange(handRange) {
    var request = new Request("http://localhost:50338/api/handRanges/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        position: handRange.position,
        hands: handRange.hands
      })
    });

    return fetch(request).then(response => response.json());
  }
}

export default HandRangeApi;