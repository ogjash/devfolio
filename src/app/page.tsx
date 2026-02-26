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
        <PanelHeader className="p-2 text-md md:text-lg font-bold">
          Experiences
        </PanelHeader>
      </Panel>
      
      <SubPanel>
        Happt
      </SubPanel>
    </main>
  );
}

