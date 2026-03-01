"use client"

import AvatarComponent from "@/components/avatar";
import { PanelHeader, PanelTitle } from "@/components/panel";
import { TextFlip } from "@/components/text-flip";
import { ThemeToggle } from "@/components/theme-toggle";
import { user } from "@/data/user";
import { motion } from "motion/react";

export function ProfileHeader() {
  return (
    <PanelHeader className="relative flex items-center gap-4 px-4">
      <AvatarComponent src={user.avatar} alt={user.name} fallback={user.initials} />
      <div className="flex flex-col">
        <PanelTitle className="text-[1.5rem]">{user.name}</PanelTitle>
        <TextFlip
            className="text-sm text-muted-foreground"
            as={motion.span}
            variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
            }}
        >
          {user.roles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </TextFlip>
      </div>
      <div className="absolute top-0 right-0 sm:p-2">
        <ThemeToggle />
      </div>
    </PanelHeader>
  );
}
