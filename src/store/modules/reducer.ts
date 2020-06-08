import {combineReducers} from 'redux';

import loginReducer from './Login/reducer';
import pomodoroReducer from './Pomodoros/reducer';

export default combineReducers({
  loginReducer,
  pomodoroReducer
});
