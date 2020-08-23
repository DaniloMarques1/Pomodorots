import {combineReducers} from 'redux';

import loginReducer from './Login/reducer';
import pomodoroReducer from './Pomodoros/reducer';
import timeState from './Timer/reducer';

export default combineReducers({
  loginReducer,
  pomodoroReducer,
  timeState
});
