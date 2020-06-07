import {
  LoginActions,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './types';

export function loginRequest(email: string, password: string): LoginActions {
  return {
    type: LOGIN_REQUEST,
    email,
    password,
  };
}

export function loginSuccess(token: string): LoginActions {
  return {
    type: LOGIN_SUCCESS,
    token
  }
}

export function loginFailure(): LoginActions {
  return {
    type: LOGIN_FAILURE
  }
}

export function logout(): LoginActions {
  return {
    type: LOGOUT
  }
}
