"use server"

import {MDXRemote} from 'next-mdx-remote/rsc'
import {handleGetChangelog} from "@/app/log/action";

export default async function RemoteMdxPage() {
  let data = await handleGetChangelog()
  let markdown = data?.content
  if (!markdown) return <div>Loading...</div>
  return <MDXRemote source={markdown}/>
}