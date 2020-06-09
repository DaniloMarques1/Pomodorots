import {LoginState} from './Login/reducer';
import {StateInterface} from './Pomodoros/reducer';

export interface Store {
  loginReducer: LoginState;
  pomodoroReducer: StateInterface;
}
