import {
  TimeActions,
  PomodoroTime,
  SET_TIME,
  UPDATE_TIME,
  UPDATE_FAILURE,
  UPDATE_SUCCESS,
} from './types';

export function setTime(time: PomodoroTime): TimeActions {
  return {
    type: SET_TIME,
    time
  }
}

export function updateTime(newTime: PomodoroTime): TimeActions {
  return {
    type: UPDATE_TIME,
    newTime
  }
}

export function updateSuccess(newTime: PomodoroTime): TimeActions {
  return {
    type: UPDATE_SUCCESS,
    newTime
  }
}

export function updateFailure(): TimeActions {
  return {
    type: UPDATE_FAILURE,
  }
}
