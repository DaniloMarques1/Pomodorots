import {call, put, all, takeLatest} from 'redux-saga/effects';

import {UpdateTime, UPDATE_TIME } from './types';
import {updateSuccess, updateFailure} from './actions';
import AsyncStorage from '@react-native-community/async-storage';

function* updateTimer(action: UpdateTime) {
  try {
    const timer = action.newTime;
    yield call(AsyncStorage.setItem, 'pomodoroTimer', JSON.stringify(timer));
    yield put(updateSuccess(timer));
  } catch(e) {
    yield put(updateFailure());
  }
}

export default all([
  takeLatest(UPDATE_TIME, updateTimer),
]);
