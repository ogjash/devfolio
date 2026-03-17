"use client";

import { ToggleTheme } from "./lightswind/toggle-theme";

export function ThemeToggle() {
  return (
    <ToggleTheme
      animationType="swipe-down"
      duration={600}
      aria-label="Toggle theme"
    />
  );
}
