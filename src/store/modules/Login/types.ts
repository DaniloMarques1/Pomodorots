export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT        = "LOGOUT";

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  email: string;
  password: string;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  token: string;
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type LoginActions = LoginRequestAction | LoginSuccessAction | LoginFailureAction | LogoutAction;
