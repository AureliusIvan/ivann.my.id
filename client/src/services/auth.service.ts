// Auth Service
import axios from 'axios';
const apiURL = 'http://localhost:4000';

axios.defaults.baseURL = apiURL;
axios.defaults.timeout = 10000;

const AuthService = {
  login: async (email: string, password: string) => {
    const response = await axios.post('/api/auth/login', { email, password });
    // console.log(response)
    return response.data.data
  },
  register: async (email: string, password: string) => {
    const response = await axios.post('/api/auth/register', { email, password });
    return response.data;
  },
  logout: async () => {
    const response = await axios.post('/api/auth/logout');
    return response.data;
  },
  me: async () => {
    const response = await axios.get('/api/auth/me');
    return response.data;
  },
};

export default AuthService;