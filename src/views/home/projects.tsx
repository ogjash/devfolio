"use client"

import { DividedPanel, PanelHeader } from "@/components/panel";
import ProjectCard from "@/components/project-card";
import { FaArrowUp } from "react-icons/fa6";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

function StatusSignal({ status }: { status: "live" | "building" }) {
  const isLive = status === "live"
  return (
    <span className={`inline-flex items-center gap-2 px-1.5 py-0.5 rounded-full text-sm font-semibold text-muted-foreground`}>
      <span className="relative flex h-1.5 w-1.5">
        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${isLive ? "bg-success" : "bg-destructive"}`} />
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${isLive ? "bg-success" : "bg-destructive"}`} />
      </span>
      {isLive ? "Live" : "Building"}
    </span>
  )
}

export function ProjectSection({ project }: { project: Project }) {
    return(
      <div className="p-4 group">
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

export default function Projects() {
    return(
        <div>
          <PanelHeader className="p-3 text-md md:text-lg font-bold">
            Projects
          </PanelHeader>

          <DividedPanel 
            left={<ProjectSection project={projects[0]} />}
            right={<ProjectSection project={projects[1]} />}
          />

          <DividedPanel 
            left={<ProjectSection project={projects[2]} />}
            right={<ProjectSection project={projects[3]} />}
          />
        </div>

    )
}