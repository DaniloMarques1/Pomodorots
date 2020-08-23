export const UPDATE_TIME    = "UPDATE_TIMER";
export const SET_TIME       = "SET_TIME"; 
export const UPDATE_SUCCESS = "UPDATE_SUCCESS"; 
export const UPDATE_FAILURE = "UPDATE_FAILURE"; 

export interface PomodoroTime {
  breakTime: Time;
  pomodoroTime: Time;
}

//model
export interface Time {
  minute: number;
  second: number;
}

export interface UpdateTime {
  type: typeof UPDATE_TIME;
  newTime: PomodoroTime;
}

export interface UpdateSuccess {
  type: typeof UPDATE_SUCCESS; 
  newTime: PomodoroTime;
}

export interface UpdateFailure {
  type: typeof UPDATE_FAILURE; 
}

interface SetTime {
  type: typeof SET_TIME;
  time: PomodoroTime
}

export type TimeActions = UpdateTime | SetTime | UpdateSuccess | UpdateFailure;
