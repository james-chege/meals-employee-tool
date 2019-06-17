/* eslint-disable require-yield */
import { takeLatest, call, put } from 'redux-saga/effects';
import { 
    FETCH_ALL_EMPLOYEES
    } from './../constants/actionTypes';
import homePageService from './../../services/homePageService';
import { 
    fetchAllEmployeesSuccessAction,
    } from './../actionCreator/homePageActions';


export function* fetchAllEmployeesSagaWatcher(){
    yield takeLatest(FETCH_ALL_EMPLOYEES, fetchAllEmployeesSaga)
}
export function* fetchAllEmployeesSaga(){
    try{
        const service = homePageService.getAllEmployees;
        const allEmployees = yield call(service);
        yield put(fetchAllEmployeesSuccessAction(allEmployees)); 
    } catch {
        console.log('THE EMPLOYEE FETCHING FAILED');
    }
}