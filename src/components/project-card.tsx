"use client"

import Image from "next/image"

type ProjectCardProps = {
  title: string
  projectImage: string
  backgroundImage: string
}

export default function ProjectCard({ title, projectImage, backgroundImage }: ProjectCardProps) {
  return (
    <div className="group relative h-50 w-auto rounded-md outline outline-border outline-offset-4 overflow-hidden shrink-0 cursor-pointer bg-muted">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 pt-2 px-3">
        <span className="block text-xs font-semibold text-foreground group-hover:text-primary-foreground drop-shadow-sm transition-all duration-400 left-0 group-hover:left-1/2 group-hover:-translate-x-1/2 relative w-fit">
          {title}
        </span>
      </div>

      <div className="relative bottom-[-10%] left-1/2 -translate-x-1/2 w-[85%] z-10 transition-all duration-400 group-hover:bottom-[-18%]">
        <Image
          src={projectImage}
          alt={title}
          width={100}
          height={100}
          className="rounded-t-md border w-full h-auto"
        />
        
        
      </div>
    </div>
  )
}