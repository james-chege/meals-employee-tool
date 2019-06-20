import {combineReducers} from 'redux';
import employee from './employeeReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  auth,
  employee,
});

export default rootReducer;
