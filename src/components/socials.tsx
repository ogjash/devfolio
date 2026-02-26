"use client"

import { PanelContent } from "./panel";
import { Button } from "./ui/button";
import { Avatar } from '@base-ui/react/avatar';

import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { Tooltip } from "@/components/ui/tooltip-card";

export function Github() {
    return(
        <div className="p-2 md:p-4">
            <div className="flex flex-row">
                <Avatar.Root className="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-primary align-middle text-base font-medium text-background select-none">
                    <Avatar.Image
                        src="/images/profile.png"
                        width="48"
                        height="48"
                        className="size-full object-cover"
                    />
                    <Avatar.Fallback className="flex size-full items-center justify-center text-base">
                    OG
                    </Avatar.Fallback>
                </Avatar.Root>
                <div className="px-2">
                    <h1 className="text-primary font-semibold">Jashanpreet Singh</h1>
                    <h2 className="text-primary/50">ogjash</h2>
                </div>
            </div>

            <h1 className="text-xs py-2 px-1">Life is a story—make yours a bestseller</h1>

            <h2 className="flex flex-row gap-1 items-center text-primary/50 text-xs"> <HiOutlineLocationMarker /> New Delhi, India</h2>

            <div className="flex flex-row gap-3">
                <div className="flex flex-row gap-1 mt-2 text-sm text-primary/50">
                    <span className="font-semibold text-primary">22</span>Repositories
                </div>
                <div className="flex flex-row gap-1 mt-2 text-sm text-primary/50">
                    <span className="font-semibold text-primary">10</span>Followers
                </div>
            </div>
            
        </div>
    )
}

export function Linkedin() {
    return (
        <div className="w-70 overflow-hidden rounded-lg">
            <div className="relative h-20 w-full">
                <img
                    src="/images/linkedin/banner.jpeg"
                    alt="banner"
                    className="h-full w-full object-cover"
                />
                <div className="absolute -bottom-8 left-3">
                    <img
                        src="/images/linkedin/profile.jpeg"
                        alt="profile"
                        className="size-16 rounded-full border-[3px] border-background object-cover"
                    />
                </div>
            </div>

            <div className="px-4 pb-3 pt-10">
                <h1 className="text-sm font-semibold text-primary">Jashanpreet Singh</h1>
                <p className="mt-0.5 text-xs leading-tight text-primary/60">
                    Pre-Final Year @NSUT | Full Stack Web Developer
                </p>
                <p className="mt-2 flex items-center gap-1 text-xs text-primary/50">
                    New Delhi, India
                </p>
                <div className="mt-2 text-sm font-semibold text-[#0A66C2]">
                    500+ <span className="text-[#0A66C2]/80">connections</span>
                </div>
            </div>
        </div>
    );
};

export function Twitter() {
    return (
        <div className="w-70 overflow-hidden rounded-lg">
            <div className="relative h-20 w-full">
                <img
                    src="/images/twitter/banner.jpeg"
                    alt="banner"
                    className="h-full w-full object-cover"
                />
                <div className="absolute -bottom-8 left-3">
                    <img
                        src="/images/twitter/profile.jpg"
                        alt="profile"
                        className="size-16 rounded-full border-[3px] border-background object-cover"
                    />
                </div>
            </div>

            <div className="px-4 pb-3 pt-10">
                <h1 className="text-sm font-semibold text-primary">Jashanpreet Singh</h1>
                <p className="mt-0.5 text-xs text-primary/60">@OGjashan</p>
                <p className="mt-1 text-xs leading-snug text-primary/80">
                    21, VScode regular user
                </p>
                <div className="mt-2 flex gap-3 text-sm text-primary/50">
                    <span className="flex gap-1"><span className="font-semibold text-primary">21</span>Following</span>
                    <span className="flex gap-1"><span className="font-semibold text-primary">5</span>Followers</span>
                </div>
            </div>
        </div>
    );
};

