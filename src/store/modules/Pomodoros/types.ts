import {PomodoroPayload, Pomodoro} from './reducer';

export const POMODOROS_REQUEST       = "POMODOROS_REQUEST";
export const POMODOROS_SUCCESS       = "POMODOROS_SUCCESS";
export const POMODOROS_FAILURE       = "POMODOROS_FAILURE";
export const ADD_POMODOROS_REQUEST   = "ADD_POMODOROS_REQUEST";
export const ADD_POMODOROS_SUCCESS   = "ADD_POMODOROS_SUCCESS";
export const ADD_POMODOROS_FAILURE   = "ADD_POMODOROS_FAILURE";
export const DELETE_POMODORO_REQUEST = "DELETE_POMODORO_REQUEST";
export const DELETE_POMODORO_SUCCESS = "DELETE_POMODORO_SUCCESS";
export const DELETE_POMODORO_FAILURE = "DELETE_POMODORO_FAILURE";
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

export interface AddPomodorosRequestAction {
  type: typeof ADD_POMODOROS_REQUEST;
  title: string;
  qtdPomodoros: number;
  token: string;
}

export interface AddPomodoroSuccessAction {
  type: typeof ADD_POMODOROS_SUCCESS;
  pomodoro: Pomodoro;
}

export interface AddPomodoroFailureAction {
  type: typeof ADD_POMODOROS_FAILURE;
}

export interface DeletePomodoroRequestAction {
  type: typeof DELETE_POMODORO_REQUEST,
  id: string;
  token: string;
}

export interface DeletePomodoroSucessAction {
  type: typeof DELETE_POMODORO_SUCCESS;
  pomodoro: Pomodoro;
}

export interface DeletePomodoroFailureAction {
  type: typeof DELETE_POMODORO_FAILURE;
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


export type PomodoroActions =
  | PomodoroRequestAction
  | PomodoroSuccessAction
  | PomodoroFailureAction
  | ChangePasswordRequestAction
  | ChangePasswordSuccessAction
  | ChangePasswordFailureAction
  | AddPomodorosRequestAction
  | AddPomodoroSuccessAction
  | AddPomodoroFailureAction
  | DeletePomodoroRequestAction
  | DeletePomodoroSucessAction
  | DeletePomodoroFailureAction;
