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
          target={"_blank"}
          href={"https://open.spotify.com/track/6tNQ70jh4OwmPGpYy6R2o9?si=365309aa3c0b493b"}
          className={
            `select-none pointer-events-auto cursor-pointer 
            px-[1rem] py-[0.5rem]
            flex flex-row gap-2.5 
            backdrop-blur-2xl 
            bg-transparent 
            hover:opacity-60 
            border border-black dark:border-textPrimaryDark` // Updated border color
          }
      >
        <FaSpotify
            className={`w-6 h-6 text-textPrimaryLight dark:text-textPrimaryDark`} // Updated text color
        />

        <section>
          <h1 className={'text-textPrimaryLight dark:text-textPrimaryDark'}> {/* Updated text color */}
            Beautiful Things - Benson Boone
          </h1>
        </section>
      </Link>
  )
}

const Github = async () => {
  const data = await getGithubData();
  return (
      <a
          target={"_blank"}
          href={"https://github.com/AureliusIvan/"}
          className={
            `select-none pointer-events-auto cursor-pointer 
            px-[1rem] py-[0.5rem]
            flex flex-row gap-2.5 
            backdrop-blur-2xl 
            bg-transparent 
            hover:opacity-60 
            border border-black dark:border-textPrimaryDark` // Updated border color
          }
      >
        <FaGithub
            className={"w-6 h-6 text-textPrimaryLight dark:text-textPrimaryDark"} // Updated text color
        />
        <div
            className={"flex flex-col"}
        >
          <span className={`text-textPrimaryLight dark:text-textPrimaryDark`}> {/* Updated text color */}
            AureliusIvan | {data?.public_repos} Repositories
          </span>
        </div>
      </a>
  )
}


interface SocialMediaIconProps {
  id: string,
  href: string,
  alt: string
}

async function Footer() {
  return (
      <footer
          id={"footer"}
          className={
            `text-textPrimaryLight dark:text-textPrimaryDark
            p-[1.5rem] md:p-[4rem]  
            flex md:flex-row flex-col justify-between md:items-center gap-4 md:gap-4 
            border-t border-black dark:border-textPrimaryDark` // Updated border and text colors
          }
      >
        <section
            className={"flex flex-col gap-4"}
        >
          <Spotify/>
          <Github/>
        </section>

        <section
            className={"flex flex-col items-center justify-center gap-4"}
        >

          <div className="flex gap-2.5">
            <a
                target={"_blank"}
                href={"https://www.linkedin.com/in/aurelius-ivan-wijaya"}
            >
              <FaLinkedin
                  className={"w-6 h-6 text-textPrimaryLight dark:text-textPrimaryDark hover:text-accentDark"} // Added text color and hover effect
              />
            </a>
            <a
                target={"_blank"}
                href={"https://www.instagram.com/aureli.van/"}
            >
              <FaSquareInstagram
                  className={"w-6 h-6 text-textPrimaryLight dark:text-textPrimaryDark hover:text-accentDark"} // Added text color and hover effect
              />
            </a>
          </div>

          <h1 className={cn(`text-textPrimaryLight dark:text-textPrimaryDark`, MonoglyphicFont.className)}>Or.. send me a mail</h1> {/* Updated text color */}

          <a
              title={"email to ivan"}
              href={"mailto:aureliusivanwijaya@gmail.com?subject=Hello Ivan!&body=Hello Ivan! I want to say..."}
              target={"_blank"}
          >

            <MdEmail
                className={"w-12 h-12 text-textPrimaryLight dark:text-textPrimaryDark hover:text-accentDark"} // Added text color and hover effect
            />
          </a>

        </section>
        <span
            className={cn(`md:text-left text-center block md:hidden tracking-wide font-light text-textPrimaryLight dark:text-textPrimaryDark`, MonoglyphicFont.className)} // Updated text color
        >
                &copy; 2024 Ivan
          </span>
      </footer>
  )
}

export default Footer;
