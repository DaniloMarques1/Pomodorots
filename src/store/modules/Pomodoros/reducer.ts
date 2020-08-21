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
  DELETE_POMODORO_FAILURE,
  UPDATE_POMODORO_REQUEST,
  UPDATE_POMODORO_SUCCESS,
  UPDATE_POMODORO_FAILURE,
  LOGOUT
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
  addLoading: boolean;
  changePasswordLoading: boolean;
  deleteLoading: boolean;
  getPomodoroLoading: boolean;
}

const initialState: StateInterface = {addLoading: false, changePasswordLoading: false, deleteLoading: false, getPomodoroLoading: false};

export default function reducer(state = initialState, action: PomodoroActions): StateInterface {
  switch (action.type) {
    case POMODOROS_REQUEST: {
      return {...state, getPomodoroLoading:true};
    }
    case POMODOROS_FAILURE: {
      return {...state, getPomodoroLoading: false};
    }
    case POMODOROS_SUCCESS: {
      return {...action.payload, ...state, getPomodoroLoading: false};
    }
    case ADD_POMODOROS_REQUEST: {
      return {...state, addLoading: true};
    }
    case ADD_POMODOROS_SUCCESS: {
      const tasks = state.tasks?.slice(0);
      tasks?.push(action.pomodoro);

      return {...state, addLoading: false, tasks};
    }
    case ADD_POMODOROS_FAILURE: {
      return {...state, addLoading: false};
    }
    case CHANGE_PASSWORD_REQUEST: {
      return {...state, changePasswordLoading: true};
    }
    case CHANGE_PASSWORD_SUCCESS: {
      return {...state, changePasswordLoading: false, ...action.payload};
    }
    case CHANGE_PASSWORD_FAILURE: {
      return {...state, changePasswordLoading: false};
    }
    case DELETE_POMODORO_REQUEST: {
      return {...state, deleteLoading: true};
    }
    case DELETE_POMODORO_SUCCESS: {
      return {
        ...state,
        deleteLoading: false,
        tasks: state.tasks?.filter(task => task._id !== action.pomodoro._id)
      }; 
    }
    case DELETE_POMODORO_FAILURE: {
      return {...state, deleteLoading: false};
    }
    case UPDATE_POMODORO_REQUEST: {
      return {...state, getPomodoroLoading: true};
    }
    case UPDATE_POMODORO_SUCCESS: {
      let nTasks;
      if (action.pomodoro.active === false)
        nTasks = state.tasks?.filter(task => task._id !== action.pomodoro._id);
      else {
        nTasks = state.tasks?.map(task => {
          if (task._id !== action.pomodoro._id)
            return task;
          return action.pomodoro;
        });
      }
      
      return  {...state, getPomodoroLoading: false, tasks: nTasks};
    }
    case UPDATE_POMODORO_FAILURE: {
      return {...state, getPomodoroLoading: false};
    }
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
}
