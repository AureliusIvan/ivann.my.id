import "./globals.css";

import type {Metadata} from "next";
import type {NavbarRouteTypes} from '@/components/ui/navbar.component';

import {ReactNode} from "react";
import {Navbar} from '@/components/ui/navbar.component';
import {cn} from '@/lib/utils';
import {ThemeProvider} from '@/components/theme-provider';
import {Montserrat} from 'next/font/google'
import Footer from "@/components/ui/footer";


export const metadata: Metadata = {
  title: "Aurelius Ivan Wijaya",
  description: "I'm Ivan, a software engineer who loves to write about web development, technology, and life.",
};

const font = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
})

const Routes: NavbarRouteTypes[] = [
  {
    path: '',
    name: 'Home'
  },
  {
    path: 'log',
    name: 'log'
  }
]

interface RootLayoutProps {
  children: ReactNode;
}


export default function RootLayout(
    {children}: Readonly<RootLayoutProps>
) {
  return (
      <html lang="en" suppressHydrationWarning className={"transform-gpu transition-all "}>
      <body
          className={cn(
              "min-h-screen bg-background font-sans " +
              "antialiased",
              font.variable
          )}
      >

      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={true}
      >
        <main
            id={'main-page'}
            className='min-h-screen h-full overflow-x-hidden relative
                dark:bg-primaryDark dark:text-textPrimaryDark
                bg-primaryLight text-textPrimaryLight'>

          <Navbar routes={Routes}/>

          {children}

          <Footer/>
        </main>

      </ThemeProvider>

      </body>

      </html>
  );
}