import { DotGridPanel, Panel, PanelHeader, SlantedLinesPanel, SubPanel } from "@/components/panel";

import ProjectsPage from "@/views/projects/projects";

export default function Projects() {
    return(
      <div className="max-w-180 mx-auto px-3">
        <DotGridPanel className="screen-line-after"/>

        <Panel>
          <ProjectsPage />
        </Panel>

        <DotGridPanel/>
      </div>
    )
}