"use client"

import { FaQuoteLeft } from "react-icons/fa"


export default function Quote(){
  return(
    <div className="flex flex-col gap-5 items-center p-10">
      <FaQuoteLeft className="size-10 text-border"/>
      <div className="text-center text-2xl font-bold italic">
        "Do so much work that it would be unreasonable for you to not be successful."
      </div>
      <div className="flex items-center gap-4 text-sm text-muted-foreground font-semibold tracking-widest">
        <div className="h-px w-8 bg-border"></div>
          ALEX HORMOZI
        <div className="h-px w-8 bg-border"></div>
      </div>
    </div>
  )
}