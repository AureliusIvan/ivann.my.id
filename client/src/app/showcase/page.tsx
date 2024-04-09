'use server';
import { Button } from '@/components/ui/button';
import GalleryCard from '@/components/ui/gallery-card';
import { Loading } from '@/components/ui/loading/loading';
import { ShowcaseCard } from '@/components/ui/showcase-card';
import { SwiperGallery } from '@/components/ui/swiper/swiper-gallery';
import { cn, randomPosition } from '@/lib/utils';
import PostService from '@/services/post.service';
import { PostTypes } from '@server/post';
import { Suspense } from 'react';

async function ShowcasePost() {
  const { data } = await PostService.getAll();
  return (
    <>
      {
        data?.map((post: PostTypes) => {
          let positon = randomPosition()

          return (
            <div
              key={post._id}
              className={cn(
                'absolute',
              )}
              style={{
                top: `${positon.x}%`,
                left: `${positon.y}%`
              }}
            >
              <GalleryCard
                image={post.thumbnail}
                title={post.title}
                description={post.content}
              />
            </div>
          )
        }
        )
      }
    </>
  )
}


export default async function Showcase() {
  return (

    <Suspense fallback={<Loading />}>
      <ShowcasePost />
    </Suspense>
  )
}