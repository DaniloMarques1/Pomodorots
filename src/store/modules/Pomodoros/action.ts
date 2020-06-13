import {
  PomodoroActions,
  POMODOROS_REQUEST,
  POMODOROS_SUCCESS,
  POMODOROS_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE
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

export function changePasswordRequest(currentPassword: string, newPassword: string, token: string): PomodoroActions {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    token,
    currentPassword,
    newPassword
  }
}

export function changePasswordSuccess(payload: PomodoroPayload): PomodoroActions {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload
  }
}

export function changePasswordFailure(): PomodoroActions {
  return {
    type: CHANGE_PASSWORD_FAILURE
  }
}
