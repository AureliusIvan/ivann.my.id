'use server'

import Image from "next/image";
import Mail from "@/static/svg/mail-icon.svg";
import SpotifyIcon from "@/static/svg/spotify.svg";
import GithubIcon from "@/static/svg/github-icon.svg";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";

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
                    On Repeat
                </h1>
                <p
                    className={"font-bold"}
                >
                    Eyes On Me by BADBADNOTGOO
                </p>
            </section>
        </div>
    )
}


const getGithubData = async () => {
    const response = await fetch('https://api.github.com/users/AureliusIvan');
    return response.json();
}


const Github = async () => {
    const data = await getGithubData();
    return (
        <section
            // href={data?.html_url}
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

            <section>

                <h1>
                    <HoverCard>
                        <HoverCardTrigger>{data?.login} </HoverCardTrigger>
                        <HoverCardContent>
                            <Image src={data.avatar_url} alt={"avatar"} width={100} height={100}/>
                        </HoverCardContent>
                    </HoverCard>
                     | {data?.public_repos} Repositories
                </h1>
                <p
                    className={"font-bold"}
                >
                    On Github
                </p>
            </section>
        </section>
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
                <h1>Or.. send me a mail!</h1>

                <Image
                    className={
                        "w-12 h-12 pointer-events-auto " +
                        "cursor-pointer hover:scale-125 " +
                        "transition-transform duration-300 " +
                        "ease-in-out"}
                    src={Mail}
                    alt={"mail icon"}/>
            </section>

        </footer>
    )
}

export default Footer;