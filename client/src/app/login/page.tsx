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

// Login Page
export default function LoginPage() {
  return (
    <main>
      <section
        className='flex flex-col items-center justify-center h-screen gap-4'
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
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" /> Login
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}