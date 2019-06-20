import {
  FETCH_ALL_EMPLOYEES_FAILURE,
  FETCH_ALL_EMPLOYEES_SUCCESS,
} from './../constants/actionTypes';

const initialState = {
  all: [],
  success: false,
  isFetching: false,
  fetchedAtLeastOnce: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_EMPLOYEES_SUCCESS:
      return {
        ...state,
        success: true,
        isFetching: false,
        fetchedAtLeastOnce: true,
        all: action.employees.data.data.employees,
      }

    case FETCH_ALL_EMPLOYEES_FAILURE:
      return {
        ...state,
        all: [],
        fail: false,
        isFetching: false,
        fetchedAtLeastOnce: true
      }

    default:
      return state;
  }
}
