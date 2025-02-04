import axios from 'axios';
import getBaseUrl from './index';
import store from '../redux/store/store';

export default class homePageService {
  static async getAllEmployees() {
    const url = `${getBaseUrl()}/employees?perPage=${5000}`;
    return axios(
      {
        method: 'get',
        url,
        headers: {
          SECURE_PASS: store.getState().auth.password
        }
      }
    );
  }
}
