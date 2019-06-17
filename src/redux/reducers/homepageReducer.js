import {
    FETCH_ALL_EMPLOYEES_SUCCESS,
        } from './../constants/actionTypes';

const initialState = {
            isFetchingFromApi: true,
            allEmployees: [],
}

const homePage = ( state = initialState, action ) => {
    switch(action.type){
        case FETCH_ALL_EMPLOYEES_SUCCESS:
            return{ ...state, allEmployees: [action.allEmployees.data], isFetchingFromApi: false }

        default:
            return state;
    }
}
export default homePage;