"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import { Cpu, Sparkles, ArrowUpRight, Filter } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import { getTechIcon } from "@/components/ui/BrandIcons";
import { motion } from "framer-motion";

const DOMAIN_TABS = [
  { id: "all", label: "All Work" },
  { id: "healthcare", label: "Healthcare AI" },
  { id: "nlp-legal", label: "NLP & Legal AI" },
  { id: "gnn-risk", label: "GNN & Risk Engine" },
  { id: "data-scraping", label: "Data Engineering & Scraping" },
] as const;

export default function ProjectsSection() {
  const [selectedDomain, setSelectedDomain] = useState<string>("all");

  const filteredProjects =
    selectedDomain === "all"
      ? projects
      : projects.filter((p) => p.domain === selectedDomain);
  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <ScrollReveal direction="left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="section-number">04 //</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary tracking-tight">
                Selected <span className="text-green-glow">Work</span>
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-green-primary/30 to-transparent" />
            </div>
          </div>
          <p className="text-text-muted font-mono text-xs md:text-sm max-w-2xl mb-8">
            End-to-end AI systems spanning healthcare diagnostics and legal intelligence — built from data pipeline to deployed inference.
          </p>

          {/* Domain Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <div className="flex items-center gap-1.5 font-mono text-xs text-text-muted pr-2">
              <Filter className="w-3.5 h-3.5 text-green-primary" />
              <span>Domain:</span>
            </div>
            {DOMAIN_TABS.map((tab) => {
              const isActive = selectedDomain === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedDomain(tab.id)}
                  className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-green-primary text-bg-primary font-bold shadow-[0_0_15px_rgba(34,197,94,0.35)]"
                      : "glass-card text-text-muted hover:text-text-primary hover:border-green-primary/30"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects Showcase Cards */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <TiltCard className="group rounded-3xl glass-card border border-green-primary/20 hover:border-green-primary/50 transition-colors duration-500 p-6 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                {/* Background Ambient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                  {/* Left Metadata (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-3 font-mono text-xs text-green-glow">
                        <span className="font-bold text-base text-text-muted">
                          [{project.number}]
                        </span>
                        <span className="px-3 py-1 rounded-full bg-green-primary/10 border border-green-primary/30">
                          {project.category}
                        </span>
                        <span className="text-text-muted">{project.period}</span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary group-hover:text-green-glow transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <div className="font-mono text-xs text-green-glow/80 mt-1">
                        {project.subtitle}
                      </div>
                      <p className="text-text-muted text-sm md:text-base leading-relaxed mt-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2.5">
                      <div className="font-mono text-xs text-text-primary font-semibold flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-green-primary" />
                        Key Engineering Highlights:
                      </div>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-text-muted text-xs md:text-sm flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="text-green-primary font-mono text-xs mt-0.5">
                              ›
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-bg-primary/80 border border-green-primary/20 text-text-secondary font-mono text-xs hover:border-green-primary/50 transition-colors"
                        >
                          <span className="text-green-primary">
                            {getTechIcon(tech, "w-3.5 h-3.5")}
                          </span>
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Right Visual Representation Card (5 cols - Balanced Length) */}
                  <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-bg-primary/80 border border-green-primary/30 space-y-4 shadow-2xl">
                    {/* HUD Header */}
                    <div className="flex items-center justify-between border-b border-green-primary/15 pb-3">
                      <div className="flex items-center gap-2 font-mono text-xs text-green-glow font-semibold">
                        <Cpu className="w-4 h-4 text-green-primary" />
                        Architecture Chart
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-green-glow/80 bg-green-primary/10 px-2.5 py-1 rounded-full border border-green-primary/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-glow animate-pulse" />
                        LIVE FLOW
                      </div>
                    </div>

                    {/* Metrics Badge Row if present */}
                    {project.pipelineMetrics && project.pipelineMetrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
                        {project.pipelineMetrics.map((m, idx) => (
                          <div key={idx} className="p-2 rounded-xl bg-green-primary/10 border border-green-primary/20 flex items-center justify-between">
                            <span className="text-text-muted">{m.label}</span>
                            <span className="text-green-glow font-bold">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 1. Node Flowchart Diagram */}
                    {project.architectureChart?.nodes && (
                      <div className="space-y-2.5 py-1">
                        <div className="text-[11px] font-mono text-text-muted uppercase tracking-wider font-semibold">
                          System Flow Diagram
                        </div>
                        <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
                          {project.architectureChart.nodes.map((node, nIdx) => (
                            <motion.div
                              key={node.id}
                              whileHover={{ scale: 1.03 }}
                              className={`p-3 rounded-xl border flex flex-col justify-between transition-all ${
                                node.type === "output"
                                  ? "bg-green-primary/15 border-green-primary/60 text-green-glow"
                                  : node.type === "input"
                                  ? "bg-teal-500/15 border-teal-500/40 text-teal-300"
                                  : "bg-bg-card/90 border-green-primary/25 text-text-primary"
                              }`}
                            >
                              <div className="flex items-start justify-between gap-1 mb-1">
                                <span className="font-bold text-[12px] leading-tight">{node.label}</span>
                                <span className="text-[9.5px] text-green-primary font-mono font-semibold bg-green-primary/10 px-1 rounded">#{nIdx + 1}</span>
                              </div>
                              <span className="text-[10px] text-text-muted leading-tight mt-1">{node.sub}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 2. Pipeline Latency / Compute Distribution Bar Chart */}
                    {project.architectureChart?.bars && (
                      <div className="space-y-2 font-mono text-[10px]">
                        <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider flex items-center justify-between">
                          <span>Latency & Compute Distribution</span>
                          <span className="text-[9px] text-green-primary">100% Pipeline</span>
                        </div>
                        <div className="space-y-1.5">
                          {project.architectureChart.bars.map((bar, bIdx) => (
                            <div key={bIdx} className="space-y-0.5">
                              <div className="flex items-center justify-between text-[9.5px]">
                                <span className="text-text-muted truncate">{bar.label}</span>
                                <span className="text-green-glow font-semibold ml-2">{bar.value}</span>
                              </div>
                              <div className="w-full h-1.5 rounded-full bg-green-primary/10 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${bar.percentage}%` }}
                                  transition={{ duration: 0.8, delay: bIdx * 0.1 }}
                                  className="h-full bg-gradient-to-r from-green-primary to-green-glow rounded-full"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* GitHub Repo Button */}
                    {project.links && project.links.length > 0 && (
                      <div className="pt-1">
                        {project.links.map((link) => (
                          <motion.a
                            key={link.url}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-green-primary/15 border border-green-primary/40 hover:bg-green-primary/25 hover:border-green-primary/70 text-green-glow font-mono text-xs font-semibold shadow-md transition-all"
                          >
                            <GithubIcon className="w-4 h-4 text-green-primary" />
                            {link.label}
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </motion.a>
                        ))}
                      </div>
                    )}

                    <div className="font-mono text-[10px] text-text-muted text-center border-t border-green-primary/10 pt-2.5 flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-glow" />
                      <span>Status: Open Source & Verified</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
