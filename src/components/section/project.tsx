import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import GithubIcon from "@/static/svg/github-icon.svg";

const data = [
    {
        title: 'Confess',
        description: 'Wanna say something really private? Try confess 💖',
        image: '/image/confess.ivann.my.id.png',
        github: 'https://github.com/AureliusIvan/confess'
    },
    {
        title: 'Remembear',
        description: 'An app for people with short-term-memory 🧠',
        image: '/image/remembear.webp',
        github: 'https://github.com/AureliusIvan/remembear'
    }
]

const ProjectSection = () => {
    return (
        <article
            className={
                `max-w-3xl 
            grid grid-cols-1 md:grid-cols-2 gap-4 
            p-2`
            }
        >

            {data.map((post, index) => (
                <Card
                    key={index}
                    className={
                        `shadow-lg overflow-hidden 
                  md:hover:opacity-60 
                  border border-black dark:border-white
                  dark:bg-transparent
                  transition-transform duration-300 pointer-events-auto cursor-pointer`
                    }
                >
                    <CardHeader>
                        <CardTitle>
                            {post.title}
                        </CardTitle>
                        <CardDescription>
                            {post.description}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className={"isolate z-0"}>
                        <Image
                            className={
                                `w-full h-52 object-cover object-top
                      border border-black dark:border-white
                      `
                            }
                            src={post.image}
                            alt={"Image"}
                            width={150}
                            height={150}
                            decoding={"async"}
                        />

                    </CardContent>

                    <CardFooter
                    >
                        <a
                            href={post.github}
                            target={"_blank"}
                        >
                            <Image
                                className={"dark:invert"}
                                src={GithubIcon}
                                alt={"Github Icon"}
                                width={24}
                                height={24}
                                priority
                            />
                        </a>
                    </CardFooter>
                </Card>
            ))}
        </article>
    );
}

export { ProjectSection }
