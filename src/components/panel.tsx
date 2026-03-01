import React from "react";

// ─── Panel ────────────────────────────────────────────────────────────────────

type PanelProps = React.HTMLAttributes<HTMLDivElement>;

export function Panel({ 
  className = "", 
  children, 
  ...props 
}: PanelProps) {
  return (
    <div className={`screen-line-after dashed-border-x ${className}`} {...props}>
      {children}
    </div>
  );
}

// ─── SubPanel ─────────────────────────────────────────────────────────────────

type SubPanelProps = React.HTMLAttributes<HTMLDivElement>;

export function SubPanel({ 
  className = "", 
  children, 
  ...props 
}: SubPanelProps) {
  return (
    <div className={`dashed-line-after  ${className}`} {...props}>
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
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
}

// ─── DividedPanel ─────────────────────────────────────────────────────────────

type DividedPanelProps = PanelProps & {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export function DividedPanel({ 
  className = "", 
  left, 
  right, 
  ...props 
}: DividedPanelProps) {
  return (
    <div className={`dashed-line-after grid grid-cols-1 sm:grid-cols-2 ${className}`} {...props}>
      <div className="dashed-line-after sm:dashed-line-after-none sm:dashed-border-r">
        {left}
      </div>
      <div>
        {right}
      </div>
    </div>
  );
}

// ─── DotGridPanel ─────────────────────────────────────────────────────────────

export function DotGridPanel({ 
  className = "", 
  children, 
  ...props 
}: PanelProps) {
  return (
    <div className={`dashed-border-x relative min-h-30 md:min-h-58 ${className}`} {...props}>
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

// ─── SlantedLinesPanel ────────────────────────────────────────────────────────

export function SlantedLinesPanel({ 
  className = "", 
  children, 
  ...props 
}: PanelProps) {
  return (
    <div className={`screen-line-after dashed-border-x relative ${className}`} {...props}>
      <div
        className="absolute inset-y-0 -z-10 left-1/2 -translate-x-1/2 w-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, color-mix(in srgb, var(--color-edge) 40%, transparent) 0, color-mix(in srgb, var(--color-edge) 40%, transparent) 1px, transparent 0, transparent 50%)",
          backgroundSize: "8px 8px",
        }}
      />
      {children}
    </div>
  );
}

