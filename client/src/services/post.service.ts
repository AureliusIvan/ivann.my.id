// Post Service
import axios from '@/config/axios.config';
const END_POINT = process.env.SERVER_ENDPOINT;

const PostService = {
  getAll: async () => {
    // const response = await axios.get('/api/post/get');
    const response = await fetch(`${END_POINT}/api/post/get`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 3600
      }
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
    return response;
  },
  get: async (id: string) => {
    const response = await axios.get(`/api/posts/${id}`);
    return response.data;
  },
  create: async (title: string, body: string) => {
    const response = await axios.post('/api/posts', { title, body });
    return response.data;
  },
  update: async (id: string, title: string, body: string) => {
    const response = await axios.put(`/api/posts/${id}`, { title, body });
    return response.data;
  },
  delete: async (id: string) => {
    const response = await axios.delete(`/api/posts/${id}`);
    return response.data;
  },
};

export default PostService;