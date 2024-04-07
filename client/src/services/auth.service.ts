// Auth Service
// import axios from 'axios';
import axios from '@/config/axios.config';

const AuthService = {
  login: async (email: string, password: string) => {
    const response = await axios.post('/api/auth/login', { email, password }).then((res) => {
      console.log(res.data);
    })
      .catch((err) => {
        console.error(err);
      });
    return response;
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