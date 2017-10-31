import * as ActionTypes from "./actionTypes";

export function receiveLogin(user) {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    auth: {
      isAuthenicated: true,
      id_token: user.idToken,
      bearerToken: user.bearerToken
    }
  };
}
