import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 bg-background rounded-sm border border-border px-3 py-1 text-base ring-1 ring-border ring-offset-2 ring-offset-background file:inline-flex file:border-0 file:h-7 file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed focus:border-border focus:outline-none md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
