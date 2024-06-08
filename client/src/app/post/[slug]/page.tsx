"use server"

import styles from './page.module.scss'
import {MDXRemote} from "next-mdx-remote/rsc";
import {getPostDataBySlug} from "@/app/action";
import Link from "next/link";

export default async function Page({params}: { params: { slug: string } }) {
  const res: any = await getPostDataBySlug(params.slug)
  if (!res) {
    return <div>404</div>
  }
  return (
      <section
          className={styles.page}
      >
        <Link href={'/'}>
          back
        </Link>
        <h1
            className={"text-4xl font-bold text-center"}
        >
          {res.title}
        </h1>

        <MDXRemote source={res.content}/>
      </section>
  )
}