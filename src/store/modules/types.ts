import {LoginState} from './Login/reducer';
import {StateInterface} from './Pomodoros/reducer';
import {TimeState} from './Timer/reducer';

export interface Store {
  loginReducer: LoginState;
  pomodoroReducer: StateInterface;
  timeState: TimeState;
}
