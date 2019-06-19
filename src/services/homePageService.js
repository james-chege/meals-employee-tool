import axios from 'axios';
import baseUrl from './index';
import dotenv from 'dotenv';

dotenv.config();


export default class homePageService{
    API_KEY = process.env.API_KEY;
    static async getAllEmployees(){
        const url = `${baseUrl()}/employees`;
        const response = axios(
            {
                method: 'get',
                url,
                headers: {
                    SECURE_PASS: process.env.REACT_APP_SECURE_PASS
                }
            }
        );
        return response;

    }
} 