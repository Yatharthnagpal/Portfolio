"use client";

import { personalInfo } from "@/data/portfolio";
import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  KaggleIcon,
  LeetCodeIcon,
} from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-green-primary/10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-display font-bold text-sm text-text-primary">
            {personalInfo.name}
          </div>
          <div className="font-mono text-xs text-text-muted">
            © 2026 Yatharth Nagpal. Built with Next.js & Three.js.
          </div>
        </div>

        {/* Center Tagline */}
        <div className="font-mono text-xs text-green-glow/80 text-center">
          Designed & engineered by Yatharth.
        </div>

        {/* Right Social Icons */}
        <div className="flex items-center gap-2.5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass-card hover:border-green-primary/40 text-text-muted hover:text-green-glow transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass-card hover:border-green-primary/40 text-text-muted hover:text-green-glow transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass-card hover:border-green-primary/40 text-text-muted hover:text-green-glow transition-all"
            aria-label="Kaggle"
          >
            <KaggleIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass-card hover:border-green-primary/40 text-text-muted hover:text-green-glow transition-all"
            aria-label="LeetCode"
          >
            <LeetCodeIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg glass-card hover:border-green-primary/40 text-text-muted hover:text-green-glow transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
