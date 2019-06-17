import {
    FETCH_ALL_EMPLOYEES,
    FETCH_ALL_EMPLOYEES_SUCCESS
    } from './../constants/actionTypes';


export const fetchAllEmployeesAction = () => ({
type: FETCH_ALL_EMPLOYEES
});

export const fetchAllEmployeesSuccessAction = (allEmployees) => ({
type: FETCH_ALL_EMPLOYEES_SUCCESS,
allEmployees,
});