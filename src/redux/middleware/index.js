import { all } from 'redux-saga/effects';
import {
    fetchAllEmployeesSagaWatcher,
    } from './homepageSaga';

function* rootSaga(){
    yield all([
        fetchAllEmployeesSagaWatcher(),
    ]);
}

export default rootSaga;