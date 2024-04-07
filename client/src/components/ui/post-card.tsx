'use client'
// Post Card Component
import React from 'react';
import { BellRing, Check } from "lucide-react"
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


type CardProps = React.ComponentProps<typeof Card>

export function PostCard({ className, post, ...props }: CardProps & { post: PostTypes }) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>
          {post.title}
        </CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* <Image
          src={post.thumbnail}
          alt="Post Image"
          width={380}
          height={200}
        /> */}
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> More
        </Button>
      </CardFooter>
    </Card>
  )
}
