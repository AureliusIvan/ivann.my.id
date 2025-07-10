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
import { notFound } from "next/navigation";

interface PostAuthor {
    name?: string;
    picture?: string;
}

interface PostData {
    title: string;
    publishedAt: string;
    slug: string;
    author: PostAuthor;
    content: string;
    coverImage?: string;
    description?: string;
}

async function getData(slug: string): Promise<PostData | null> {
    const post = await getDocumentBySlug('posts', slug, [
        'title',
        'publishedAt',
        'slug',
        'author',
        'content',
        'coverImage',
        'description'
    ]);
    return post as unknown as PostData | null;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const res = await getData(resolvedParams.slug);

    if (!res) {
        notFound();
    }

    const authorName = res.author?.name || "Ivan Wijaya";
    const authorDescription = "A Software Engineer who loves to write about web development, technology, and life.";
    const readingTime = Math.ceil(res.content.length / 1000) || 3; // Rough reading time calculation

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50/30 dark:from-neutral-900 dark:via-neutral-800 dark:to-blue-900/10">
            {/* Background Pattern */}
            <div className="fixed inset-0 opacity-5 dark:opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] [background-size:20px_20px]" />
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-700">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <Link
                        href="/"
                        className={cn(
                            "inline-flex items-center gap-3 px-4 py-2 rounded-full",
                            "text-neutral-600 dark:text-neutral-400",
                            "hover:text-neutral-900 dark:hover:text-neutral-100",
                            "hover:bg-neutral-100 dark:hover:bg-neutral-800",
                            "transition-all duration-200",
                            "group"
                        )}
                    >
                        <svg 
                            className="w-5 h-5 group-hover:-translate-x-1 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className={cn("font-medium", MonoglyphicFont.className)}>Back to Home</span>
                    </Link>
                </div>
            </nav>

            {/* Article Container */}
            <main className="relative z-10">
                <article className="max-w-4xl mx-auto px-6 py-12">
                    {/* Hero Section */}
                    <header className="space-y-8 mb-16">
                        {/* Meta Information */}
                        <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                            <span className={cn(
                                "px-3 py-1 rounded-full",
                                "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                                MonoglyphicFont.className
                            )}>
                                {new Date(res.publishedAt).toLocaleDateString('en-US', { 
                                    month: 'long', 
                                    day: 'numeric', 
                                    year: 'numeric' 
                                })}
                            </span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {readingTime} min read
                            </div>
                        </div>

                        {/* Title */}
                        <div className="space-y-6">
                            <h1 className={cn(
                                "text-4xl md:text-6xl font-bold leading-tight",
                                "bg-gradient-to-r from-neutral-900 via-blue-800 to-neutral-900",
                                "dark:from-neutral-100 dark:via-blue-200 dark:to-neutral-100",
                                "bg-clip-text text-transparent",
                                MonoglyphicFont.className
                            )}>
                                {res.title}
                            </h1>
                            
                            {/* Description */}
                            {res.description && (
                                <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                                    <MDXRemote source={res.description} />
                                </p>
                            )}
                        </div>

                        {/* Author Section */}
                        <div className="flex items-center gap-4 pt-8">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <span className={cn("text-white text-lg font-bold", MonoglyphicFont.className)}>
                                    {authorName[0]}
                                </span>
                            </div>
                            <div>
                                <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                                    {authorName}
                                </p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {authorDescription}
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* Cover Image */}
                    {res.coverImage && (
                        <div className="mb-16">
                            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src={res.coverImage}
                                    alt={res.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </div>
                    )}

                    {/* Content */}
                    <div className={cn(
                        "prose prose-lg prose-neutral dark:prose-invert max-w-none",
                        "prose-headings:font-bold prose-headings:tracking-tight",
                        "prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12",
                        "prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10",
                        "prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8",
                        "prose-p:text-neutral-700 dark:prose-p:text-neutral-300",
                        "prose-p:leading-relaxed prose-p:mb-6",
                        "prose-a:text-blue-600 dark:prose-a:text-blue-400",
                        "prose-a:no-underline hover:prose-a:underline",
                        "prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100",
                        "prose-code:text-blue-600 dark:prose-code:text-blue-400",
                        "prose-code:bg-blue-50 dark:prose-code:bg-blue-900/20",
                        "prose-code:px-2 prose-code:py-1 prose-code:rounded",
                        "prose-pre:bg-neutral-900 dark:prose-pre:bg-black",
                        "prose-pre:border prose-pre:border-neutral-200 dark:prose-pre:border-neutral-700",
                        "prose-blockquote:border-l-4 prose-blockquote:border-blue-500",
                        "prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/10",
                        "prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r",
                        "prose-img:rounded-xl prose-img:shadow-lg",
                        styles.article
                    )}>
                        <MDXRemote source={res.content} />
                    </div>

                    {/* Footer */}
                    <footer className="mt-20 pt-12 border-t border-neutral-200 dark:border-neutral-700">
                        <div className="space-y-8">
                            {/* Author Card */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                        <span className={cn("text-white text-xl font-bold", MonoglyphicFont.className)}>
                                            {authorName[0]}
                                        </span>
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className={cn("text-xl font-bold text-neutral-900 dark:text-neutral-100", MonoglyphicFont.className)}>
                                            About {authorName}
                                        </h3>
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {authorDescription}
                                        </p>
                                        <div className="flex gap-4">
                                            <Link
                                                href="/#footer"
                                                className={cn(
                                                    "inline-flex items-center gap-2 px-4 py-2 rounded-full",
                                                    "bg-blue-600 text-white",
                                                    "hover:bg-blue-700",
                                                    "transition-colors duration-200",
                                                    "text-sm font-medium"
                                                )}
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Get in touch
                                            </Link>
                                            <Link
                                                href="/"
                                                className={cn(
                                                    "inline-flex items-center gap-2 px-4 py-2 rounded-full",
                                                    "border border-neutral-300 dark:border-neutral-600",
                                                    "text-neutral-700 dark:text-neutral-300",
                                                    "hover:bg-neutral-100 dark:hover:bg-neutral-800",
                                                    "transition-colors duration-200",
                                                    "text-sm font-medium"
                                                )}
                                            >
                                                More posts
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </article>
            </main>
        </div>
    )
}
