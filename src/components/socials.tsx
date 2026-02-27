"use client"

import { PanelContent } from "./panel";
import { Button } from "./ui/button";
import { Avatar } from '@base-ui/react/avatar';

import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { Tooltip } from "@/components/ui/tooltip-card";
import { socials } from "@/data/socials";

export function Github() {
    const { profile: p } = socials.github;
    return(
        <div className="p-2 md:p-4">
            <div className="flex flex-row">
                <Avatar.Root className="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-primary align-middle text-base font-medium text-background select-none">
                    <Avatar.Image
                        src={p.avatar}
                        width="48"
                        height="48"
                        className="size-full object-cover"
                    />
                    <Avatar.Fallback className="flex size-full items-center justify-center text-base">
                    {p.fallback}
                    </Avatar.Fallback>
                </Avatar.Root>
                <div className="px-2">
                    <h1 className="text-primary font-semibold">{p.name}</h1>
                    <h2 className="text-primary/50">{p.username}</h2>
                </div>
            </div>

            <h1 className="text-xs py-2 px-1">{p.bio}</h1>

            <h2 className="flex flex-row gap-1 items-center text-primary/50 text-xs"> <HiOutlineLocationMarker /> {p.location}</h2>

            <div className="flex flex-row gap-3">
                <div className="flex flex-row gap-1 mt-2 text-sm text-primary/50">
                    <span className="font-semibold text-primary">{p.repositories}</span>Repositories
                </div>
                <div className="flex flex-row gap-1 mt-2 text-sm text-primary/50">
                    <span className="font-semibold text-primary">{p.followers}</span>Followers
                </div>
            </div>
            
        </div>
    )
}

export function Linkedin() {
    const { profile: p } = socials.linkedin;
    return (
        <div className="w-70 overflow-hidden rounded-lg">
            <div className="relative h-20 w-full">
                <img
                    src={p.banner}
                    alt="banner"
                    className="h-full w-full object-cover"
                />
                <div className="absolute -bottom-8 left-3">
                    <img
                        src={p.avatar}
                        alt="profile"
                        className="size-16 rounded-full border-[3px] border-background object-cover"
                    />
                </div>
            </div>

            <div className="px-4 pb-3 pt-10">
                <h1 className="text-sm font-semibold text-primary">{p.name}</h1>
                <p className="mt-0.5 text-xs leading-tight text-primary/60">
                    {p.headline}
                </p>
                <p className="mt-2 flex items-center gap-1 text-xs text-primary/50">
                    {p.location}
                </p>
                <div className="mt-2 text-sm font-semibold text-[#0A66C2]">
                    {p.connections} <span className="text-[#0A66C2]/80">connections</span>
                </div>
            </div>
        </div>
    );
}

export function Twitter() {
    const { profile: p } = socials.twitter;
    return (
        <div className="w-70 overflow-hidden rounded-lg">
            <div className="relative h-20 w-full">
                <img
                    src={p.banner}
                    alt="banner"
                    className="h-full w-full object-cover"
                />
                <div className="absolute -bottom-8 left-3">
                    <img
                        src={p.avatar}
                        alt="profile"
                        className="size-16 rounded-full border-[3px] border-background object-cover"
                    />
                </div>
            </div>

            <div className="px-4 pb-3 pt-10">
                <h1 className="text-sm font-semibold text-primary">{p.name}</h1>
                <p className="mt-0.5 text-xs text-primary/60">{p.handle}</p>
                <p className="mt-1 text-xs leading-snug text-primary/80">
                    {p.bio}
                </p>
                <div className="mt-2 flex gap-3 text-sm text-primary/50">
                    <span className="flex gap-1"><span className="font-semibold text-primary">{p.following}</span>Following</span>
                    <span className="flex gap-1"><span className="font-semibold text-primary">{p.followers}</span>Followers</span>
                </div>
            </div>
        </div>
    );
}

