"use client";

import { useState } from "react";
import { skillCategories } from "@/data/portfolio";
import { getTechIcon } from "@/components/ui/BrandIcons";

export default function SkillsMarquee() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...skillCategories.map((c) => c.name)];

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      name: skill,
      category: cat.name,
      color: cat.color,
    }))
  );

  const filteredSkills =
    selectedCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === selectedCategory);

  // Divide into two rows for dual alternating marquee tracks
  const half = Math.ceil(filteredSkills.length / 2);
  const row1 = filteredSkills.slice(0, half);
  const row2 = filteredSkills.slice(half);

  // Duplicate for seamless infinite scrolling
  const row1Items = [...row1, ...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="section-number">02 //</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary tracking-tight">
            Tech <span className="text-green-glow">Stack & Dev Apps</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-green-primary/30 to-transparent" />
        </div>
        <p className="text-text-muted font-mono text-xs md:text-sm max-w-2xl mb-8">
          Languages, frameworks, AI libraries, cloud platforms, and developer tools I build with.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-green-primary text-bg-primary font-semibold shadow-[0_0_15px_rgba(34,197,94,0.35)]"
                    : "glass-card text-text-muted hover:text-text-primary hover:border-green-primary/30"
                }`}
              >
                {cat === "all" ? "All Tech" : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Infinite Scrolling Marquee Tracks with SVG Brand Icons */}
      <div className="space-y-4 marquee-container">
        {/* Row 1 — Left scroll */}
        <div className="flex overflow-hidden select-none">
          <div className="flex gap-4 animate-[marquee_60s_linear_infinite] whitespace-nowrap marquee-track">
            {row1Items.map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl glass-card border border-green-primary/20 hover:border-green-primary/60 transition-all duration-300 group cursor-default"
              >
                <div className="text-green-primary group-hover:text-green-glow transition-colors">
                  {getTechIcon(item.name, "w-4 h-4")}
                </div>
                <span className="font-mono text-sm text-text-primary font-medium group-hover:text-green-glow transition-colors">
                  {item.name}
                </span>
                <span className="font-mono text-[10px] text-text-muted opacity-60">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — Right scroll */}
        <div className="flex overflow-hidden select-none">
          <div className="flex gap-4 animate-[marquee-reverse_65s_linear_infinite] whitespace-nowrap marquee-track">
            {row2Items.map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl glass-card border border-green-primary/20 hover:border-green-primary/60 transition-all duration-300 group cursor-default"
              >
                <div className="text-green-primary group-hover:text-green-glow transition-colors">
                  {getTechIcon(item.name, "w-4 h-4")}
                </div>
                <span className="font-mono text-sm text-text-primary font-medium group-hover:text-green-glow transition-colors">
                  {item.name}
                </span>
                <span className="font-mono text-[10px] text-text-muted opacity-60">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
