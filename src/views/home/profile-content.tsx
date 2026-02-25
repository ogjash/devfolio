import { PanelContent, PanelHeader } from "@/components/panel";
import Socials from "@/components/socials";
import { Button } from "@/components/ui/button";
import { HiMiniCalendarDays } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";


export function ProfileContent() {
    return(
        <PanelHeader className="relative flex flex-col tracking-tight">
            <PanelContent className="text-[0.9rem] px-3">
                <p>Hey, I'm Jashan, a full stack developer who loves building clean, modern websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.</p>
                <p className="mt-2">Tech stack isn't my concern, I'm flexible with whatever the project needs, though I prefer modern frameworks and tools. I'm always open for new opportunities to learn and grow.</p>
            </PanelContent>
            <PanelContent className="px-3 flex flex-row gap-2 text-[0.9rem]">
                <Button
                    variant="default"
                    className="h-9 group"
                >
                    <HiMiniCalendarDays className="size-5 transition-transform duration-300 linear group-hover:-translate-y-0.5 group-hover:scale-110"/>
                    Book an intro call
                </Button>

                <Button
                    variant="outline"
                >
                    <MdEmail className="size-5"/>
                    Send an email
                </Button>

            </PanelContent>

            <Socials />
            
        </PanelHeader>
    );
}