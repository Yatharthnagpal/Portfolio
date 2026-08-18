"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { personalInfo, heroStats, typingRoles } from "@/data/portfolio";
import TypeWriter from "./TypeWriter";
import OrbitalTechIcons from "./OrbitalTechIcons";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const NeuralCore = dynamic(() => import("../3d/NeuralCore"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[350px] md:h-[500px] flex items-center justify-center">
      <div className="w-24 h-24 rounded-full border-2 border-green-primary/30 border-t-green-primary animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Pitch (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-green-deep/20 border border-green-primary/30 text-green-glow font-mono text-xs shadow-[0_0_15px_rgba(34,197,94,0.1)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-primary" />
              </span>
              <span>{personalInfo.availabilityBadge}</span>
              <span className="text-text-muted">·</span>
              <span className="text-text-muted">{personalInfo.location}</span>
            </motion.div>

            {/* Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary">
                {personalInfo.name}
              </h1>
              <div className="font-mono text-lg sm:text-2xl text-text-secondary flex items-center gap-2 flex-wrap">
                <span className="text-text-muted">I build</span>
                <TypeWriter phrases={typingRoles} />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-muted text-sm sm:text-base max-w-xl leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-primary hover:bg-green-glow text-bg-primary font-mono text-sm font-semibold shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:shadow-[0_0_35px_rgba(74,222,128,0.5)] transition-all duration-300"
              >
                View My Work
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card hover:border-green-primary/50 text-text-primary font-mono text-sm font-medium transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Core Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-green-primary/10"
            >
              {heroStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                  className="space-y-1"
                >
                  <div className="font-display font-bold text-2xl sm:text-3xl text-green-glow">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right 3D Visual Column: Moving Globe BEHIND, Icons ON TOP OVER THE GLOBE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[450px]"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-green-primary/10 blur-[100px] rounded-full pointer-events-none" />

            {/* 1. Moving 3D Wireframe Globe (Layer 1 - Rendered BEHIND) */}
            <div className="relative z-10 w-full h-full pointer-events-none">
              <NeuralCore />
            </div>

            {/* 2. Dev Tool App Icons (Layer 2 - Rendered ON TOP OVER THE GLOBE) */}
            <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
              <OrbitalTechIcons />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 font-mono text-xs text-text-muted hover:text-green-glow transition-colors"
          >
            <span>scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-green-primary" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
