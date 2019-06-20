import {
  UPDATE_PASSWORD,
} from './../constants/actionTypes';

const initialState = {
  password: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return {...state, password: action.password}

    default:
      return state;
  }
}
