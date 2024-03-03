import Image from "next/image";
import { getContents } from '@/services/contents/content.service';
import { Suspense } from 'react';
import SectionContainer from '@/components/sectionContainer.component';
import { BlogCard } from '@/components/card/blog.card.component';
import { getPosts } from '@/services/contents/post.service';
async function Posts() {
  // Wait for the playlists
  const Posts = await getPosts()
  return (
    <section
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      items-center justify-center w-full h-full p-8 bg-gray-100 gap-8'
    >
      {Posts.map((content: any, index: number) => (
        <BlogCard
          key={index}
          title={content.title}
          author='author'
          date={content.date}
          description={content.content}
          image='https://res.cloudinary.com/dakp66ddf/image/upload/v1709459239/mrwbn57gkjx4rg86gevu.jpg'
          slug={content.slug}
        />
      ))}
    </section>
  )
}

export default async function Page() {
  return (
    <SectionContainer>
      <section>
        <div className="relative w-full h-[25rem] md:h-[30rem] lg:h-[35rem]">
          <Image
            src="https://res.cloudinary.com/dakp66ddf/image/upload/v1709459239/mrwbn57gkjx4rg86gevu.jpg"
            alt="title"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full p-8">
          <h1 className="text-4xl font-bold text-text1">Title</h1>
          <p className="text-lg text-text2">Description</p>
        </div>
      </section>
      <Suspense fallback={<div
        className='w-full h-full flex justify-center items-center text-2xl font-bold text-primary'
      >Loading..
        .</div>}>
        <Posts />
      </Suspense>
    </SectionContainer>
  )
}
