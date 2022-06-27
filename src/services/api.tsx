import axios from 'axios';
import config from '../App.json';
// import { localData } from 'src/providers/Data';

const baseURL = config.ApiConfig.baseUrl;
const key = config.ApiConfig.key;

const instance = axios.create({
  baseURL,
//   headers: {
//     'Ocp-Apim-Subscription-Key': key,
//     Authorization: localData?.auth
//       ? `Bearer ${localData.auth.accessToken}`
//       : false,
//   },
});

export const api = instance;
