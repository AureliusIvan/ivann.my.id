// import { useState } from 'react';
import axiosInstance from '@/configs/axios.config'

const getPosts = async () => {
  const response = await axiosInstance.get(`http://localhost:4000/api/post/get`)
  console.log(response.data.data)
  return response.data.data
}


const getPost = async (slug: string) => {
  const response = await axiosInstance.get(`http://localhost:4000/api/post/get/${slug}`)
  return response.data.data
}



// const usePosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setIsLoading(true);
//       setError(null);

//       try {
//         const response = await axiosInstance.get(`http://localhost:4000/api/post/get`);
//         setPosts(response.data.data);
//       } catch (error: any) {
//         console.error(error);
//         setError(error); // Handle error appropriately in your application
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return { posts, isLoading, error };
// };


export { getPosts, getPost }

// Path: src/services/contents/post.service.tsx
