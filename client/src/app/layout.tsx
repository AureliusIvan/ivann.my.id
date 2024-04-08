import type { Metadata } from "next";
import { Noto_Sans as Font } from "next/font/google";
import "./globals.css";
import { Navbar } from '@/components/ui/navbar.component';
import type { NavbarRouteTypes } from '@/components/ui/navbar.component';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/ui/footer';
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivan Personal Blog",
  description: "I'm Ivan, a software engineer who loves to write about web development, technology, and life.",
};


// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })
// bebas neue
// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

const font = Font({
  weight: "400",
  variable: "--font-sans",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          font.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className='min-h-screen
          dark:bg-primaryDark
          dark:text-textPrimaryDark
          bg-primaryLight
          text-textPrimaryLight
          '>
            <Navbar routes={Routes} />

            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}