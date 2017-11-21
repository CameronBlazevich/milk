class PositionApi {
  static getAllPositions(id_token) {
    var request = new Request(
      "http://www.handrangememorizer.com/api/positions/",
      {
        headers: {
          Authorization: "Bearer " + id_token
        },
        method: "GET"
      }
    );
    return fetch(request)
      .then(response => response.json())
      .then(data => data.positions);
  }
}

export default PositionApi;