export function Leetcode() {
    const { profile: p } = socials.leetcode;
    return (
        <div className="p-2 md:p-4">
            <div className="flex flex-row items-center gap-3">
                <Avatar.Root className="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-primary align-middle text-base font-medium text-background select-none">
                    <Avatar.Image
                        src={p.avatar}
                        width="48"
                        height="48"
                        className="size-full object-cover"
                    />
                    <Avatar.Fallback className="flex size-full items-center justify-center text-base">
                        {p.fallback}
                    </Avatar.Fallback>
                </Avatar.Root>
                <div>
                    <h1 className="text-sm font-semibold text-primary">{p.name}</h1>
                    <h2 className="text-xs text-primary/50">{p.username}</h2>
                </div>
            </div>

            <div className="mt-3 flex gap-4 text-sm text-primary/50">
                <div className="flex flex-col items-center">
                    <span className="font-semibold text-primary">{p.solved}</span>
                    <span className="text-xs">Solved</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-semibold text-[#1CBABA]">Easy</span>
                    <span className="text-xs">{p.easy}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-semibold text-[#ECB700]">Medium</span>
                    <span className="text-xs">{p.medium}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-semibold text-[#D73737]">Hard</span>
                    <span className="text-xs">{p.hard}</span>
                </div>
            </div>
        </div>
    );
}

export function Codeforces() {
    const { profile: p } = socials.codeforces;
    return (
        <div className="p-2 md:p-4">
            <div className="flex flex-row items-center gap-3">
                <Avatar.Root className="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-primary align-middle text-base font-medium text-background select-none">
                    <Avatar.Image
                        src={p.avatar}
                        width="48"
                        height="48"
                        className="size-full object-cover"
                    />
                    <Avatar.Fallback className="flex size-full items-center justify-center text-base">
                        {p.fallback}
                    </Avatar.Fallback>
                </Avatar.Root>
                <div>
                    <h1 className="text-sm font-semibold text-primary">{p.name}</h1>
                    <h2 className="text-xs text-primary/50">{p.username}</h2>
                </div>
            </div>

            <div className="mt-3 flex gap-4 text-sm">
                <div className="flex flex-col">
                    <span className="text-xs text-primary/50">Rating</span>
                    <span className="font-semibold text-primary">{p.rating}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-primary/50">Rank</span>
                    <span className="font-semibold text-[#808080]">{p.rank}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-primary/50">Problems</span>
                    <span className="font-semibold text-primary">{p.problems}</span>
                </div>
            </div>
        </div>
    );
}

export default function Socials() {

    return(
        <PanelContent>
                <h1 className="flex gap-1">
                    Here are my 
                    <span className="font-semibold">socials</span>
                </h1>


                <div className="flex flex-row flex-wrap gap-2 mt-2">

                    <Tooltip
                        containerClassName="text-foreground bg-background dark:bg-background dark:text-foreground"
                        content={<Github />}
                        >
                        <a href={socials.github.url}>
                            <Button
                                size="sm"
                                variant="secondary"
                            >
                                <FaGithub />
                                <span className="hidden sm:inline">{socials.github.label}</span>
                            </Button>
                        </a>
                        
                    </Tooltip>


                    <Tooltip
                        containerClassName="text-foreground bg-background dark:bg-background dark:text-foreground"
                        content={<Linkedin />}
                        >
                        <a href={socials.linkedin.url}>
                            <Button
                                size="sm"
                                variant="secondary"
                            >
                                <FaLinkedin />
                                <span className="hidden sm:inline">{socials.linkedin.label}</span>
                            </Button>
                        </a>
                        
                    </Tooltip>
                    

                    <Tooltip
                        containerClassName="text-foreground bg-background dark:bg-background dark:text-foreground"
                        content={<Twitter />}
                        >
                        <a href={socials.twitter.url}>
                            <Button
                                size="sm"
                                variant="secondary"
                            >
                                <FaXTwitter />
                                <span className="hidden sm:inline">{socials.twitter.label}</span>
                            </Button>
                        </a>
                        
                    </Tooltip>


                    <Tooltip
                        containerClassName="text-foreground bg-background dark:bg-background dark:text-foreground"
                        content={<Leetcode />}
                        >
                        <a href={socials.leetcode.url}>
                            <Button
                                size="sm"
                                variant="secondary"
                            >
                                <SiLeetcode />
                                <span className="hidden sm:inline">{socials.leetcode.label}</span>
                            </Button>
                        </a>
                        
                    </Tooltip>
                    

                    <Tooltip
                        containerClassName="text-foreground bg-background dark:bg-background dark:text-foreground"
                        content={<Codeforces />}
                        >
                        <a href={socials.codeforces.url}>
                            <Button
                                size="sm"
                                variant="secondary"
                            >
                                <SiCodeforces />
                                <span className="hidden sm:inline">{socials.codeforces.label}</span>
                            </Button>
                        </a>
                        
                    </Tooltip>
                    
                </div>
            </PanelContent>
    );
};
