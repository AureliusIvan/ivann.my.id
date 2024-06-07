"use server";

import {getPostData} from "@/app/action";
import {MDXRemote} from "next-mdx-remote/rsc";
import {CardTitle} from "@/components/ui/card";


interface PostData {
  name: string;
  content: string;
}

async function PostSection() {
  const res: any = await getPostData()
  return (
      <section

          className={"grid grid-cols-1 gap-4 w-full max-w-3xl p-4"}
      >
        {
          res.map((post: PostData) => {
            return (
                <article key={post.name}
                         className='
                         p-4
                         border-[1px] border-neutral-50
                         dark:border-none backdrop-blur-2xl
                         bg-white/30 dark:bg-white/10
                         dark:text-neutral-50
                         rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform
                         duration-300 pointer-events-auto cursor-pointer
                         '
                >
                  <CardTitle>
                    {post.name[0].toUpperCase() + post.name.slice(1)}
                  </CardTitle>

                  <MDXRemote source={post.content}/>
                </article>
            )
          })
        }
      </section>
  )
}

export default PostSection;