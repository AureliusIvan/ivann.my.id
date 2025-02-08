"use server";

import type { Metadata } from 'next'
import { Title } from '@/components/ui/title';
import { ProjectSection } from "@/components/section/project";
import { cn } from "@/lib/utils";
import { MonoglyphicFont } from "@/app/font/font";
import { Author } from "@/components/author";
import Link from "next/link";
import { CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Aurelius Ivan Wijaya - Developer`,
        openGraph: {
            description: "I am Ivan, a software engineer who loves to write about web development, technology, and life.",
            type: 'website',
            emails: ['aureliusivanwijaya@gmail.com'],
            countryName: 'Indonesia',
            siteName: 'Aurelius Ivan Wijaya',
        },
        robots: {
            follow: true,
            index: true,
        }
    }
}


async function Home() {
    async function getPostData() {
        "use server";
        const res = await import("@/app/api/post/route")
        // return await res.json()
        return (await res.GET());
    }

    const postData = await getPostData()

    return (
        <main
            className='flex flex-col items-center justify-center
            w-full h-full gap-12 p-6 relative'
        >

            {/* Hero Section */}
            <section
                className='
            flex flex-col items-center justify-center gap-4
            mt-10 min-h-[30vh] w-full'
            >
                <Title size={"large"}>
                    Ivan W
                    <span className={cn(MonoglyphicFont.className, `tracking-wide opacity-40`)}>
            ;
            </span>
                </Title>

                <Author/>

                {/*  download cv*/}
                <a
                    title={"Download CV"}
                    href={'/cv.pdf'}
                    target={"_blank"}
                    className={cn(MonoglyphicFont.className,
                        `border
                  text-white text-center font-bold
                  bg-black dark:bg-black md:hover:bg-neutral-800
                  py-2 px-4
                  relative cursor-pointer
                  flex items-center justify-center gap-2`)}
                >
                    Download CV
                </a>
            </section>

            {/* Post Section */}
            <section
                className="w-full flex flex-col
            items-center justify-center gap-4"
            >
                <Title size={"medium"}>
                    Recent Post
                    <span className={'opacity-60'}>
            ;
            </span>
                </Title>

                <article
                    className={`
          grid grid-cols-1 gap-2 
          w-full max-w-3xl 
          p-2`}
                >
                    {
                        // conditionally render the posts
                        postData ?
                            postData?.map((post: any) => {
                                return (
                                    <Link key={post.title}
                                          href={`/post/${post.slug}`}
                                          className='
                         md:p-4 p-4
                         flex flex-col gap-2
                         border border-black dark:border-white
                         backdrop-blur-2xl
                         dark:text-neutral-50
                         shadow-lg overflow-hidden hover:opacity-60 transition-transform
                         duration-300 pointer-events-auto cursor-pointer
                         '
                                    >
                                        <CardTitle
                                            className={cn(MonoglyphicFont.className, "tracking-wider font-light")}>
                                            {post.title}
                                        </CardTitle>

                                        <Separator/>

                                        {
                                            post.description && (
                                                <MDXRemote source={post.description}/>
                                            )
                                        }

                                        <Button
                                            className={`border border-black dark:border-white rounded-none`}
                                            variant={"secondary"}
                                            size={"sm"}
                                        >
                                            Read More
                                        </Button>
                                    </Link>
                                )
                            })
                            : (
                                <div>
                                    No Post Found
                                </div>
                            )
                    }
                </article>

            </section>


            {/* Project Section */}
            <section
                className="w-full flex flex-col items-center
            justify-center gap-4 m-4"
            >
                <Title size={"medium"}>
                    Project
                    <span className={'opacity-60'}>
            ;
            </span>
                </Title>

                <ProjectSection/>

            </section>

        </main>

    )
}


export default Home;
