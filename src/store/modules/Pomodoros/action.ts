import {
  PomodoroActions,
  POMODOROS_REQUEST,
  POMODOROS_SUCCESS,
  POMODOROS_FAILURE,
} from './types';
import {PomodoroPayload} from './reducer';

export function pomodoroRequest(token: string): PomodoroActions {
  return {
    type: POMODOROS_REQUEST,
    token
  }
}

export function pomodoroSuccess(payload: PomodoroPayload): PomodoroActions {
  return {
    type: POMODOROS_SUCCESS,
    payload
  }
}

export function pomodoroFailure(): PomodoroActions {
  return {
    type: POMODOROS_FAILURE
  }
}
