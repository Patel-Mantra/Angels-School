import { useEffect, useState } from "react";
import { Contrast } from "lucide-react";

export function AccessibilityControls() {
  const [highContrast, setHighContrast] = useState(false);
  const [textScale, setTextScale] = useState(1);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--text-scale", String(textScale));
  }, [textScale]);

  useEffect(() => {
    document.body.classList.toggle("hc", highContrast);
  }, [highContrast]);

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-40 hidden gap-2 md:flex">
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border bg-background/80 px-3 py-2 shadow backdrop-blur">
        <button
          onClick={() => setHighContrast((v) => !v)}
          aria-pressed={highContrast}
          aria-label="Toggle high contrast"
          className="inline-flex items-center gap-2 rounded-md border px-2 py-1 text-xs hover:bg-accent"
        >
          <Contrast className="h-4 w-4" aria-hidden /> Contrast
        </button>
        <div className="h-4 w-px bg-border" aria-hidden />
        <button onClick={() => setTextScale((v) => Math.max(0.8, +(v - 0.1).toFixed(1)))} aria-label="Decrease text size" className="rounded-md border px-2 py-1 text-xs hover:bg-accent">A-</button>
        <button onClick={() => setTextScale(1)} aria-label="Reset text size" className="rounded-md border px-2 py-1 text-xs hover:bg-accent">A</button>
        <button onClick={() => setTextScale((v) => Math.min(1.6, +(v + 0.1).toFixed(1)))} aria-label="Increase text size" className="rounded-md border px-2 py-1 text-xs hover:bg-accent">A+</button>
      </div>
    </div>
  );
}
