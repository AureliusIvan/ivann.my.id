"use server"

import dynamic from "next/dynamic";
import {Title} from "@/components/ui/title";
import {handleGetChangelog} from "@/app/log/action";
import {Suspense} from "react";

const MarkdownPreview = dynamic(() => import('@/components/ui/markdown-preview'), {
  ssr: false
})

export default async function ChangelogPage() {
  let data = await handleGetChangelog()
  return (
      <section
          className='flex flex-col items-center justify-center
          w-full h-full gap-4 p-6'
      >
        <Title>
          Changelog
        </Title>

        <section>
          <Suspense fallback={<div>Loading...</div>}>
            {
                data && (
                    <MarkdownPreview content={data.content}/>
                )
            }
          </Suspense>
        </section>
      </section>
  )
}