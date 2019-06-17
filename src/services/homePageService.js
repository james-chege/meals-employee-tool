import axios from 'axios';
import baseUrl from './index';

export default class homePageService{
    API_KEY = process.env.API_KEY;
    static async getAllEmployees(){
        const url = `${baseUrl()}/v1/employees`;
        const response = axios(
            {
                method: 'get',
                url: url,
                headers: {
                    SECURE_PASS: 1234
                }
            }
        );
        return response;

    }
} 