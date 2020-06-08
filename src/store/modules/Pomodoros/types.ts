import {User, Pomodoro} from './reducer';

export const POMODOROS_REQUEST = "POMODOROS_REQUEST";
export const POMODOROS_SUCCESS = "POMODOROS_SUCCESS";
export const POMODOROS_FAILURE = "POMODOROS_FAILURE";



export interface PomodoroRequestAction {
  type: typeof POMODOROS_REQUEST,
  token: string;
}

export interface PomodoroSuccessAction {
  type: typeof POMODOROS_SUCCESS
  payload: PomodoroPayload;
}

// FETCH
export interface PomodoroFailureAction {
  type: typeof POMODOROS_FAILURE
}


export type PomodoroActions = PomodoroRequestAction | PomodoroSuccessAction | PomodoroFailureAction;
