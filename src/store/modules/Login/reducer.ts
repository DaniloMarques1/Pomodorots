import {
  LoginActions,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './types';

export interface LoginState {
  token: string | null;
  loading: boolean;
}
const initialState: LoginState = {token: null, loading: false};

export default function reducer(state = initialState, action: LoginActions): LoginState {
  switch(action.type) {
    case LOGIN_REQUEST: {
      return {token: null, loading: true};
    }
    case LOGIN_SUCCESS: {
      return {loading: false, token: action.token};
    }
    case LOGIN_FAILURE:
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
