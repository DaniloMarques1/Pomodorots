import {all} from 'redux-saga/effects';

import loginSaga from './Login/saga';

export default function* saga() {
  yield all([
    loginSaga
  ]);
}
