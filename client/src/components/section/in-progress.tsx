"use server"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import GithubIcon from "@/static/svg/github-icon.svg";
import Image from "next/image";

const data = [
    {
        id: 0,
        title: 'File Morph',
        description: 'To Do',
    },
    {
        id: 1,
        title: 'Ghostrun',
        description: 'In Progress',
    },
    {
        id: 2,
        title: 'Perfume Recommender AI',
        description: 'Done',
    },
    {
        id: 3,
        title: 'Kantong Neko',
        description: 'Done',
    },
    {
        id: 4,
        title: 'Room Reservation System',
        description: 'Done',
    },
    {
        id: 4,
        title: 'Seven Days at UMN',
        description: 'a game project',
    }
]


const InProgressSection = async () => {
    return (
        <article
            className={'grid grid-cols-1 md:grid-cols-3 gap-4'}
        >
            {data.map((post) => (
                <Card
                    key={post.id}
                >
                    <CardHeader>
                        <CardTitle>
                            {post.title}
                        </CardTitle>
                        <CardDescription>
                            {post.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className={"rounded-full p-2"}
                            title={"View on Github"}
                            variant={"outline"}
                            size={"icon"}>
                            <Image
                                className={"dark:invert"}
                                src={GithubIcon}
                                alt={"Github Icon"}
                                width={24}
                                height={24}
                            />
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </article>
    );
}

export {InProgressSection}