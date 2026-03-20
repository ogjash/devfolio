"use client"

import { PanelHeader } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { skills } from "@/data/skills";
import {
  SiReact, SiNextdotjs, SiDjango, SiExpress, SiNodedotjs, SiBun, SiPostgresql, SiMongodb, SiRedis, SiReactquery, SiPostman, SiTailwindcss, SiShadcnui, SiFramer, SiGreensock, SiJavascript, SiTypescript, SiPython, SiCplusplus, SiSolidity, SiRust, SiGit, SiGithub, SiDocker, SiLinux, SiDrizzle, SiPrisma
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbMathFunction } from "react-icons/tb";
import { type IconType } from "react-icons";
import { FaAws, FaJava, FaFigma } from "react-icons/fa6";
const iconMap: Record<string, IconType> = {
  SiReact, SiNextdotjs, SiDjango, SiExpress, SiNodedotjs, SiBun,
  SiPostgresql, SiMongodb, SiDrizzle, SiRedis, SiPrisma, SiReactquery, SiPostman,
  SiTailwindcss, SiShadcnui, SiFramer, SiGreensock,
  SiJavascript, SiTypescript, SiPython, SiCplusplus, FaJava, SiSolidity, SiRust, TbMathFunction, GrMysql,
  SiGit, SiGithub, FaFigma, SiDocker, FaAws, SiLinux,
};

export default function Skills(){
    const handleSkillClick = (url: string) => {
      window.open(url, '_blank');
    };

    return(
      <div>
        <PanelHeader className="p-3 text-md md:text-lg font-bold">
          Skills & Technologies
        </PanelHeader>
        <div className="p-3 flex flex-wrap items-center justify-center gap-2">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <Button
                key={skill.name}
                variant="outline"
                size="sm"
                className="bg-background dark:bg-background hover:bg-muted hover:border-foreground flex-grow max-w-35 gap-2 cursor-pointer"
                onClick={() => handleSkillClick(skill.url)}
              >
                {Icon && <Icon />}
                {skill.name}
              </Button>
            );
          })}
        </div>
      </div>                
    )
}