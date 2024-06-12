import "./globals.css";

import type {Metadata} from "next";
import type {NavbarRouteTypes} from '@/components/ui/navbar.component';

import {ReactNode} from "react";
import {ThemeProvider} from '@/components/theme-provider';
import {Montserrat} from 'next/font/google'
import dynamic from 'next/dynamic';
import {SoundProvider} from "@/providers/useSound";
import {
  GoogleTagManager,
} from '@next/third-parties/google'
import {LottieBackground} from "@/components/ui/lottie-background";

const Footer = dynamic(() => import('@/components/ui/footer'), {})
const Navbar = dynamic(() => import('@/components/ui/navbar.component'), {})

export const metadata: Metadata = {
  title: "Aurelius Ivan Wijaya",
  description: "I'm Ivan, a software engineer who loves to write about web development, technology, and life.",
  robots: {
    follow: true,
    index: true,
    notranslate: true,
  },
  openGraph: {
    description: "I am Ivan, a software engineer who loves to write about web development, technology, and life.",
    type: 'website',
    emails: ['aureliusivanwijaya@gmail.com'],
    countryName: 'Indonesia',
    siteName: 'Aurelius Ivan Wijaya'
  },
  applicationName: 'Aurelius Ivan Wijaya',
  keywords: ['Ivan', 'Aurelius', 'Wijaya', 'Software Engineer', 'Web Development', 'Technology', 'Life'],
  icons: 'https://ivann.my.id/favicon.ico'
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


export default async function RootLayout(
    {children}: Readonly<RootLayoutProps>
) {
  return (
      <html
          lang="en"
          suppressHydrationWarning
          className={font.className}
      >

      <GoogleTagManager gtmId="GTM-W2N78S3C"/>

      <body>

      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
      >
        <LottieBackground>
          <main
              id={'main-page'}
              className='min-h-screen h-full overflow-x-hidden relative
                dark:bg-primaryDark dark:text-textPrimaryDark
                bg-primaryLight text-textPrimaryLight'
          >

            <Navbar routes={Routes}/>

            {children}

            <Footer/>
          </main>
        </LottieBackground>
      </ThemeProvider>

      </body>

      </html>
  );
}