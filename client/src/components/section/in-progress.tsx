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
import Image from "next/image";

import GithubIcon from "@/static/svg/github-icon.svg";
import BlurImage from "@/static/images/blur.png";

const data = [
  {
    id: 0,
    title: 'File Morph',
    description: 'To Do',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 1,
    title: 'Ghostrun',
    description: 'In Progress',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 2,
    title: 'Perfume Recommender AI',
    description: 'Done',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 3,
    title: 'Kantong Neko',
    description: 'Done',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 4,
    title: 'Room Reservation System',
    description: 'Done',
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 4,
    title: 'Seven Days at UMN',
    description: 'a game project',
    image: 'https://picsum.photos/200/300'
  }
]

const InProgressSection = async () => {
  return (
      <article
          className={
            'grid grid-cols-1 md:grid-cols-3 gap-4'
          }
      >

        {data.map((post) => (
            <Card
                key={post.id}
                className={
                  "rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 pointer-events-auto cursor-pointer"
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
                      `w-full h-52 object-cover object-center rounded-3xl`
                    }
                    src={post.image}
                    alt={"Image"}
                    width={150}
                    height={150}
                    decoding={"async"}
                />

              </CardContent>

              <CardFooter>

                <Button
                    className={
                      "rounded-full p-2"
                    }
                    title={"View on Github"}
                    variant={"outline"}
                    size={"icon"}
                >

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