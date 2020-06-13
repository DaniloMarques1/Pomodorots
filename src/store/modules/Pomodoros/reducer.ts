import {
  PomodoroActions,
  POMODOROS_FAILURE,
  POMODOROS_REQUEST,
  POMODOROS_SUCCESS,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE
} from './types';

export interface Pomodoro {
  _id: string;
  title: string;
  qtdPomodoros: number;
  finishedPomodoros: number;
  active: boolean;
  createdAt: string;// is this relevant?
  updatedAt: string; // is this relevant?
  __v: number; // is this relevant?
}

export interface PomodoroPayload {
  tasks?: Array<Pomodoro>;
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  __v?: string; // relevant?
}

export interface StateInterface extends PomodoroPayload {
  loading: boolean;
}

const initialState: StateInterface = {loading: false};

export default function reducer(state = initialState, action: PomodoroActions): StateInterface {
  switch (action.type) {
    case POMODOROS_REQUEST: {
      return {...state, loading:true};
    }
    case POMODOROS_FAILURE: {
      return {...state, loading: false};
    }
    case POMODOROS_SUCCESS: {
      return {...action.payload, loading: false};
    }
    case CHANGE_PASSWORD_REQUEST: {
      return {...state, loading: true};
    }
    case CHANGE_PASSWORD_SUCCESS: {
      return {loading: false, ...action.payload};
    }
    case CHANGE_PASSWORD_FAILURE: {
      return {...state, loading: false};
    }
    default:
      return state;
  }
}
