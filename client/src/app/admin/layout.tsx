// Layout for admin pages
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import type { NavbarRouteTypes } from '@/components/ui/navbar.component';

export const metadata: Metadata = {
  title: "Ivan Personal Blog",
  description: "I'm Ivan, a software engineer who loves to write about web development, technology, and life.",
};


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const Routes: NavbarRouteTypes[] = [
  {
    path: '',
    name: 'Home'
  },
  {
    path: 'showcase',
    name: 'Showcase'
  },
  {
    path: 'chat',
    name: 'Chat'
  },
  {
    path: 'login',
    name: 'Login'
  }
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='min-h-screen'>
      {children}
    </main>
  );
}