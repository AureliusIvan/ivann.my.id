'use server'

import Image from "next/image";
import {getGithubData} from "@/app/action";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {MonoglyphicFont} from "@/app/font/font";
import {FaGithub, FaLinkedin, FaSpotify} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FaSquareInstagram} from "react-icons/fa6";

const Spotify = async () => {
  return (
      <Link
          target="_blank"
          href="https://open.spotify.com/track/6tNQ70jh4OwmPGpYy6R2o9?si=365309aa3c0b493b"
          className={cn(
            "group select-none cursor-pointer",
            "px-4 py-3 rounded-lg",
            "flex items-center gap-3",
            "bg-white/50 dark:bg-neutral-800/50 backdrop-blur-md",
            "border border-neutral-200 dark:border-neutral-700",
            "hover:bg-white/70 dark:hover:bg-neutral-800/70",
            "hover:border-green-400 dark:hover:border-green-500",
            "hover:shadow-lg hover:shadow-green-500/20",
            "transition-all duration-300 ease-out",
            "hover:-translate-y-1"
          )}
      >
        <div className="flex-shrink-0 p-2 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
          <FaSpotify className="w-5 h-5 text-green-600 dark:text-green-400" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
            Beautiful Things
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
            Benson Boone
          </p>
        </div>

        <div className="text-xs text-neutral-500 dark:text-neutral-500 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
          ♪
        </div>
      </Link>
  )
}

const Github = async () => {
  const data = await getGithubData();
  return (
      <a
          target="_blank"
          href="https://github.com/AureliusIvan/"
          className={cn(
            "group select-none cursor-pointer",
            "px-4 py-3 rounded-lg",
            "flex items-center gap-3",
            "bg-white/50 dark:bg-neutral-800/50 backdrop-blur-md",
            "border border-neutral-200 dark:border-neutral-700",
            "hover:bg-white/70 dark:hover:bg-neutral-800/70",
            "hover:border-neutral-400 dark:hover:border-neutral-500",
            "hover:shadow-lg hover:shadow-neutral-500/20",
            "transition-all duration-300 ease-out",
            "hover:-translate-y-1"
          )}
      >
        <div className="flex-shrink-0 p-2 rounded-full bg-neutral-500/10 group-hover:bg-neutral-500/20 transition-colors">
          <FaGithub className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
            AureliusIvan
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
            {data?.public_repos} public repositories
          </p>
        </div>

        <div className="text-xs text-neutral-500 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
          →
        </div>
      </a>
  )
}

const SocialLinks = () => {
  const socials = [
    {
      href: "https://www.linkedin.com/in/aurelius-ivan-wijaya",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      href: "https://www.instagram.com/aureli.van/",
      icon: FaSquareInstagram,
      label: "Instagram",
      color: "hover:text-pink-600 dark:hover:text-pink-400"
    }
  ];

  return (
    <div className="flex gap-4">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            target="_blank"
            href={social.href}
            className={cn(
              "p-3 rounded-full",
              "bg-white/50 dark:bg-neutral-800/50 backdrop-blur-md",
              "border border-neutral-200 dark:border-neutral-700",
              "text-neutral-600 dark:text-neutral-400",
              social.color,
              "hover:border-neutral-400 dark:hover:border-neutral-500",
              "hover:shadow-lg hover:-translate-y-1",
              "transition-all duration-300 ease-out",
              "group"
            )}
            aria-label={social.label}
          >
            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        );
      })}
    </div>
  );
};

async function Footer() {
  return (
      <footer
          id="footer"
          className={cn(
            "relative mt-24 py-16 px-6 md:px-8",
            "bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800",
            "border-t border-neutral-200 dark:border-neutral-700"
          )}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] [background-size:20px_20px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Section - Activity Cards */}
            <div className="space-y-4">
              <h3 className={cn(
                "text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-6",
                MonoglyphicFont.className
              )}>
                Currently Playing
              </h3>
              <div className="space-y-3">
                <Spotify />
                <Github />
              </div>
            </div>

            {/* Center Section - Contact */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="space-y-4">
                <h3 className={cn(
                  "text-lg font-semibold text-neutral-900 dark:text-neutral-100",
                  MonoglyphicFont.className
                )}>
                  Let&apos;s Connect
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
                  Have a project in mind or just want to chat about tech?
                </p>
              </div>

              <SocialLinks />

              <a
                href="mailto:aureliusivanwijaya@gmail.com?subject=Hello Ivan!&body=Hello Ivan! I want to say..."
                target="_blank"
                className={cn(
                  "group inline-flex items-center gap-3 px-6 py-3 rounded-full",
                  "bg-gradient-to-r from-blue-500 to-purple-600",
                  "text-white font-medium",
                  "hover:from-blue-600 hover:to-purple-700",
                  "hover:shadow-lg hover:shadow-blue-500/25",
                  "hover:-translate-y-1",
                  "transition-all duration-300 ease-out",
                  MonoglyphicFont.className
                )}
              >
                <MdEmail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Send Email
              </a>
            </div>

            {/* Right Section - About */}
            <div className="space-y-4 lg:text-right">
              <h3 className={cn(
                "text-lg font-semibold text-neutral-900 dark:text-neutral-100",
                MonoglyphicFont.className
              )}>
                About This Site
              </h3>
              <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <p>Built with Next.js & TypeScript</p>
                <p>Styled with Tailwind CSS</p>
                <p>Deployed on Vercel</p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className={cn("text-white text-sm font-bold", MonoglyphicFont.className)}>I</span>
                </div>
                <span className={cn(
                  "text-neutral-900 dark:text-neutral-100 font-medium",
                  MonoglyphicFont.className
                )}>
                  Ivan Wijaya
                </span>
              </div>

              <p className={cn(
                "text-sm text-neutral-600 dark:text-neutral-400 text-center md:text-right",
                MonoglyphicFont.className
              )}>
                &copy; {new Date().getFullYear()} All rights reserved. Made with ❤️ in Indonesia
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;
