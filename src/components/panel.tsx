import React from "react";

// ─── Panel ────────────────────────────────────────────────────────────────────

type PanelProps = React.HTMLAttributes<HTMLDivElement>;

export function Panel({ className = "", children, ...props }: PanelProps) {
  return (
    <div className={`screen-line-after dashed-border-x ${className}`} {...props}>
      {children}
    </div>
  );
}

// ─── DotGridPanel ─────────────────────────────────────────────────────────────

export function DotGridPanel({ className = "", children, ...props }: PanelProps) {
  return (
    <div className={`screen-line-after dashed-border-x relative min-h-30 md:min-h-58 ${className}`} {...props}>
      <div
        className="absolute inset-3 -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-edge) 1px, transparent 1px)",
          backgroundSize: "7px 7px",
        }}
      />
      {children}
    </div>
  );
}

// ─── PanelHeader ──────────────────────────────────────────────────────────────

type PanelHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export function PanelHeader({
  className = "",
  children,
  ...props
}: PanelHeaderProps) {
  return (
    <div
      className={`screen-line-after ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// ─── PanelTitle ───────────────────────────────────────────────────────────────

type PanelTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export function PanelTitle({
  className = "",
  children,
  ...props
}: PanelTitleProps) {
  return (
    <h2
      className={`text-3xl font-semibold tracking-tight py-1 ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

// ─── PanelContent ─────────────────────────────────────────────────────────────

type PanelContentProps = React.HTMLAttributes<HTMLDivElement>;

export function PanelContent({
  className = "",
  children,
  ...props
}: PanelContentProps) {
  return (
    <div className={`p-2 ${className}`} {...props}>
      {children}
    </div>
  );
}
