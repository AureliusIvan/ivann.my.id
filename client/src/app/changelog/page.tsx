"use server"

import {MDXRemote} from 'next-mdx-remote/rsc'
import {handleGetChangelog} from "@/app/changelog/action";

export default async function RemoteMdxPage() {
  let data = await handleGetChangelog()
  const markdown = data?.content
  if (!markdown) return <div>Loading...</div>
  return <MDXRemote source={markdown}/>
}