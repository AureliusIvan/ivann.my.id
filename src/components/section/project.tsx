import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GithubIcon from "@/static/svg/github-icon.svg";
import { cn } from "@/lib/utils";
import { MonoglyphicFont } from "@/app/font/font";

const data = [
    {
        title: 'Confess',
        description: 'A private confession platform where users can share their thoughts anonymously. Built with modern web technologies for secure and private communication.',
        tags: ['Next.js', 'TypeScript', 'Tailwind'],
        image: '/image/confess.ivann.my.id.png',
        github: 'https://github.com/AureliusIvan/confess',
        demo: 'https://confess.ivann.my.id',
        status: 'Live'
    },
    {
        title: 'Remembear',
        description: 'A memory assistance application designed for people with short-term memory challenges. Features smart reminders and intuitive task management.',
        tags: ['React', 'Node.js', 'MongoDB'],
        image: '/image/remembear.webp',
        github: 'https://github.com/AureliusIvan/remembear',
        demo: '#',
        status: 'In Development'
    }
]

const ProjectSection = () => {
    return (
        <article
            className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-4"
        >
            {data.map((project, index) => (
                <Card
                    key={index}
                    className={cn(
                        "group relative overflow-hidden",
                        "bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800",
                        "border-0 shadow-lg hover:shadow-2xl",
                        "transition-all duration-500 ease-out",
                        "hover:-translate-y-2 hover:scale-[1.02]",
                        "cursor-pointer"
                    )}
                >
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                        <span className={cn(
                            "px-3 py-1 text-xs font-medium rounded-full",
                            project.status === 'Live' 
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                        )}>
                            {project.status}
                        </span>
                    </div>

                    <CardHeader className="pb-4">
                        <CardTitle className={cn(
                            MonoglyphicFont.className,
                            "text-2xl font-bold tracking-wide",
                            "group-hover:text-blue-600 dark:group-hover:text-blue-400",
                            "transition-colors duration-300"
                        )}>
                            {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                            {project.description}
                        </CardDescription>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {project.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="px-2 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </CardHeader>

                    <CardContent className="px-6 pb-6">
                        <div className="relative overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-500">
                            <Image
                                className="w-full h-48 object-cover object-top"
                                src={project.image}
                                alt={`${project.title} preview`}
                                width={400}
                                height={200}
                                decoding="async"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </CardContent>

                    <CardFooter className="pt-0 px-6 pb-6">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex gap-3">
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(
                                        "bg-black dark:bg-white text-white dark:text-black",
                                        "hover:bg-neutral-800 dark:hover:bg-neutral-200",
                                        "transition-all duration-200 group-hover:scale-105"
                                    )}
                                >
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <Image
                                            className="dark:invert-0 invert"
                                            src={GithubIcon}
                                            alt="GitHub"
                                            width={16}
                                            height={16}
                                        />
                                        Code
                                    </a>
                                </Button>
                                
                                {project.demo !== '#' && (
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className={cn(
                                            "border-neutral-300 dark:border-neutral-700",
                                            "hover:bg-neutral-100 dark:hover:bg-neutral-800",
                                            "transition-all duration-200 group-hover:scale-105"
                                        )}
                                    >
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live Demo
                                        </a>
                                    </Button>
                                )}
                            </div>
                            
                            {/* Arrow indicator */}
                            <div className="transform transition-transform duration-300 group-hover:translate-x-1">
                                <svg 
                                    className="w-5 h-5 text-neutral-400 dark:text-neutral-600" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                                    />
                                </svg>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </article>
    );
}

export { ProjectSection }
