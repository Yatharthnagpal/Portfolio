"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1200; // 1.2s total

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setIsFadingOut(true);
        setTimeout(() => {
          setIsDone(true);
          onComplete?.();
        }, 300);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-primary transition-opacity duration-300 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Monogram emblem */}
        <div className="relative mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-bg-card border border-green-primary/30 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
          <span className="font-display font-bold text-3xl text-green-glow tracking-tighter">
            YN
          </span>
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-green-primary to-green-glow opacity-20 blur-sm animate-pulse" />
        </div>

        {/* Status text */}
        <div className="font-mono text-xs text-text-secondary tracking-widest uppercase mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-primary animate-ping" />
          Initializing System Core
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-bg-elevated rounded-full overflow-hidden border border-green-primary/20">
          <div
            className="h-full bg-gradient-to-r from-green-deep via-green-primary to-green-glow transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="font-mono text-[10px] text-text-muted mt-2">
          {progress}%
        </div>
      </div>
    </div>
  );
}
