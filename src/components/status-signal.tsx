"use client"

export function StatusSignal({ status }: { status: "live" | "building" }) {
  const isLive = status === "live"
  return (
    <span className={`inline-flex items-center gap-2 px-1.5 py-0.5 rounded-full text-sm font-semibold text-muted-foreground`}>
      <span className="relative flex h-1.5 w-1.5">
        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${isLive ? "bg-success" : "bg-destructive"}`} />
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${isLive ? "bg-success" : "bg-destructive"}`} />
      </span>
      {isLive ? "Live" : "Building"}
    </span>
  )
}
