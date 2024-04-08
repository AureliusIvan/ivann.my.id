'use server'
import { Loading } from '@/components/ui/loading/loading';
import { PostCard } from '@/components/ui/post-card';
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
      >
        <h1
          className='text-4xl font-bold'
        >
          Home
        </h1>
        <Suspense fallback={<Loading />}>
          <Post />
        </Suspense>
      </section>
    </main>

  )
}


export default Home;