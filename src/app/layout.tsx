import "./globals.css";

import type { Metadata } from "next";
import type { NavbarRouteTypes } from '@/components/ui/navbar.component';

import { ReactNode } from "react";
import { ThemeProvider } from '@/components/theme-provider';
import {
    GoogleTagManager,
} from '@next/third-parties/google'
import { MontserratFont } from "@/app/font/font";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar.component";

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

const Routes: NavbarRouteTypes[] = [
    {
        path: '',
        name: 'Home'
    },
]

interface RootLayoutProps {
    children: ReactNode;
}


export default function RootLayout(
    {children}: Readonly<RootLayoutProps>
) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={MontserratFont.className}
        >

        <GoogleTagManager gtmId="GTM-W2N78S3C"/>
        <SpeedInsights/>
        <Analytics/>

        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
        >
            <main
                id={'main-page'}
                className={cn(MontserratFont.className,
                    `min-h-screen h-full overflow-x-hidden relative
                dark:bg-primaryDark dark:text-textPrimaryDark
                bg-primaryLight text-textPrimaryLight
                selection:text-white
                selection:bg-black
                selection:dark:bg-white
                selection:dark:text-black`
                )}
            >

                <Navbar routes={Routes}/>

                {children}

                <Footer/>
            </main>
        </ThemeProvider>

        </body>

        </html>
    );
}
