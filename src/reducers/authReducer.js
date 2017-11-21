import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return action.auth;

    default:
      return state;
  }
}
