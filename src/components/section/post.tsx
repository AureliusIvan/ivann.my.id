"use server";

import { PostTypes } from "@/interface/post.interface";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MonoglyphicFont } from "@/app/font/font";
import { getPostData } from "@/components/section/action";

async function PostSection() {
    const postData: PostTypes[] | null = await getPostData()
    return (
        <article
            className={`
          grid grid-cols-1 gap-2 
          w-full max-w-3xl 
          p-2`}
        >
            {
                // conditionally render the posts
                postData ?
                    postData?.map((post: PostTypes) => {
                        return (
                            <Link key={post.title}
                                  href={`/post/${post.slug}`}
                                  className='
                         md:p-4 p-4
                         flex flex-col gap-2
                         border border-black dark:border-white
                         backdrop-blur-2xl
                         dark:text-neutral-50
                         shadow-lg overflow-hidden hover:opacity-60 transition-transform
                         duration-300 pointer-events-auto cursor-pointer
                         '
                            >
                                <CardTitle className={cn(MonoglyphicFont.className, "tracking-wider font-light")}>
                                    {post.title}
                                </CardTitle>

                                <Separator/>

                                <MDXRemote source={post.description}/>

                                <Button
                                    className={`border border-black dark:border-white rounded-none`}
                                    variant={"secondary"}
                                    size={"sm"}
                                >
                                    Read More
                                </Button>
                            </Link>
                        )
                    })
                    : (
                        <div>
                            No Post Found
                        </div>
                    )
            }
        </article>
    )
}

export { PostSection }
