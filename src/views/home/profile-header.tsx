"use client"

import AvatarComponent from "@/components/avatar";
import { PanelHeader, PanelTitle } from "@/components/panel";
import { TextFlip } from "@/components/text-flip";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "motion/react";

export function ProfileHeader() {
  return (
    <PanelHeader className="relative flex items-center gap-4 mx-4">
      <AvatarComponent />
      <div className="flex flex-col">
        <PanelTitle>Jashan Preet Singh</PanelTitle>
        <TextFlip
            className="text-sm text-muted-foreground"
            as={motion.span}
            variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
            }}
        >
          <span>Full Stack Developer</span>
          <span>Freelancer</span>
          <span>Open Source Contributor</span>
          <span>Learning Web3</span>
          <span>Turning ideas into reality</span>
          <span>Design Engineer</span>
        </TextFlip>
      </div>
      <div className="absolute top-0 right-0 m-2">
        <ThemeToggle />
      </div>
    </PanelHeader>
  );
}
