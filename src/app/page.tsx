import { DotGridPanel, Panel, PanelHeader, SlantedLinesPanel, SubPanel } from "@/components/panel";

import { ProfileHeader } from "@/views/home/profile-header";
import { ProfileContent } from "@/views/home/profile-content";
import Experiences from "@/views/home/experiences";
import Projects from "@/views/home/projects";
import Blogs from "@/views/home/blogs";
import Skills from "@/views/home/skills";
import Newsletter from "@/views/home/newsletter";

export default function Home() {
  return (
    <main className="max-w-180 mx-auto px-3">
      <DotGridPanel className="screen-line-after"/>

      <Panel>
        <ProfileHeader />
      </Panel>

      <Panel>
        <ProfileContent />
      </Panel>

      <SlantedLinesPanel className="p-5">
      </SlantedLinesPanel>

      <Panel>
        <Experiences />
      </Panel>

      <SlantedLinesPanel className="p-5">
      </SlantedLinesPanel>

      <Panel>
        <Projects />
      </Panel>

      <SlantedLinesPanel className="p-5">
      </SlantedLinesPanel>
      
      <Panel>
        <Blogs />
      </Panel>

      <SlantedLinesPanel className="p-5">
      </SlantedLinesPanel>

      <Panel>
        <Skills />
      </Panel>

      <SlantedLinesPanel className="p-5">
      </SlantedLinesPanel>

      <Panel>
        <Newsletter />
      </Panel>

      <DotGridPanel/>

      <Panel>
        <Quote />
      </Panel>

    </main>
  );
}

