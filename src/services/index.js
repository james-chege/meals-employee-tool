import dotenv from 'dotenv';

dotenv.config();

const getBaseUrl = () => {
  return process.env.REACT_APP_BASE_URL;
}

export default getBaseUrl;
