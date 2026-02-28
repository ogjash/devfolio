"use client"

import { DividedPanel, PanelHeader } from "@/components/panel";
import ProjectCard from "@/components/project-card";

export function ProjectSection() {
    return(
      <div className="p-4">
        <ProjectCard
          title="Project One"
          projectImage="/images/projects/coming-soon.png"
          backgroundImage="/images/pattern/bg1.jpg"
        />

        <div className="flex flex-col mt-3">
            <div>
                <h1 className="text-foreground font-semibold">Lorem</h1>
            </div>
            <p className="text-muted-foreground text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore praesentium architecto, saepe laboriosam consectetur aut!</p>
            
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
            left={<ProjectSection />}
            right={<ProjectSection />}
          />

          <DividedPanel 
            left={<ProjectSection />}
            right={<ProjectSection />}
          />
        </div>

    )
}