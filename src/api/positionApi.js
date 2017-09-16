class PositionApi {
  static getAllPositions() {
    var request = new Request("http://localhost:50338/api/positions/", {
      method: "GET"
    });
    return fetch(request)
      .then(response => response.json())
      .then(data => data.positions);
  }
}

export default PositionApi;
