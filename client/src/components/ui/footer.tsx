'use server'

import Image from "next/image";
import Mail from "@/static/svg/mail-icon.svg";
import SpotifyIcon from "@/static/svg/spotify.svg";
import GithubIcon from "@/static/svg/github-icon.svg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";
import {getGithubData} from "@/app/action";


const Spotify = async () => {
  return (
      <div
          className={
              'select-none pointer-events-auto cursor-pointer ' +
              'flex flex-row gap-2.5 ' +
              'bg-gray-800 py-[1rem] px-[2rem] backdrop-blur-2xl ' +
              'rounded-[5rem] dark:bg-gray-900 dark:text-white'
          }
      >
        <Image
            className={"h-auto w-[44px]"}
            src={SpotifyIcon}
            alt={"spotify icon"}
        />

        <section>
          <h1>
            Beautiful Things by Benson Boone
          </h1>

          <a
              target={"_blank"}
              href={"https://open.spotify.com/track/6tNQ70jh4OwmPGpYy6R2o9?si=365309aa3c0b493b"}
              className={"font-bold underline"}
          >
            On Spotify
          </a>
        </section>
      </div>
  )
}

const Github = async () => {
  const data = await getGithubData();
  return (
      <section
          className={
              'select-none pointer-events-auto cursor-pointer ' +
              'flex flex-row gap-2.5 ' +
              'bg-gray-800 py-[1rem] px-[2rem] backdrop-blur-2xl ' +
              'rounded-[5rem] dark:bg-gray-900 dark:text-white'
          }
      >
        <Image
            className={"h-auto w-[44px] invert"}
            src={GithubIcon}
            alt={"spotify icon"}
        />
        <div
            className={"flex flex-col"}
        >
          <span>
            <HoverCard>
              <HoverCardTrigger>{data?.login} </HoverCardTrigger>

              <HoverCardContent>
                <Image
                    src={data.avatar_url}
                    alt={"avatar"}
                    width={100}
                    height={100}/>

              </HoverCardContent>

            </HoverCard>
            | {data?.public_repos} Repositories
          </span>

          <a
              target={"_blank"}
              href={data?.html_url || "#"}
              className={"font-bold underline"}
          >
            On Github
          </a>
        </div>
      </section>
  )
}


interface SocialMediaIconProps {
  id: string,
  href: string,
  alt: string
}

const SocialMediaIcon = ({id, href, alt}: SocialMediaIconProps) => {
  return (
      <a
          href={href}
          target={"_blank"}
          className={"bg-gray-800 rounded-full p-[0.5rem]"}
      >
        <Image
            className='w-6 h-6 pointer-events-auto cursor-pointer
            hover:scale-125 transition-transform duration-300 ease-in-out'
            src={`/image/icon-${id}.svg`}
            alt={alt}
            width={48}
            height={48}
        />
      </a>
  )
}


async function Footer() {
  return (
      <footer
          id={"footer"}
          className={
            `text-white md:p-[4rem] p-[1.5rem] flex md:flex-row justify-between flex-col md:items-center md:gap-4 `
          }
      >
        <section
            className={"flex flex-col gap-4"}
        >
          <Spotify/>
          <Github/>
          <span
              className={"font-bold md:text-left text-center"}
          >
                &copy; 2024 Ivan
                </span>
        </section>

        <section
            className={"flex flex-col items-center justify-center gap-4"}
        >

          <div className="flex gap-2.5">
            <SocialMediaIcon id={"linkedin"} href={"https://www.linkedin.com/in/aurelius-ivan-wijaya/"} alt={"linkedin"}/>
            <SocialMediaIcon id={"instagram"} href={"https://www.instagram.com/aureli.van/"} alt={"instagram"}/>
          </div>

          <h1>Or.. send me a mail!</h1>

          <a
              href={"mailto:aureliusivanwijaya@gmail.com?subject=Hello Ivan!&body=Hello Ivan! I want to say..."}
              target={"_blank"}
          >

            <Image
                className={
                    "w-12 h-12 pointer-events-auto " +
                    "cursor-pointer hover:scale-125 " +
                    "transition-transform duration-300 " +
                    "ease-in-out"}
                src={Mail}
                alt={"mail icon"}
            />

          </a>
        </section>

      </footer>
  )
}

export default Footer;
