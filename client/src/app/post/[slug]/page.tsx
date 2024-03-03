import axiosInstance from '@/configs/axios.config'
import { FormatDate } from '@/helpers/dataTime.helpers'
import { getPost } from '@/services/contents/post.service'
import Image from 'next/image'

async function Post({ params }: any) {
  const Post = await getPost(params.slug)
  console.log(Post.thumbnail)
  return (
    <section
      className='w-full h-full p-8 bg-gray-100
      flex flex-col items-center justify-center
      gap-8 text-center text-text1'
    >
      <Image
        src={Post.thumbnail}
        alt={Post.title}
        // layout="fill"
        width={500}
        height={500}
        objectFit="cover"
        className='w-full h-[5rem] md:h-[30rem] lg:h-[35rem] rounded-lg'
      />
      <h1
        className='text-4xl font-bold text-text1'
      >
        {Post.title}
      </h1>
      <h2>
        {FormatDate(Post.date)}
      </h2>
      <p
        className='text-lg text-text2'
      >
        {Post.content}
      </p>
    </section >
  )
}

export default function Page({ params }: any) {
  return (
    <div>
      <Post params={params} />
    </div>
  )
}