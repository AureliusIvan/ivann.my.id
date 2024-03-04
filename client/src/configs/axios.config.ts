import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  // timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// if axios didn't work, return this
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;