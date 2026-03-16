"use client"

import { DividedPanel, PanelHeader } from "@/components/panel";
import { StatusSignal } from "@/components/status-signal";
import ProjectCard from "@/components/project-card";
import { FaArrowUp } from "react-icons/fa6";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { BackButton } from "@/components/back-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { user } from "@/data/user";


export function ProjectSection({ project }: { project: Project }) {
    return(
      <div className="p-4 group cursor-pointer">
        <ProjectCard
          title={project.cardTitle}
          projectImage={project.projectImage}
          backgroundImage={project.backgroundImage}
        />

        <div className="flex flex-col mt-3">
            <div className="flex items-center">
                <h1 className="text-foreground font-semibold">{project.title}</h1>
                <div className="ml-auto"><StatusSignal status={project.status} /></div>
            </div>
            <p className="text-muted-foreground text-sm">{project.description}</p>
        </div>

        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground group-hover:text-foreground">
            View Project <FaArrowUp className="rotate-45 group-hover:rotate-90 transition-transform" />
        </div>

      </div>
    )
}

export default function ProjectsPage() {
    return(
      <main>
        <PanelHeader className="flex items-center p-3 text-md md:text-lg font-bold gap-1">
          <BackButton />
          <div>Projects</div>
          <div className="absolute right-0 sm:p-2">
            <ThemeToggle />
          </div>
        </PanelHeader>

        <DividedPanel 
          left={<ProjectSection project={projects[0]} />}
          right={<ProjectSection project={projects[1]} />}
        />
        
        <DividedPanel 
          left={<ProjectSection project={projects[2]} />}
          right={<ProjectSection project={projects[3]} />}
        />

        <DividedPanel 
          left={<ProjectSection project={projects[4]} />}
          right={<ProjectSection project={projects[5]} />}
        />

        <div className="flex items-center justify-center p-3 gap-3">
            <div>
                For more cool projects, visit my
            </div>
            <div className="flex items-center gap-2 group">
              <Button 
                variant="link"
                size="icon-sm"
                onClick={() => window.open(`https://github.com/${user.github}`, '_blank')}
              >
                Github
              </Button>
              <FaArrowUp className="size-3 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
      </main>
    )
}