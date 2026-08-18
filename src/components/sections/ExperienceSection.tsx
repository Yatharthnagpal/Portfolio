"use client";

import { useState } from "react";
import { experiences, certifications, achievements } from "@/data/portfolio";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const [filter, setFilter] = useState<"all" | "work" | "education">("all");

  const workItems = experiences.filter((e) => e.type === "work");
  const educationItems = experiences.filter((e) => e.type === "education");

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <ScrollReveal direction="left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-3">
              <span className="section-number">03 //</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary tracking-tight">
                Experience & <span className="text-green-glow">Credentials</span>
              </h2>
              <div className="hidden sm:block h-px w-24 bg-gradient-to-r from-green-primary/30 to-transparent" />
            </div>

            {/* Filter Toggle Pills */}
            <div className="flex items-center gap-1.5 glass-card p-1 rounded-full border border-green-primary/20 w-fit">
              {(["all", "work", "education"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs capitalize transition-all duration-200 cursor-pointer ${
                    filter === tab
                      ? "bg-green-primary text-bg-primary font-bold shadow-[0_0_12px_rgba(34,197,94,0.35)]"
                      : "text-text-muted hover:text-text-primary hover:bg-white/5"
                  }`}
                >
                  {tab === "all" ? "All History" : tab === "work" ? "Work Experience" : "Education"}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline Container (Work Experience & Education) */}
        <div className="space-y-10 mb-16">
          {/* Work Experience Group */}
          {(filter === "all" || filter === "work") && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-green-glow font-semibold tracking-wider uppercase bg-green-primary/10 border border-green-primary/20 px-3.5 py-1.5 rounded-lg w-fit shadow-[0_0_10px_rgba(34,197,94,0.15)]">
                <Briefcase className="w-4 h-4 text-green-primary" />
                Work Experience
              </div>

              <div className="relative border-l border-green-primary/30 ml-3 md:ml-6 pl-5 md:pl-8 space-y-8">
                {workItems.map((exp, index) => (
                  <ScrollReveal key={exp.id} delay={index * 0.15}>
                    <div className="relative group">
                      {/* Timeline Node */}
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="absolute -left-[27px] md:-left-[39px] top-1.5 w-8 h-8 rounded-full bg-bg-card border border-green-primary/50 flex items-center justify-center text-green-primary shadow-[0_0_10px_rgba(34,197,94,0.2)] group-hover:border-green-glow group-hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all"
                      >
                        <Briefcase className="w-3.5 h-3.5" />
                      </motion.div>

                      {/* Entry Card */}
                      <TiltCard className="p-6 md:p-7 rounded-2xl glass-card border border-green-primary/20 group-hover:border-green-primary/40 transition-colors duration-300 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-green-primary/10 pb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="px-2.5 py-0.5 rounded-md bg-green-primary/15 border border-green-primary/30 font-mono text-[10px] text-green-glow font-semibold uppercase tracking-wider">
                                Work Experience
                              </span>
                            </div>
                            <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary group-hover:text-green-glow transition-colors">
                              {exp.role}
                            </h3>
                            <div className="font-mono text-sm text-green-primary/90 font-medium mt-0.5">
                              {exp.organization}
                            </div>
                          </div>

                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-primary/10 border border-green-primary/20 text-green-glow font-mono text-xs w-fit">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </div>
                        </div>

                        <ul className="space-y-2.5 pt-1">
                          {exp.highlights.map((point, idx) => (
                            <motion.li
                              key={idx}
                              whileHover={{ x: 4 }}
                              className="flex items-start gap-2.5 text-xs md:text-sm text-text-muted leading-relaxed transition-transform"
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-primary shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {exp.technologies && (
                          <div className="flex flex-wrap gap-2 pt-3 border-t border-green-primary/10">
                            {exp.technologies.map((t) => (
                              <motion.span
                                key={t}
                                whileHover={{ scale: 1.05 }}
                                className="px-2.5 py-0.5 rounded-md bg-bg-primary/80 border border-green-primary/20 font-mono text-[11px] text-text-secondary hover:border-green-primary/40 transition-colors"
                              >
                                {t}
                              </motion.span>
                            ))}
                          </div>
                        )}
                      </TiltCard>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {/* Education Group */}
          {(filter === "all" || filter === "education") && (
            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-lg w-fit shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                Education & Academia
              </div>

              <div className="relative border-l border-emerald-500/30 ml-3 md:ml-6 pl-5 md:pl-8 space-y-8">
                {educationItems.map((exp, index) => (
                  <ScrollReveal key={exp.id} delay={index * 0.15}>
                    <div className="relative group">
                      {/* Timeline Node */}
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="absolute -left-[27px] md:-left-[39px] top-1.5 w-8 h-8 rounded-full bg-bg-card border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)] group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all"
                      >
                        <GraduationCap className="w-3.5 h-3.5" />
                      </motion.div>

                      {/* Entry Card */}
                      <TiltCard className="p-6 md:p-7 rounded-2xl glass-card border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors duration-300 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-500/10 pb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 font-mono text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                                Education
                              </span>
                            </div>
                            <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary group-hover:text-emerald-400 transition-colors">
                              {exp.role}
                            </h3>
                            <div className="font-mono text-sm text-emerald-400/90 font-medium mt-0.5">
                              {exp.organization}
                            </div>
                          </div>

                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs w-fit">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </div>
                        </div>

                        <ul className="space-y-2.5 pt-1">
                          {exp.highlights.map((point, idx) => (
                            <motion.li
                              key={idx}
                              whileHover={{ x: 4 }}
                              className="flex items-start gap-2.5 text-xs md:text-sm text-text-muted leading-relaxed transition-transform"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </TiltCard>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Side-by-Side Cards: Certifications & Hackathons */}
        <div className="pt-8 border-t border-green-primary/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Certifications Card (Left Column) */}
            <ScrollReveal delay={0.2} direction="left">
              <TiltCard className="p-6 md:p-8 rounded-2xl glass-card border border-green-primary/20 space-y-5 hover:border-green-primary/40 transition-colors h-full">
                <div className="flex items-center gap-3 font-display font-bold text-xl text-text-primary border-b border-green-primary/10 pb-4">
                  <div className="p-2.5 rounded-xl bg-green-primary/10 border border-green-primary/20 text-green-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  Certifications & Accreditations
                </div>

                <ul className="space-y-4 pt-1">
                  {certifications.map((cert) => (
                    <motion.li
                      key={cert.title}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-3 text-xs md:text-sm font-mono text-text-secondary transition-transform group"
                    >
                      <span className="text-green-primary mt-0.5 font-bold text-base">▹</span>
                      <div>
                        <div className="text-text-primary font-medium group-hover:text-green-glow transition-colors">
                          {cert.title}
                        </div>
                        <div className="text-text-muted text-xs mt-0.5">
                          Issued by {cert.issuer}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </TiltCard>
            </ScrollReveal>

            {/* Hackathons & Awards Card (Right Column) */}
            <ScrollReveal delay={0.3} direction="right">
              <TiltCard className="p-6 md:p-8 rounded-2xl glass-card border border-green-primary/20 space-y-5 hover:border-green-primary/40 transition-colors h-full">
                <div className="flex items-center gap-3 font-display font-bold text-xl text-text-primary border-b border-green-primary/10 pb-4">
                  <div className="p-2.5 rounded-xl bg-green-primary/10 border border-green-primary/20 text-green-glow">
                    <Trophy className="w-5 h-5" />
                  </div>
                  Hackathons & Awards
                </div>

                <ul className="space-y-4 pt-1">
                  {achievements.map((item) => (
                    <motion.li
                      key={item.title}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-3 text-xs md:text-sm font-mono text-text-secondary transition-transform group"
                    >
                      <span className="text-green-glow mt-0.5 text-base">🏆</span>
                      <div>
                        <div className="text-text-primary font-medium group-hover:text-green-glow transition-colors">
                          {item.title}
                        </div>
                        <div className="text-text-muted text-xs mt-0.5">
                          {item.context}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
