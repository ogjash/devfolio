import Experiences from "@/views/home/experiences";
import { DotGridPanel, Panel, PanelHeader, SlantedLinesPanel, SubPanel } from "@/components/panel";
import { ProfileContent } from "@/views/home/profile-content";
import { ProfileHeader } from "@/views/home/profile-header";
import Projects from "@/views/home/projects";

export default function Home() {
  return (
    <main className="max-w-180 mx-auto px-3">
      <DotGridPanel/>
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
      

    </main>
  );
}

