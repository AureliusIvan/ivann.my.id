'use server';

import {Button} from '@/components/ui/button';
import GalleryCard from '@/components/ui/gallery-card';
import {Loading} from '@/components/ui/loading/loading';
import {cn, randomPosition} from '@/lib/utils';
import PostService from '@/services/post.service';
import {PostTypes} from '@server/post';
import {Suspense} from 'react';
import {Title} from "@/components/ui/title";

async function ShowcasePost() {
    const data: any[] = await PostService.getAll();
    return (
        <section
        >
            {
                data?.map((post: PostTypes) => {
                        let position = randomPosition()
                        return (
                            <div
                                key={post._id}
                                className={cn(
                                    'absolute',
                                )}
                                style={{
                                    top: `${position.x}%`,
                                    left: `${position.y}%`
                                }}
                            >
                                <GalleryCard
                                    image={post.thumbnail}
                                    title={post.title}
                                    description={post.content}
                                />
                                <h1
                                    className='text-2xl font-bold text-white text-center'
                                >
                                    {post.title}
                                </h1>
                            </div>
                        )
                    }
                )
            }
        </section>
    )
}


export default async function Showcase() {
    return (
        <section
            className={"w-full flex flex-col items-center justify-center gap-4"}
        >
            <Title>
                Showcase Page
            </Title>
            (on development) <br/>
            {/*<Suspense fallback={<Loading/>}>*/}
            {/*    <ShowcasePost/>*/}
            {/*</Suspense>*/}
        </section>
    )
}