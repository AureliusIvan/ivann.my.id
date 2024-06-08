"use server";

import type {PostData} from "@/app/action";
import {getPostData} from "@/app/action";
import {MDXRemote} from "next-mdx-remote/rsc";
import {CardTitle} from "@/components/ui/card";
import Link from "next/link";

async function PostSection() {
  const res: any = await getPostData()
  return (
      <section
          className={"grid grid-cols-1 gap-4 w-full max-w-3xl p-4"}
      >
        {
          res.map((post: PostData) => {
            return (
                <Link key={post.title}
                      href={`/post/${post.slug}`}
                         className='
                         md:p-4 p-4
                         flex flex-col gap-2
                         border-[1px] border-neutral-50
                         dark:border-none backdrop-blur-2xl
                         bg-white/30 dark:bg-white/10
                         dark:text-neutral-50
                         rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform
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
      </section>
  )
}

export default PostSection;