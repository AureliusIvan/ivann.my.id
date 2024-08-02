"use server"

import {MDXRemote} from 'next-mdx-remote/rsc'
import {handleGetChangelog} from "@/app/log/action";
import {cn} from "@/lib/utils";
import {MonoglyphicFont} from "@/app/font/font";

export async function generateMetadata() {
  return {
    title: `Log`,
    openGraph: {
      description: "Changelog for the ivann.my.id website.",
      type: 'website',
    },
    robots: {
      follow: true,
      index: true,
    }
  }
}

export default async function RemoteMdxPage() {
  let data = await handleGetChangelog()
  if (!data) return <div>...</div>
  let markdown = data?.content
  if (!markdown) return <div>Loading...</div>
  return (
      <section className={cn(MonoglyphicFont.className, `tracking-wide font-light text-opacity-80 my-2.5`)}>
        <MDXRemote source={markdown}/>
      </section>
  )
}