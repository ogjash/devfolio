"use client"

import { useRouter } from "next/navigation";
import { DividedPanel, PanelContent, PanelHeader, SubPanel } from "@/components/panel";
import ProjectCard from "@/components/project-card";
import { StatusSignal } from "@/components/status-signal";
import { FaArrowUp } from "react-icons/fa6";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";

export function ProjectSection({ project }: { project: Project }) {
    return(
      <div 
        className="p-4 group cursor-pointer"
        onClick={() => {
          if (project.link) {
            window.open(project.link, "_blank", "noopener,noreferrer");
          }
        }}
      >
        <ProjectCard
          title={project.cardTitle}
          projectImage={project.projectImage}
          backgroundImage={project.backgroundImage}
        />

        <div className="flex flex-col mt-3">
          <div className="flex items-center">
            <h1 className="text-foreground font-semibold">      
              {project.title}
            </h1>
            <div className="ml-auto">
              <StatusSignal status={project.status} />
            </div>
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
    const router = useRouter();

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

          <PanelContent className="flex justify-center p-3">
            <div className="relative rounded-md outline outline-border outline-offset-4 bg-muted">
              <Button 
                variant="default" 
                className="group" 
                onClick={() => router.push('/projects')}>
                  View All <FaArrowUp className="rotate-45 group-hover:scale-120 transition-transform" />
              </Button>
            </div>
          </PanelContent>
        </div>

    )
}