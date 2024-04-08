import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
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
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar routes={Routes} />
          <main className='min-h-screen'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}