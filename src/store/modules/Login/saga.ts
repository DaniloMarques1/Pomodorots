import {put, call, takeLatest, all} from 'redux-saga/effects';

import {Http} from '../../../services/http';
import {LOGIN_REQUEST, LoginRequestAction} from './types';
import {loginSuccess, loginFailure} from './action'
import {pomodoroRequest} from '../Pomodoros/action';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../../../routes/rootNavigation';
 
function* loginSaga(action: LoginRequestAction) {
  try {
    const {email, password} = action;
    const response = yield call(Http.post, '/session', {email, password});
    const {token} = response.data;
    yield put(loginSuccess(token));
    yield call(AsyncStorage.setItem, "pomodoro", token); // save the token to use later
    yield put (pomodoroRequest(token));
    navigate("Home");
  } catch(e) {
    yield put(loginFailure());
    const message = e.response.data.error || "Check your internet connection";
    Alert.alert("Error", message);
  }
}

export default all([
  takeLatest(LOGIN_REQUEST, loginSaga)
]);
