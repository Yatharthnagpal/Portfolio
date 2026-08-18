"use client";

import dynamic from "next/dynamic";
import InteractiveBackground from "@/components/background/InteractiveBackground";
import CursorGlow from "@/components/background/CursorGlow";
import { ArrowLeft, Terminal, AlertTriangle } from "lucide-react";
import Link from "next/link";

const Background3D = dynamic(() => import("@/components/3d/Background3D"), {
  ssr: false,
});

export default function NotFound() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6 bg-bg-primary text-text-primary overflow-hidden">
      <InteractiveBackground />
      <Background3D />
      <CursorGlow />

      <div className="relative z-10 max-w-lg w-full text-center space-y-6">
        {/* Terminal Header Icon */}
        <div className="mx-auto w-16 h-16 rounded-2xl glass-card border border-green-primary/40 flex items-center justify-center text-green-glow shadow-[0_0_30px_rgba(34,197,94,0.2)]">
          <Terminal className="w-8 h-8" />
        </div>

        {/* 404 Big Glitch Text */}
        <div className="space-y-2">
          <div className="font-display font-bold text-7xl md:text-9xl text-green-glow tracking-tighter shadow-green-glow">
            404
          </div>
          <div className="font-mono text-sm text-green-primary uppercase tracking-widest flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4 text-green-primary" />
            System Exception: Route Not Found
          </div>
        </div>

        {/* Message */}
        <p className="text-text-muted text-sm md:text-base leading-relaxed">
          The vector space location you requested does not exist or has been shifted during inference.
        </p>

        {/* Action Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-green-primary hover:bg-green-glow text-bg-primary font-mono text-sm font-semibold shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
