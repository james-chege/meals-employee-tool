import {
  FETCH_ALL_EMPLOYEES,
  FETCH_ALL_EMPLOYEES_FAILURE,
  FETCH_ALL_EMPLOYEES_SUCCESS,
} from './../constants/actionTypes';

export const fetchAllEmployeesAction = () => ({
  type: FETCH_ALL_EMPLOYEES
});

export const fetchAllEmployeesSuccessAction = (employees) => ({
  type: FETCH_ALL_EMPLOYEES_SUCCESS,
  employees,
});

export const fetchAllEmployeesFailureAction = () => ({
  type: FETCH_ALL_EMPLOYEES_FAILURE,
});
