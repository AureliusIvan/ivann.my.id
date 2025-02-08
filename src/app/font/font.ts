import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

export const MontserratFont = Montserrat({
    weight: ["400", "500", "600", "700"],
    variable: "--font-sans",
    subsets: ["latin"],
});

export const MonoglyphicFont = localFont({
    src: "./font-assets/Monoglyphic-Medium.ttf",
    display: "swap",
    variable: "--font-monogliphic",
});
