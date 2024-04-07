'use client'
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Input } from '@/components/ui/input'

export const LoginButton = (login: any) => {
  return (
    <Button
      onClick={login}
      className="w-full">
      <Check className="mr-2 h-4 w-4" /> Login
    </Button>
  )
}

export const LoginInput = (props: any) => {
  return (
    <Input
      {...props}
      type=''
    />
  )
}