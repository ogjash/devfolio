"use client"

import { PanelHeader, SubPanel } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { blogs, Blog } from "@/data/blogs";
import Link from "next/link";

export function BlogContent({ blog }: { blog: Blog }) {
    return (
      <div className="p-1">
        <Link href={blog.link} target="_blank" className="block w-full cursor-pointer text-left px-2 group hover:bg-muted/50">
            <div className="flex items-center gap-3">
                <div className="p-3">
                <h1 className="text-lg text-foreground font-semibold">{blog.title}</h1>
                <span className="flex flex-row items-center gap-1 text-sm text-muted-foreground">
                    <MdOutlineDateRange />
                    <span>
                    {blog.date}
                    </span>
                </span>
                
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {blog.topics.map((topic) => (
                        <Button
                            key={topic}
                            variant="outline"
                            size="xs"
                            className="h-6 text-xs rounded-sm cursor-default pointer-events-none"
                            >
                            {topic}
                        </Button>
                    ))}
                </div>

                </div>

                <div className="hidden sm:block ml-auto mr-2 items-center gap-2 shrink-0">
                    <FaArrowUp className="text-muted-foreground size-5 group-hover:text-foreground rotate-45 group-hover:rotate-90 transition-transform duration-200"/>
                </div>

            </div>
        </Link>
      </div>
    )
}

export default function Blogs() {
    return(
      <div>
        <PanelHeader className="p-3 text-md md:text-lg font-bold">
          Blogs
        </PanelHeader>

        {blogs.map((blog, index) => (
          <SubPanel key={index}>
            <BlogContent blog={blog} />
          </SubPanel>
        ))}
      </div>
    )
}