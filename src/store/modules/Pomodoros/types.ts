import {PomodoroPayload} from './reducer';

export const POMODOROS_REQUEST       = "POMODOROS_REQUEST";
export const POMODOROS_SUCCESS       = "POMODOROS_SUCCESS";
export const POMODOROS_FAILURE       = "POMODOROS_FAILURE";
export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";

export interface PomodoroRequestAction {
  type: typeof POMODOROS_REQUEST,
  token: string;
}

export interface PomodoroSuccessAction {
  type: typeof POMODOROS_SUCCESS
  payload: PomodoroPayload;
}

export interface PomodoroFailureAction {
  type: typeof POMODOROS_FAILURE
}

export interface ChangePasswordRequestAction {
  type: typeof CHANGE_PASSWORD_REQUEST;
  token: string;
  currentPassword: string;
  newPassword: string;
}

export interface ChangePasswordSuccessAction {
  type: typeof CHANGE_PASSWORD_SUCCESS;
  payload: PomodoroPayload;
}

export interface ChangePasswordFailureAction {
  type: typeof CHANGE_PASSWORD_FAILURE;
}

export type PomodoroActions = PomodoroRequestAction | PomodoroSuccessAction | PomodoroFailureAction |
                               ChangePasswordRequestAction | ChangePasswordSuccessAction | ChangePasswordFailureAction;
