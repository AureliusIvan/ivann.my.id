import axiosInstance from '@/configs/axios.config'

const getPosts = async () => {
  const response = await axiosInstance.get(`http://localhost:4000/api/post/get`)
  console.log(response.data)
  return response.data.data
}


const getPost = async (slug: string) => {
  const response = await axiosInstance.get(`http://localhost:4000/api/post/get/${slug}`)
  return response.data.data
}

export { getPosts, getPost }


// Path: src/services/contents/post.service.tsx