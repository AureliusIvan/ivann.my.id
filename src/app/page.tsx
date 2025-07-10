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
            <section className="relative flex flex-col items-center justify-center gap-8 mt-16 mb-24 min-h-[80vh] w-full text-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-blue-900/20" />
                    
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-5 dark:opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15)_0%,transparent_50%)] animate-pulse" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.15)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '1s'}} />
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-xl animate-float" />
                    <div className="absolute bottom-40 right-20 w-24 h-24 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}} />
                </div>

                {/* Main Content */}
                <div className="relative z-10 space-y-8 max-w-4xl mx-auto px-4">
                    {/* Greeting */}
                    <div className="animate-fadeInUp">
                        <span className={cn(
                            "inline-block px-4 py-2 rounded-full text-sm font-medium",
                            "bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30",
                            "text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700",
                            "animate-bounce",
                            MonoglyphicFont.className
                        )}>
                            👋 Welcome to my digital space
                        </span>
                    </div>

                    {/* Main Title */}
                    <div className="space-y-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <Title size={"large"}>
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent">
                                Ivan Wijaya
                            </span>
                            <span className={cn(MonoglyphicFont.className, "tracking-wide opacity-40 text-black dark:text-white")}>
                                ;
                            </span>
                        </Title>
                        
                        {/* Subtitle */}
                        <p className={cn(
                            "text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed",
                            MonoglyphicFont.className
                        )}>
                            Software Engineer & Digital Craftsman
                        </p>
                    </div>

                    {/* Description */}
                    <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                            Passionate about creating digital experiences that matter. I write about web development, 
                            technology trends, and the stories behind the code.
                        </p>
                    </div>

                    {/* Author Info */}
                    <div className="animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                        <Author
                            name="Ivan"
                            description="A Software Engineer who loves to write about web development, technology, and life."
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                        <a
                            title="Download CV"
                            href="/cv.pdf"
                            target="_blank"
                            className={cn(
                                "group relative overflow-hidden",
                                "px-8 py-4 rounded-full",
                                "bg-gradient-to-r from-blue-600 to-purple-600",
                                "text-white font-medium",
                                "hover:from-blue-700 hover:to-purple-700",
                                "hover:shadow-lg hover:shadow-blue-500/25",
                                "hover:-translate-y-1",
                                "transition-all duration-300 ease-out",
                                "flex items-center gap-3",
                                MonoglyphicFont.className
                            )}
                        >
                            <span className="relative z-10">Download CV</span>
                            <svg 
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            
                            {/* Animated background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>

                        <a
                            href="#footer"
                            className={cn(
                                "group px-8 py-4 rounded-full",
                                "border-2 border-neutral-300 dark:border-neutral-600",
                                "text-neutral-700 dark:text-neutral-300",
                                "hover:border-neutral-400 dark:hover:border-neutral-500",
                                "hover:bg-neutral-50 dark:hover:bg-neutral-800",
                                "hover:-translate-y-1",
                                "transition-all duration-300 ease-out",
                                "flex items-center gap-3",
                                MonoglyphicFont.className
                            )}
                        >
                            <span>Get In Touch</span>
                            <svg 
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="animate-fadeInUp mt-16" style={{animationDelay: '1s'}}>
                        <div className="flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-600">
                            <span className="text-sm font-medium">Scroll to explore</span>
                            <div className="w-6 h-10 border-2 border-neutral-300 dark:border-neutral-600 rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-neutral-300 dark:bg-neutral-600 rounded-full mt-2 animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Posts Section */}
            <section className="w-full flex flex-col items-center justify-center gap-12 py-16">
                <div className="text-center space-y-4">
                    <Title size={"medium"}>
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent">
                            Recent Posts
                        </span>
                        <span className="opacity-60">;</span>
                    </Title>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Thoughts on technology, development, and the digital world
                    </p>
                </div>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl px-4">
                    {postData && postData.length > 0 ? 
                        postData.map((post: any, index: number) => (
                            <Link 
                                key={post.title}
                                href={`/post/${post.slug}`}
                                className={cn(
                                    "group relative overflow-hidden",
                                    "bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800",
                                    "border-0 shadow-lg hover:shadow-2xl",
                                    "rounded-2xl p-8",
                                    "transition-all duration-500 ease-out",
                                    "hover:-translate-y-2 hover:scale-[1.02]",
                                    "cursor-pointer",
                                    "block"
                                )}
                            >
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] [background-size:20px_20px]" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 space-y-6">
                                    {/* Header */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className={cn(
                                                "inline-block px-3 py-1 text-xs font-medium rounded-full",
                                                "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                                                MonoglyphicFont.className
                                            )}>
                                                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                                                    month: 'short', 
                                                    day: 'numeric', 
                                                    year: 'numeric' 
                                                })}
                                            </span>
                                            
                                            {/* Reading indicator */}
                                            <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-600">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-xs">3 min read</span>
                                            </div>
                                        </div>

                                        <CardTitle className={cn(
                                            MonoglyphicFont.className,
                                            "text-2xl font-bold tracking-wide leading-tight",
                                            "group-hover:text-blue-600 dark:group-hover:text-blue-400",
                                            "transition-colors duration-300"
                                        )}>
                                            {post.title}
                                        </CardTitle>
                                    </div>

                                    {/* Description */}
                                    {post.description && (
                                        <div className="prose prose-neutral dark:prose-invert prose-sm max-w-none">
                                            <div className="text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                                                <MDXRemote source={post.description} />
                                            </div>
                                        </div>
                                    )}

                                    {/* Author info */}
                                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                                <span className={cn("text-white text-sm font-bold", MonoglyphicFont.className)}>
                                                    {post.author?.name?.[0] || 'I'}
                                                </span>
                                            </div>
                                            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                                {post.author?.name || 'Ivan Wijaya'}
                                            </span>
                                        </div>

                                        {/* Arrow indicator */}
                                        <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                                            <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                            </Link>
                        )) : (
                            <div className="col-span-full">
                                <div className="text-center py-16 space-y-4">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-neutral-400 dark:text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h3 className={cn("text-xl font-semibold text-neutral-700 dark:text-neutral-300", MonoglyphicFont.className)}>
                                        No posts yet
                                    </h3>
                                    <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
                                        I&apos;m working on some great content. Check back soon for insights on technology, development, and more!
                                    </p>
                                </div>
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