export function Leetcode() {
    return (
        <div className="p-2 md:p-4">
            <div className="flex flex-row items-center gap-3">
                <Avatar.Root className="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-primary align-middle text-base font-medium text-background select-none">
                    <Avatar.Image
                        src="/images/profile.png"
                        width="48"
                        height="48"
                        className="size-full object-cover"
                    />
                    <Avatar.Fallback className="flex size-full items-center justify-center text-base">
                        OG
                    </Avatar.Fallback>
                </Avatar.Root>
                <div>
                    <h1 className="text-sm font-semibold text-primary">Jashanpreet Singh</h1>
                    <h2 className="text-xs text-primary/50">itsOG</h2>
                </div>
            </div>

            <div className="mt-3 flex gap-4 text-sm text-primary/50">
                <div className="flex flex-col items-center">
                    <span className="font-semibold text-primary">20</span>
                    <span className="text-xs">Solved</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-semibold text-[#1CBABA]">Easy</span>
                    <span className="text-xs">7</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-semibold text-[#ECB700]">Medium</span>
                    <span className="text-xs">12</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-semibold text-[#D73737]">Hard</span>
                    <span className="text-xs">1</span>
                </div>
            </div>
        </div>
    );
};

export function Codeforces() {
    return (
        <div className="p-2 md:p-4">
            <div className="flex flex-row items-center gap-3">
                <Avatar.Root className="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-primary align-middle text-base font-medium text-background select-none">
                    <Avatar.Image
                        src="/images/profile.png"
                        width="48"
                        height="48"
                        className="size-full object-cover"
                    />
                    <Avatar.Fallback className="flex size-full items-center justify-center text-base">
                        OG
                    </Avatar.Fallback>
                </Avatar.Root>
                <div>
                    <h1 className="text-sm font-semibold text-primary">Jashanpreet Singh</h1>
                    <h2 className="text-xs text-primary/50">O.G.</h2>
                </div>
            </div>

            <div className="mt-3 flex gap-4 text-sm">
                <div className="flex flex-col">
                    <span className="text-xs text-primary/50">Rating</span>
                    <span className="font-semibold text-primary">1180</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-primary/50">Rank</span>
                    <span className="font-semibold text-[#808080]">Newbie</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-primary/50">Problems</span>
                    <span className="font-semibold text-primary">165</span>
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
                        <a href="https://github.com/ogjash">
                            <Button
                                size="sm"
                                variant="secondary"
                            >
                                <FaGithub />
                                <span className="hidden sm:inline">Github</span>
                            </Button>
                        </a>
                        
                    </Tooltip>


                    <Tooltip
                        containerClassName="text-foreground bg-background dark:bg-background dark:text-foreground"
                        content={<Linkedin />}
                        >
                        <a href="https://linkedin.com/in/ijashan">
                            <Button
                                size="sm"
                                variant="secondary"
                            >
                                <FaLinkedin />
                                <span className="hidden sm:inline">LinkedIn</span>
                            </Button>
                        </a>
                        
                    </Tooltip>
                    

                    <Tooltip
                        containerClassName="text-foreground bg-background dark:bg-background dark:text-foreground"
                        content={<Twitter />}
                        >
                        <a href="https://x.com/OGjashan">
                            <Button
                                size="sm"
                                variant="secondary"
                            >
                                <FaXTwitter />
                                <span className="hidden sm:inline">Twitter</span>
                            </Button>
                        </a>
                        
                    </Tooltip>


                    <Tooltip
                        containerClassName="text-foreground bg-background dark:bg-background dark:text-foreground"
                        content={<Leetcode />}
                        >
                        <a href="https://leetcode.com/u/itsOG">
                            <Button
                                size="sm"
                                variant="secondary"
                            >
                                <SiLeetcode />
                                <span className="hidden sm:inline">LeetCode</span>
                            </Button>
                        </a>
                        
                    </Tooltip>
                    

                    <Tooltip
                        containerClassName="text-foreground bg-background dark:bg-background dark:text-foreground"
                        content={<Codeforces />}
                        >
                        <a href="https://codeforces.com/profile/O.G.">
                            <Button
                                size="sm"
                                variant="secondary"
                            >
                                <SiCodeforces />
                                <span className="hidden sm:inline">Codeforces</span>
                            </Button>
                        </a>
                        
                    </Tooltip>
                    
                </div>
            </PanelContent>
    );
};
