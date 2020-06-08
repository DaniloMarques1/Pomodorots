import {put, call, takeLatest, all} from 'redux-saga/effects';

import {Http} from '../../../services/http';
import {LOGIN_REQUEST, LoginRequestAction} from './types';
import {loginSuccess, loginFailure} from './action'

function* loginSaga(action: LoginRequestAction) {
  try {
    const {email, password} = action;
    const response = yield call(Http.post, '/session', {email, password});
    console.log(response.data.token);
    yield put(loginSuccess(response.data.token));
  } catch(e) {
    console.log("error");
    yield put(loginFailure());
  }
}

export default all([
  takeLatest(LOGIN_REQUEST, loginSaga)
]);
