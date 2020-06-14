import {
  PomodoroActions,
  POMODOROS_FAILURE,
  POMODOROS_REQUEST,
  POMODOROS_SUCCESS,
  ADD_POMODOROS_REQUEST,
  ADD_POMODOROS_SUCCESS,
  ADD_POMODOROS_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  DELETE_POMODORO_REQUEST,
  DELETE_POMODORO_SUCCESS,
  DELETE_POMODORO_FAILURE
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
    case ADD_POMODOROS_REQUEST: {
      return {...state, loading: true};
    }
    case ADD_POMODOROS_SUCCESS: {
      const tasks = state.tasks?.slice(0);
      tasks?.push(action.pomodoro);

      return {...state, loading: false, tasks};
    }
    case ADD_POMODOROS_FAILURE: {
      return {...state, loading: false};
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
    case DELETE_POMODORO_REQUEST: {
      return {...state, loading: true};
    }
    case DELETE_POMODORO_SUCCESS: {
      return {
        ...state,
        loading: false,
        tasks: state.tasks?.filter(task => task._id !== action.pomodoro._id)
      }; 
    }
    case DELETE_POMODORO_FAILURE: {
      return {...state, loading: false};
    }
    default:
      return state;
  }
}
