'use server'
import { Loading } from '@/components/ui/loading/loading';
import { PostCard } from '@/components/ui/post-card';
import { Title } from '@/components/ui/title/title';
import PostService from '@/services/post.service';
import { Suspense } from 'react';


async function Post() {
  const data = await PostService.getAll()

  return (
    <section
      className='grid grid-cols-3 gap-4'
    >
      {data?.data?.map((post: any) => (
        <PostCard key={post._id}
          title={post.title}
          post={post}
        >
        </PostCard>
      ))}
    </section>
  )
}

async function Home() {
  return (
    <main
      className='flex flex-col items-center justify-center w-full h-full min-h-screen '
    >
      <section
        className='flex flex-col items-center justify-center  gap-4'
      >
        <Title
          title='Find What You Need'
        />
        <div
          className='flex flex-col items-center justify-center w-full gap-4'
        >
          <input type="text"
            placeholder='Search Post...'
            className='w-full p-2 border-2 border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          />
        </div>
        <Suspense fallback={<Loading />}>
          <Post />
        </Suspense>
      </section>
    </main>

  )
}


export default Home;