import { PanelHeader } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { skills } from "@/data/skills";
import {
  SiReact, SiNextdotjs, SiDjango, SiExpress, SiNodedotjs, SiBun,
  SiPostgresql, SiMongodb, SiRedis, SiReactquery, SiPostman,
  SiTailwindcss, SiShadcnui, SiFramer, SiGreensock,
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiSolidity, SiRust,
  SiGit, SiGithub, SiDocker, SiAmazonwebservices, SiLinux,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbMathFunction } from "react-icons/tb";
import { type IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  SiReact, SiNextdotjs, SiDjango, SiExpress, SiNodedotjs, SiBun,
  SiPostgresql, SiMongodb, SiRedis, SiReactquery, SiPostman,
  SiTailwindcss, SiShadcnui, SiFramer, SiGreensock,
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiSolidity, SiRust, TbMathFunction, GrMysql,
  SiGit, SiGithub, SiDocker, SiAmazonwebservices, SiLinux,
};

export default function Skills(){
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
                className="bg-background dark:bg-background hover:bg-muted hover:border-foreground flex-grow max-w-30"
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