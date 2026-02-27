import Experiences from "@/components/experiences";
import { DotGridPanel, Panel, PanelHeader, SubPanel } from "@/components/panel";
import { ProfileContent } from "@/views/home/profile-content";
import { ProfileHeader } from "@/views/home/profile-header";

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

      <Panel>
        <Experiences />
      </Panel>
      

    </main>
  );
}

