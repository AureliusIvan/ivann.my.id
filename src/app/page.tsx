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
import { getDocuments } from "outstatic/server";

export const dynamic = 'force-static';

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
        // Fetch only necessary fields for the homepage list
        return getDocuments('posts', ['title', "description", "slug", "publishedAt", "author"])
    }

    const postData = await getPostData()

    return (
        <main
            className='flex flex-col items-center justify-center
            w-full h-full gap-12 p-4 md:p-8 relative' // Consistent padding
        >

            {/* Hero Section */}
            <section
                className='
            flex flex-col items-center justify-center gap-4
            mt-10 min-h-[30vh] w-full text-center' // Added text-center
            >
                <Title size={"large"}>
                    Ivan W
                    <span className={cn(MonoglyphicFont.className, `tracking-wide opacity-40`)}>
            ;
            </span>
                </Title>

                <Author
                    name="Ivan"
                    // picture="https://avatars.githubusercontent.com/u/102419837?v=4" // Optional: add picture if desired
                    description="A Software Engineer who loves to write about web development, technology, and life."
                />

                {/*  download cv*/}
                <a
                    title={"Download CV"}
                    href={'/cv.pdf'}
                    target={"_blank"}
                    className={cn(MonoglyphicFont.className,
                        `border border-black dark:border-white
                  text-black dark:text-white
                  bg-white dark:bg-black
                  hover:bg-neutral-100 dark:hover:bg-neutral-800
                  py-2 px-4 mt-4
                  font-medium // Adjusted font weight
                  relative cursor-pointer
                  flex items-center justify-center gap-2
                  transition-colors duration-200 ease-in-out`)} // Added transition
                >
                    Download CV
                </a>
            </section>

            {/* Post Section */}
            <section
                className="w-full flex flex-col
            items-center justify-center gap-6" // Increased gap
            >
                <Title size={"medium"}>
                    Recent Posts {/* Corrected typo: Post -> Posts */}
                    <span className={'opacity-60'}>
            ;
            </span>
                </Title>

                <article
                    className={`
          grid grid-cols-1 md:grid-cols-2 gap-6 // Responsive grid and increased gap
          w-full max-w-4xl // Increased max-width for two columns
          p-2`}
                >
                    {
                        postData && postData.length > 0 ? // Check if postData is not empty
                            postData.map((post: any) => { // Consider defining a type for post
                                return (
                                    <Link key={post.title}
                                          href={`/post/${post.slug}`}
                                          className='
                         group // Added group for hover effects
                         md:p-6 p-4
                         flex flex-col gap-3 // Adjusted gap
                         border border-neutral-300 dark:border-neutral-700 // Softer borders
                         bg-white dark:bg-neutral-900 // Card background
                         text-black dark:text-white // Explicit text colors
                         rounded-lg // Added rounded corners
                         shadow-md hover:shadow-xl // Enhanced shadow effect
                         transition-all duration-300 ease-in-out
                         cursor-pointer'
                                    >
                                        <CardTitle
                                            className={cn(MonoglyphicFont.className,
                                                "tracking-wider font-semibold text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" // Hover effect for title
                                                )}>
                                            {post.title}
                                        </CardTitle>

                                        <Separator className="my-2 border-neutral-200 dark:border-neutral-800" />

                                        {
                                            post.description && (
                                                <div className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3"> {/* Clamped description */}
                                                    <MDXRemote source={post.description}/>
                                                </div>
                                            )
                                        }

                                        <Button
                                            className={`
                                            border border-neutral-400 dark:border-neutral-600
                                            text-neutral-700 dark:text-neutral-300
                                            hover:bg-neutral-100 dark:hover:bg-neutral-800
                                            rounded-md mt-auto self-start transition-colors`} // More subtle button
                                            variant={"secondary"}
                                            size={"sm"}
                                        >
                                            Read More
                                        </Button>
                                    </Link>
                                )
                            })
                            : (
                                <div className="col-span-full text-center text-neutral-500 dark:text-neutral-400 py-8">
                                    No posts found yet. Check back soon!
                                </div>
                            )
                    }
                </article>

            </section>


            {/* Project Section */}
            <section
                className="w-full flex flex-col items-center
            justify-center gap-6 m-4" // Increased gap
            >
                <Title size={"medium"}>
                    Projects {/* Corrected typo: Project -> Projects */}
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
