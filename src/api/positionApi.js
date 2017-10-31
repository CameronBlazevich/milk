class PositionApi {
  static getAllPositions(id_token) {
    var request = new Request("http://localhost:50338/api/positions/", {
      headers: {
        Authorization: "Bearer " + id_token
      },
      method: "GET"
    });
    return fetch(request)
      .then(response => response.json())
      .then(data => data.positions);
  }
}

export default PositionApi;
