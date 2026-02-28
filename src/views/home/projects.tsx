"use client"

import { DividedPanel, PanelHeader } from "@/components/panel";

export default function Projects() {
    return(
        <div>
          <PanelHeader className="p-3 text-md md:text-lg font-bold">
            Projects
          </PanelHeader>

          <DividedPanel 
            left={
                <div className="h-20">kamkw</div>
            }
            right={
                <div>
                    jndan
                </div>
            }
          />
        </div>

    )
}