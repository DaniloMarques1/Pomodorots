import {all, put, call, takeLatest} from 'redux-saga/effects';

import {
  POMODOROS_REQUEST,
  PomodoroRequestAction,
  CHANGE_PASSWORD_REQUEST,
  ChangePasswordRequestAction,
} from './types'; 
import {
  pomodoroSuccess,
  pomodoroFailure,
  changePasswordSuccess,
  changePasswordFailure,
} from './action';
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
    yield put(pomodoroFailure());
  }
}

function* changePassword(action: ChangePasswordRequestAction) {
  try {
    const {currentPassword, newPassword, token} = action;
    const response = yield call(
      Http.put,
      '/users',
      {currentPassword, newPassword},
      {
        headers: {
          token,
        },
      },
    );

    yield put(changePasswordSuccess(response.data));
  } catch(e) {
    const message = e.response.data.error || "Check your internet connection";
    Alert.alert("Error", message);
    yield put(changePasswordFailure());
  }
}

export default all([
  takeLatest(POMODOROS_REQUEST, fetchPomodoros),
  takeLatest(CHANGE_PASSWORD_REQUEST, changePassword)
]);
