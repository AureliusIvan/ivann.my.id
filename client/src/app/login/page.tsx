'use client'
import { BellRing, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Switch } from "@/components/ui/switch"
import { Input } from '@/components/ui/input'
import AuthService from '@/services/auth.service'
import { LoginButton } from './part/login.button'
import React, { useState } from 'react'
// import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function LoginPage() {
  const router = useRouter()
  async function login(
    email: string,
    password: string
  ) {
    const response: any = await AuthService.login(email, password)
    if (response) {
      router.push('/admin')
    } else {
      console.log('Login failed')
    }
  }

  return (
    <main className='page'>
      <section
        className='flex flex-col items-center justify-center  w-full gap-4'
      >
        <form
        >
          <Card className={cn("w-[380px]")}>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Fill Auth.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Input placeholder='Email' type='text' />
              <Input placeholder='Password' type='password' />
            </CardContent>
            <CardFooter
              className='flex flex-col gap-4'
            >
              {/* <LoginButton /> */}
              <Button
                type='button'
                onClick={(e) => {
                  e.preventDefault()
                  login("email", "password")
                }}
                className="w-full">
                <Check className="mr-2 h-4 w-4" /> Login
              </Button>

              {/* <Link
                className='text-blue-500 hover:text-blue-600'
                href='/forgot-password'
              >
                Forgot Password?
              </Link> */}
            </CardFooter>
          </Card>
        </form>
      </section>
    </main>
  );
}

