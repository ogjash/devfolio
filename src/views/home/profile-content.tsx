import Graph from "@/components/kibo-ui/contribution-graph/graph";
import { PanelContent, PanelHeader } from "@/components/panel";
import Socials from "@/components/socials";
import { Button } from "@/components/ui/button";
import { user } from "@/data/user";
import { HiMiniCalendarDays } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";


export function ProfileContent() {
    return(
        <PanelHeader className="relative flex flex-col tracking-tight">
            <PanelContent className="text-[0.9rem] p-3">
                {user.bio.map((paragraph, i) => (
                    <p key={i} className={i > 0 ? "mt-2" : ""}>{paragraph}</p>
                ))}
            </PanelContent>
            <PanelContent className="p-3 flex flex-row gap-2 text-[0.9rem]">
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

            <Graph username={user.github} />
            
        </PanelHeader>
    );
}