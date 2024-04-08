'use server'
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


export default async function LoginPage() {

  return (
    <main>
      <section
        className='flex flex-col items-center justify-center h-screen gap-4'
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
            <CardFooter>
              {/* <LoginButton /> */}
              <Button
                type='submit'
                className="w-full">
                <Check className="mr-2 h-4 w-4" /> Login
              </Button>
            </CardFooter>
          </Card>
        </form>
      </section>
    </main>
  );
}