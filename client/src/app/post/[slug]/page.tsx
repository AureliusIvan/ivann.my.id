"use server"

import styles from './page.module.scss'
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@/static/svg/close.svg";
import {MDXRemote} from "next-mdx-remote/rsc";
import {getPostDataBySlug} from "@/app/action";
import {LinkButton} from "@/components/ui/button";
import {cn} from "@/lib/utils"

export default async function Page({params}: { params: { slug: string } }) {
  const res: any = await getPostDataBySlug(params.slug)

  if (!res) {
    return <div>404</div>
  }

  return (
      <section
          className={styles.page}
      >

        <article
            className={cn(
                styles.article,
                'backdrop-blur-2xl bg-white/30 dark:bg-white/10 p-4 ' +
                'rounded-lg w-full max-w-[50rem] mx-auto mt-4'
            )}
        >


          {/* top bar */}
          <div
              className={"flex justify-between items-center gap-4 w-full max-w-[50rem]"}
          >

            {/* close button */}
            <Link
                className='text-blue-500'
                href={'/'}>
              <Image
                  className={'dark:invert'}
                  src={CloseIcon}
                  alt={'Back'}
                  width={20}
                  height={20}
              />
            </Link>

            {/* share button */}
            <LinkButton
                variant={'icon'}
                href={'/'}
            >
              Share
            </LinkButton>

          </div>

          <h1
              className={"text-[2rem] font-bold text-center"}
          >
            {res.title}
          </h1>

          <MDXRemote source={res.content}/>
        </article>
      </section>
  )
}