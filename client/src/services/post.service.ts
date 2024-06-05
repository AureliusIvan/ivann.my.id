// Post Service
import axios from 'axios';
import getConfig from 'next/config';

// Get our configuration of our runtimes
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const apiURL = serverRuntimeConfig.apiURL || publicRuntimeConfig.apiURL || 'http://localhost:4000';

axios.defaults.baseURL = apiURL;
axios.defaults.timeout = 10000;

const PostService = {
  getAll: async () => {
    const response = await axios.get('/api/post/get');
    return response.data.data;
  },
  get: async (id: string) => {
    const response = await axios.get(`/api/post/${id}`);
    return response.data;
  },
  create: async (title: string, body: string) => {
    const response = await axios.post('/api/post', { title, body });
    return response.data;
  },
  update: async (id: string, title: string, body: string) => {
    const response = await axios.put(`/api/post/${id}`, { title, body });
    return response.data;
  },
  delete: async (id: string) => {
    const response = await axios.delete(`/api/post/${id}`);
    return response.data;
  },
};

export default PostService;