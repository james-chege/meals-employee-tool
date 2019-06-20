import {all} from 'redux-saga/effects';
import {
  fetchAllEmployeesSagaWatcher,
} from './employeeSaga';

function* rootSaga() {
  yield all([
    fetchAllEmployeesSagaWatcher(),
  ]);
}

export default rootSaga;
