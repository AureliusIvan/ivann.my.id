"use server";

import type {PostData} from "@/app/action";
import {getPostData} from "@/app/action";
import {MDXRemote} from "next-mdx-remote/rsc";
import {CardTitle} from "@/components/ui/card";
import Link from "next/link";

async function PostSection() {
  const res: any = await getPostData()
  return (
      <article
          className={"grid grid-cols-1 gap-2 w-full max-w-3xl p-2 border"}
      >
        {
          res.map((post: PostData) => {
            return (
                <Link key={post.title}
                      href={`/post/${post.slug}`}
                      className='
                         md:p-4 p-4
                         flex flex-col gap-2
                         border dark:border-neutral-800
                         backdrop-blur-2xl
                         bg-white/30 dark:bg-white/10
                         dark:text-neutral-50
                         shadow-lg overflow-hidden hover:opacity-60 transition-transform
                         duration-300 pointer-events-auto cursor-pointer
                         '
                >
                  <CardTitle>
                    {post.title}
                  </CardTitle>

                  <MDXRemote source={post.description}/>

                </Link>
            )
          })
        }
      </article>
  )
}

export default PostSection;