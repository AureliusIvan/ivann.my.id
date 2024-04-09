'use server'
// Post Card Component
import React from 'react';
import { BellRing, Check, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { PostTypes } from '@server/post'
import Link from 'next/link';


type CardProps = React.ComponentProps<typeof Card>

export async function PostCard({ className, post, ...props }: CardProps & { post: PostTypes }) {
  return (
    <Card className={cn("w-[380px] max-w-[100%] bg-transparent", className)} {...props}>
      <CardHeader>
        <CardTitle>
          {post.title}
        </CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Image
          className='rounded-lg'
          priority
          src={post.thumbnail}
          alt="Post Image"
          width={380}
          height={200}

        />
      </CardContent>
      <CardFooter>
        <Button
          className="w-full">
          More
          <ChevronRight className="mr-2 h-4 w-4" />
        </Button>
        {/* <Link
          className='text-blue-500 hover:text-blue-600'
          href={`/post/${post._id}`}
        >
          More
        </Link> */}
      </CardFooter>
    </Card>
  )
}
