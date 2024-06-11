"use server"

import {MDXRemote} from 'next-mdx-remote/rsc'
import {handleGetChangelog} from "@/app/log/action";

export async function generateMetadata() {
  return {
    title: `Changelog`,
    openGraph: {
      description: "Changelog for the site",
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
  return <MDXRemote source={markdown}/>
}