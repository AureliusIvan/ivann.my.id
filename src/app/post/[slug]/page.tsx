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
import { getDocumentBySlug } from "outstatic/server"; // Import OutstaticDocument
import { notFound } from "next/navigation";

// Define a type for the author object if Outstatic provides one, or create a simple one
interface PostAuthor {
    name?: string;
    picture?: string;
}

// Extend OutstaticDocument if needed, or use it directly if it includes author correctly
interface PostData {
    title: string;
    publishedAt: string;
    slug: string;
    author: PostAuthor; // Ensure this matches the structure from Outstatic
    content: string;
    coverImage?: string;
}


async function getData(slug: string): Promise<PostData | null> {
    const post = await getDocumentBySlug('posts', slug, [
        'title',
        'publishedAt',
        'slug',
        'author',
        'content',
        'coverImage'
    ]);
    return post as unknown as PostData | null;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const res = await getData(resolvedParams.slug);

    if (!res) {
        // Use Next.js notFound utility for better 404 handling
        notFound();
    }

    // Default author details if not provided by the post
    const authorName = res.author?.name || "The Author";
    // Using a default description here, but ideally, this could come from author data or be a site-wide default
    const authorDescription = "A Software Engineer who loves to write about web development, technology, and life.";


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
                    className={`flex justify-between items-center gap-4 w-full max-w-[50rem] mb-4`}
                >
                    <Link
                        title={'Back to home'}
                        className='text-blue-500 hover:underline'
                        href={'/'}>
                        <Image
                            className={'dark:invert'}
                            src={CloseIcon}
                            alt={'Back'}
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>

                {res.coverImage && (
                    <div className="mb-8 w-full aspect-video relative overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src={res.coverImage}
                            alt={res.title || "Post cover image"}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                )}

                <section
                    className={cn(`text-center my-6`)} // Increased vertical margin
                >
                    <h1
                        className={cn(
                            "text-3xl md:text-4xl font-bold text-center", // Responsive text size
                            MonoglyphicFont.className
                        )}
                    >
                        &ldquo;{res.title}&rdquo;
                    </h1>

                    <div className="mt-4 flex justify-center"> {/* Centering the author component */}
                        <Author
                            name={res.author?.name}
                            picture={res.author?.picture}
                            defaultName="Aurelius Ivan Wijaya" // Default name if not in post
                            description={authorDescription} // Pass the description
                        />
                    </div>
                </section>

                <Separator className="my-8" /> {/* Increased margin for separator */}

                <div className="prose dark:prose-invert max-w-none"> {/* Added prose class for MDX styling */}
                    <MDXRemote source={res.content} />
                </div>

            </article>
        </section>
    )
}
