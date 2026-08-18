"use client";

import {
  aboutParagraphs,
  personalInfo,
} from "@/data/portfolio";
import { MapPin, Sparkles, Terminal, Mail, ArrowUpRight } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  KaggleIcon,
  LeetCodeIcon,
} from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <ScrollReveal direction="left">
          <div className="flex items-center gap-3 mb-12">
            <span className="section-number">01 //</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary tracking-tight">
              About <span className="text-green-glow">Me</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-green-primary/30 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Bio Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {aboutParagraphs.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <p className="text-text-muted text-base md:text-lg leading-relaxed">
                  {para}
                </p>
              </ScrollReveal>
            ))}

            {/* Social & CTA Buttons */}
            <ScrollReveal delay={0.3}>
              <div className="space-y-4 pt-4">
                {/* Social Profiles Row */}
                <div className="flex flex-wrap items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card hover:border-green-primary/40 text-text-primary font-mono text-xs transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-green-primary" />
                    GitHub Profile
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card hover:border-green-primary/40 text-text-primary font-mono text-xs transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-green-primary" />
                    LinkedIn Connect
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={personalInfo.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card hover:border-green-primary/40 text-text-primary font-mono text-xs transition-all"
                  >
                    <KaggleIcon className="w-4 h-4 text-green-primary" />
                    Kaggle
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card hover:border-green-primary/40 text-text-primary font-mono text-xs transition-all"
                  >
                    <LeetCodeIcon className="w-4 h-4 text-green-primary" />
                    LeetCode
                  </motion.a>
                </div>

                {/* Primary Get in Touch CTA on Next Line */}
                <div className="pt-1">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl font-mono text-sm font-bold text-bg-primary bg-green-primary hover:bg-green-glow shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] transition-all cursor-pointer"
                  >
                    <Mail className="w-4.5 h-4.5" />
                    Get in Touch
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Profile Image Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal delay={0.2} direction="right" className="w-full max-w-md">
              <TiltCard className="p-4 md:p-5 rounded-3xl glass-card border border-green-primary/30 hover:border-green-primary/60 transition-all duration-500 group relative shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]">
                {/* Background Ambient Glow */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-green-primary/30 to-emerald-500/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Tech HUD Corner Accents */}
                <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-green-glow/80 flex items-center gap-1.5 bg-bg-primary/30 backdrop-blur-xl px-2.5 py-1 rounded-md border border-green-primary/25">
                  <Terminal className="w-3 h-3 text-green-primary" />
                  <span>[PROFILE_SNAPSHOT]</span>
                </div>

                {/* Image Container with Framing & Glow */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-green-primary/20 bg-bg-card/80">
                  <img
                    src="/profile.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 via-transparent to-transparent opacity-40 pointer-events-none" />

                  {/* Status Overlay Pill */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-xl bg-bg-primary/30 backdrop-blur-xl border border-green-primary/25 shadow-lg">
                    <div>
                      <div className="font-display font-bold text-sm text-text-primary group-hover:text-green-glow transition-colors">
                        {personalInfo.name}
                      </div>
                      <div className="font-mono text-xs text-text-muted flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-green-primary" />
                        {personalInfo.location}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-primary/10 border border-green-primary/25 text-green-glow font-mono text-[10px]">
                      <span className="w-2 h-2 rounded-full bg-green-glow animate-ping" />
                      Available
                    </div>
                  </div>
                </div>

                {/* Caption Footer */}
                <div className="pt-4 px-1 flex items-center justify-between text-xs font-mono text-text-muted">
                  <span className="text-text-secondary">{personalInfo.title}</span>
                  <span className="text-green-primary/80 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    AI & ML Specialist
                  </span>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
