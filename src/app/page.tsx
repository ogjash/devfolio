import { DotGridPanel, Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";

export default function Home() {
  return (
    <main className="max-w-180 mx-auto px-3">
      <DotGridPanel/>
      <Panel>
        <PanelHeader>
          <PanelTitle>About Me</PanelTitle>
        </PanelHeader>
        <PanelContent>
          <p className="text-sm">
            Hi, I&apos;m Jashan — a developer building cool things on the web.
          </p>
        </PanelContent>
      </Panel>

      <Panel>
        <PanelHeader>
          <PanelTitle>Projects</PanelTitle>
        </PanelHeader>
        <PanelContent>
          <p className="text-sm">
            A collection of my work, side projects, and experiments.
          </p>
        </PanelContent>
      </Panel>
      
    </main>
  );
}

