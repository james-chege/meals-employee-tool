import {
  UPDATE_PASSWORD,
} from './../constants/actionTypes';

export const updatePasswordAction = (password) => ({
  type: UPDATE_PASSWORD,
  password
});
