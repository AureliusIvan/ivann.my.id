// Axios COnfig
import axios from 'axios';

let axiosInstance = axios.create({
  baseURL: process.env.SERVER_ENDPOINT || 'http://localhost:4000',
  withCredentials: true,
});



export default axiosInstance;