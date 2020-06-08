import {all, put, call, takeLatest} from 'redux-saga/effects';

import {POMODOROS_REQUEST, PomodoroRequestAction} from './types'; 
import {pomodoroSuccess, pomodoroFailure} from './action';
import {Http} from '../../../services/http';
import {Alert} from 'react-native';

function* fetchPomodoros(action: PomodoroRequestAction) {
  try {
    const {token} = action;
    const response = yield call(Http.get, '/tasks', {headers: {token}});
    yield put (pomodoroSuccess(response.data));
  } catch(e) {
    const message = e.response.data.error || "Check your internet connection";
    Alert.alert("Error", message);
  }
}

export default all([
  takeLatest(POMODOROS_REQUEST, fetchPomodoros)
]);
