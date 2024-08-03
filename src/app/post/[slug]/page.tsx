"use server"

import type {Metadata, ResolvingMetadata} from 'next'

import styles from './page.module.scss'
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@/static/svg/close.svg";
import {MDXRemote} from "next-mdx-remote/rsc";
import {getPostDataBySlug} from "@/app/action";
import {cn} from "@/lib/utils"
import {PostTypes} from "@/interface/post.interface";
import {Separator} from "@/components/ui/separator";
import {MonoglyphicFont} from "@/app/font/font";
import {Author} from "@/components/author";

export async function generateMetadata(
    {params}: { params: { slug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
  const res: PostTypes | null = await getPostDataBySlug(params.slug)

  if (!res) {
    return {
      title: '404',
      description: '404',
      openGraph: {
        description: '404',
        type: 'website',
      }
    }
  }

  return {
    title: res.title,
    description: res.description,
    openGraph: {
      description: res.description,
      type: 'website',
    }
  }
}

export default async function Page({params}: { params: { slug: string } }) {
  const res: any = await getPostDataBySlug(params.slug)
  if (!res) {
    return <div>404</div>
  }

  return (
      <section
          className={cn(styles.page, `mt-5`)}
      >

        <article
            className={cn(
                styles.article,
                `mb-4 p-4 w-full max-w-[50rem]`
            )}
        >


          {/* top bar */}
          <div
              className={`flex justify-between items-center gap-4 w-full max-w-[50rem]`}
          >
            {/* close button */}
            <Link
                title={'Back to home'}
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
          </div>

          <section
              className={cn(`text-center my-3`)}
          >
            <h1
                className={cn("text-[2rem] font-bold text-center", MonoglyphicFont.className)}
            >
              &ldquo;{res.title}&rdquo;
            </h1>
            <Author/>
          </section>

          <Separator/>

          <MDXRemote source={res.content}/>

        </article>
      </section>
  )
}