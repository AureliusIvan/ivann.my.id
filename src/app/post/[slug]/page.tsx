"use server"

import styles from '@/app/post/[slug]/page.module.scss'
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@/static/svg/close.svg";
import { MDXRemote } from "next-mdx-remote/rsc";
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator";
import { MonoglyphicFont } from "@/app/font/font";
import { Author } from "@/components/author";
import { getDocumentBySlug } from "outstatic/server";

async function getData({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    return getDocumentBySlug('posts', slug, [
        'title',
        'publishedAt',
        'slug',
        'author',
        'content',
        'coverImage'
    ])
}

export default async function Page({params}: { params: Promise<{ slug: string }> }) {
    // const res: any = await getData({params})
    const res = await getData({params})
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
                        className={cn(
                            "text-[2rem] font-bold text-center",
                            MonoglyphicFont.className)
                        }
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
