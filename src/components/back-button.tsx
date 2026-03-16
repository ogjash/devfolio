"use client"

import { useRouter } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa6";
import { Button } from "./ui/button";

export function BackButton() {
    const router = useRouter();

    return(
      <Button
        variant="ghost"
        className="transition-transform hover:border hover:border-border"
        size="icon-sm"
        onClick={() => router.back()}
        aria-label="Go back to previous page"
      >
        <FaAngleLeft className="size-4" />
      </Button>
    )
}