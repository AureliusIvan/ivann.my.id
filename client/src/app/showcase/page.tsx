'use server';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading/loading';
import { ShowcaseCard } from '@/components/ui/showcase-card';
import { SwiperGallery } from '@/components/ui/swiper/swiper-gallery';
import PostService from '@/services/post.service';
import { PostTypes } from '@server/post';
import { Suspense } from 'react';

async function ShowcasePost() {
  const { data } = await PostService.getAll();
  return (
    <SwiperGallery
      data={data}
    />
  )
}


export default async function Showcase() {
  return (
    <section
    className='min-h-screen w-full h-full flex flex-col items-center justify-center gap-4'
    >
      <Suspense fallback={<Loading />}>
        <ShowcasePost />
      </Suspense>
    </section>
  )
}