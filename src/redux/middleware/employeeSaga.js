/* eslint-disable require-yield */
import {takeLatest, call, put} from 'redux-saga/effects';
import {
  FETCH_ALL_EMPLOYEES
} from './../constants/actionTypes';
import homePageService from './../../services/homePageService';
import {
  fetchAllEmployeesSuccessAction,
  fetchAllEmployeesFailureAction
} from '../actionCreators/employeeActions';


export function* fetchAllEmployeesSagaWatcher() {
  yield takeLatest(FETCH_ALL_EMPLOYEES, fetchAllEmployeesSaga)
}

export function* fetchAllEmployeesSaga() {
  try {
    const service = homePageService.getAllEmployees;
    const employees = yield call(service);
    yield put(fetchAllEmployeesSuccessAction(employees));
  } catch {
    yield put(fetchAllEmployeesFailureAction());
  }
}
