import type React from "react";

const STEP: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };

// Arrow / Home / End keyboard support for a WAI-ARIA tablist.
export function handleTabKeys(
  e: React.KeyboardEvent,
  count: number,
  current: number,
  select: (index: number) => void,
  idPrefix: string
) {
  let next: number | null = null;
  if (e.key in STEP) next = (current + STEP[e.key] + count) % count;
  else if (e.key === "Home") next = 0;
  else if (e.key === "End") next = count - 1;
  if (next === null) return;

  e.preventDefault();
  select(next);
  document.getElementById(`${idPrefix}-${next}`)?.focus();
}
