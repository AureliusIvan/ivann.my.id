"use server"

import styles from './page.module.scss'
import {MDXRemote} from "next-mdx-remote/rsc";
import {getPostDataBySlug} from "@/app/action";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@/static/svg/close.svg";
import {LinkButton} from "@/components/ui/button";

export default async function Page({params}: { params: { slug: string } }) {
  const res: any = await getPostDataBySlug(params.slug)
  if (!res) {
    return <div>404</div>
  }

  return (
      <section
          className={styles.page}
      >


        <div
            className={"flex justify-between items-center gap-4 w-full max-w-[50rem]"}
        >


          <Link
              className='text-blue-500'
              href={'/'}>
            <Image
                className={'invert'}
                src={CloseIcon}
                alt={'Back'}
                width={20}
                height={20}
            />
          </Link>

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
      </section>
  )
}