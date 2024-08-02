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
            text-white
            hover:opacity-60 
            border border-black dark:border-white`
          }
      >
        <FaSpotify
            className={`w-6 h-6 invert dark:invert-0`}
        />

        <section>
          <h1 className={'text-black dark:text-white'}>
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
            text-white
            hover:opacity-60 
            border border-black dark:border-white`
          }
      >
        <FaGithub
            className={"w-6 h-6 invert dark:invert-0"}
        />
        <div
            className={"flex flex-col"}
        >
          <span className={`text-black dark:text-white`}>
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
            `text-white 
            p-[1.5rem] md:p-[4rem]  
            flex md:flex-row flex-col justify-between md:items-center gap-4 md:gap-4 
            border-t border-black dark:border-white`
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
                href={"https://www.linkedin.com/in/aureliusivan/"}
            >
              <FaLinkedin
                  className={"w-6 h-6"}
              />
            </a>
            <a
                target={"_blank"}
                href={"https://www.instagram.com/aureliusivan/"}
            >
              <FaSquareInstagram
                  className={"w-6 h-6"}
              />
            </a>
          </div>

          <h1 className={cn(`text-black dark:text-white`, MonoglyphicFont.className)}>Or.. send me a mail</h1>

          <a
              title={"email to ivan"}
              href={"mailto:aureliusivanwijaya@gmail.com?subject=Hello Ivan!&body=Hello Ivan! I want to say..."}
              target={"_blank"}
          >

            <MdEmail
                className={"w-12 h-12 hover:opacity-60"}
            />
          </a>

        </section>
        <span
            className={cn(`md:text-left text-center block md:hidden tracking-wide font-light`, MonoglyphicFont.className)}
        >
                &copy; 2024 Ivan
          </span>
      </footer>
  )
}

export default Footer;
