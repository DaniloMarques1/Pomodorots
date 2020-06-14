import {all, put, call, takeLatest} from 'redux-saga/effects';

import {
  POMODOROS_REQUEST,
  ADD_POMODOROS_REQUEST,
  AddPomodorosRequestAction,
  PomodoroRequestAction,
  CHANGE_PASSWORD_REQUEST,
  ChangePasswordRequestAction,
} from './types'; 
import {
  pomodoroSuccess,
  pomodoroFailure,
  changePasswordSuccess,
  changePasswordFailure,
  addPomodoroFailure,
  addPomodoroSuccess
} from './action';
import {Http} from '../../../services/http';
import {Alert} from 'react-native';
import {navigate} from '../../../routes/rootNavigation';

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

function* addPomodoro(action: AddPomodorosRequestAction) {
  try {
    const {title, qtdPomodoros, token} = action;
    const response = yield call(
      Http.post,
      '/tasks',
      {title, qtdPomodoros},
      {
        headers: {
          token,
        },
      },
    );
    yield put(addPomodoroSuccess(response.data));
    navigate("Home");
  } catch(e) {
    const message = e.response.data.error || 'Check your internet connection';
    Alert.alert('Error', message);
    yield put(addPomodoroFailure());

  }
}

export default all([
  takeLatest(POMODOROS_REQUEST, fetchPomodoros),
  takeLatest(CHANGE_PASSWORD_REQUEST, changePassword),
  takeLatest(ADD_POMODOROS_REQUEST, addPomodoro)
]);
