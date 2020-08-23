import {all} from 'redux-saga/effects';

import loginSaga from './Login/saga';
import pomodoroSaga from './Pomodoros/saga';
import timeSaga from './Timer/saga';

export default function* saga() {
  yield all([
    loginSaga,
    pomodoroSaga,
    timeSaga
  ]);
}
