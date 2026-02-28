"use client"

import { useState } from "react"
import { PanelHeader, SubPanel } from "../../components/panel"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { RiArrowDownSLine } from "react-icons/ri"
import { experiences, freelance, type Experience } from "@/data/experiences"
import AvatarComponent from "@/components/avatar"
import { Button } from "@/components/ui/button"

function ExperienceItem({ experience, defaultOpen = false }: { experience: Experience; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="p-1">
      <CollapsibleTrigger asChild>
        <button className="w-full cursor-pointer text-left px-3 group hover:bg-muted/50">
          <div className="flex items-center gap-3">
            <AvatarComponent
              src={experience.logo}
              alt={experience.subtitle}
              fallback={experience.subtitle.slice(0, 2)}
              size="size-10"
              outlineOffset = "outline-offset-3"
              className="my-0 bg-muted dark:bg-primary p-2"
            />

            <div className="flex flex-col min-w-0">
              <span className="font-semibold text-sm md:text-base text-foreground leading-tight">
                {experience.title}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground mt-0.5">
                {experience.subtitle}
              </span>
            </div>

            <div className="ml-auto flex items-center gap-2 shrink-0">
              <div className="flex flex-col items-end">
                <span className="text-xs md:text-sm text-foreground leading-tight">
                  {experience.timeline}
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">
                  {experience.location}
                </span>
              </div>

              <RiArrowDownSLine
                className="size-5 m-1 text-muted-foreground group-hover:text-foreground transition-transform duration-400 group-data-[state=open]:rotate-180"
              />
            </div>
          </div>
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
        <ul className="px-3 pb-3 pl-6 list-disc text-xs md:text-sm text-foreground leading-relaxed space-y-1 marker:text-foreground/40">
          {experience.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        {experience.techStack.length > 0 && (
            <div className="px-2 pb-2 flex flex-wrap gap-1.5">
            {experience.techStack.map((tech) => (
                <Button
                key={tech}
                variant="outline"
                size="sm"
                className="h-6 text-xs rounded-sm cursor-default pointer-events-none"
                >
                {tech}
                </Button>
            ))}
            </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default function Experiences() {
  return (
    <div>
      <PanelHeader className="p-3 text-md md:text-lg font-bold">
        Experiences
      </PanelHeader>

      <SubPanel>
        {experiences.map((exp, i) => (
          <ExperienceItem key={`exp-${i}`} experience={exp} defaultOpen={i === 0} />
        ))}
      </SubPanel>

      <SubPanel>
        {freelance.map((exp, i) => (
          <ExperienceItem key={`freelance-${i}`} experience={exp} />
        ))}
      </SubPanel>



    </div>
  )
}