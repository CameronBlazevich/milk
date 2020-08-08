export function getAuthToken(auth) {
  const access_token = auth.getAccessToken();
  const authBearer = "Bearer " + access_token;
  return authBearer;
}
