import {PomodoroTime, TimeActions, SET_TIME, UPDATE_TIME, UPDATE_SUCCESS, UPDATE_FAILURE} from './types';

export interface TimeState {
  timer: PomodoroTime;
  loading: boolean;
}

const initialState: TimeState = {timer: {pomodoroTime: {minute: 25, second: 0}, breakTime: {minute: 5, second: 9}}, loading: false}

export default function reducer(state=initialState, action: TimeActions): TimeState {
  switch(action.type) {
    case SET_TIME: {
      return {...state, timer: action.time};
    }
    case UPDATE_TIME: {
      return {...state, loading: true};
    }
    case UPDATE_SUCCESS: {
      return {...state, loading: false, timer: action.newTime};
    }
    case UPDATE_FAILURE: {
      return {...state, loading: false};
    }
    default:
      return state;
  }
}
