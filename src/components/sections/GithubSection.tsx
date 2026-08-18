"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitCommit,
  Zap,
  Award,
  TrendingUp,
  ExternalLink,
  Calendar,
  RefreshCw,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import { personalInfo } from "@/data/portfolio";
import type { ContributionDay, GitHubContributionData } from "@/app/api/github-contributions/route";

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function GithubSection() {
  const [data, setData] = useState<GitHubContributionData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [hoveredDay, setHoveredDay] = useState<{
    day: ContributionDay;
    x: number;
    y: number;
  } | null>(null);

  const fetchContributions = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/github-contributions");
      if (!res.ok) throw new Error("Failed to load");
      const json: GitHubContributionData = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContributions();
  }, []);

  // Format matrix of weeks x 7 days
  const { weeks, monthLabels } = useMemo(() => {
    if (!data || !data.days || data.days.length === 0) {
      return { weeks: [], monthLabels: [] };
    }

    const days = data.days;
    const grid: (ContributionDay | null)[][] = [];
    const months: { label: string; weekIndex: number }[] = [];

    let currentWeek: (ContributionDay | null)[] = [];
    let lastMonth = -1;

    // Pad first week if starting day isn't Sunday
    const firstDate = new Date(days[0].date);
    const firstDayOfWeek = firstDate.getDay(); // 0 = Sun, 6 = Sat

    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null);
    }

    days.forEach((day) => {
      const d = new Date(day.date);
      const monthIndex = d.getMonth();

      if (currentWeek.length === 0 || d.getDay() === 0) {
        if (monthIndex !== lastMonth) {
          months.push({
            label: MONTH_NAMES[monthIndex],
            weekIndex: grid.length,
          });
          lastMonth = monthIndex;
        }
      }

      currentWeek.push(day);

      if (currentWeek.length === 7) {
        grid.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      grid.push(currentWeek);
    }

    // Filter out month labels that are too close together (less than 3 weeks apart)
    const filteredMonths: { label: string; weekIndex: number }[] = [];
    months.forEach((m, idx) => {
      if (
        idx === 0 ||
        m.weekIndex - months[idx - 1].weekIndex >= 3 ||
        m.label !== months[idx - 1].label
      ) {
        filteredMonths.push(m);
      }
    });

    return { weeks: grid, monthLabels: filteredMonths };
  }, [data]);

  // Color mapping based on level (0 to 4)
  const getCellColor = (level: number, count: number) => {
    if (count === 0 || level === 0) {
      return "bg-slate-800/40 border-slate-700/30 hover:border-emerald-500/40";
    }
    switch (level) {
      case 1:
        return "bg-emerald-950/90 border-emerald-700/50 shadow-[0_0_6px_rgba(16,185,129,0.2)] hover:scale-125 hover:z-20";
      case 2:
        return "bg-emerald-700/80 border-emerald-500/60 shadow-[0_0_10px_rgba(16,185,129,0.35)] hover:scale-125 hover:z-20";
      case 3:
        return "bg-emerald-500 border-emerald-400/80 shadow-[0_0_14px_rgba(34,197,94,0.5)] hover:scale-125 hover:z-20";
      case 4:
      default:
        return "bg-green-400 border-white/70 shadow-[0_0_18px_rgba(74,222,128,0.8)] hover:scale-125 hover:z-20";
    }
  };

  const statsList = [
    {
      title: "Total Contributions",
      value: data?.stats.totalContributions ?? "...",
      subtitle: "In the past 12 months",
      icon: <GitCommit className="w-5 h-5 text-green-primary" />,
    },
    {
      title: "Active Days",
      value: data?.stats.totalActiveDays ?? "...",
      subtitle: "Days with recorded commits",
      icon: <Calendar className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: "Current Streak",
      value: `${data?.stats.currentStreak ?? 0} days`,
      subtitle: "Continuous dev activity",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: "Longest Streak",
      value: `${data?.stats.longestStreak ?? 0} days`,
      subtitle: "All-time streak peak",
      icon: <Award className="w-5 h-5 text-green-glow" />,
    },
  ];

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-green-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="left">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">02 //</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary tracking-tight">
              GitHub <span className="text-green-glow">Contributions</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-green-primary/30 to-transparent" />
          </div>
          <p className="text-text-muted font-mono text-xs md:text-sm max-w-2xl mb-10">
            Real-time activity and contribution history fetched live from my open-source repositories.
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {statsList.map((stat, idx) => (
            <ScrollReveal key={stat.title} delay={idx * 0.1}>
              <TiltCard className="p-5 rounded-2xl glass-card border border-green-primary/20 hover:border-green-primary/50 transition-all group">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-text-muted">{stat.title}</span>
                  <div className="p-2 rounded-xl bg-green-primary/10 border border-green-primary/20 group-hover:border-green-primary/40 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="font-display font-bold text-2xl md:text-3xl text-text-primary group-hover:text-green-glow transition-colors">
                  {loading ? (
                    <span className="inline-block w-16 h-8 bg-slate-800/80 animate-pulse rounded" />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="font-mono text-[11px] text-text-muted/80 mt-1">
                  {stat.subtitle}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Main Graph Card */}
        <ScrollReveal delay={0.3}>
          <div className="rounded-3xl glass-card border border-green-primary/20 p-6 md:p-8 relative overflow-hidden shadow-2xl">
            {/* Header / Actions inside card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-green-primary/10 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-green-primary/15 border border-green-primary/30 text-green-glow">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-text-primary flex items-center gap-2">
                    @{personalInfo.github.split("/").pop()}
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-primary/15 border border-green-primary/30 font-mono text-[10px] text-green-glow">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-glow animate-ping" />
                      Live Data
                    </span>
                  </h3>
                  <p className="font-mono text-xs text-text-muted">
                    {data?.stats.totalContributions ?? 0} contributions in the last year
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={fetchContributions}
                  disabled={loading}
                  className="p-2 rounded-xl glass-card border border-green-primary/20 text-text-muted hover:text-green-glow hover:border-green-primary/40 transition-colors disabled:opacity-50 cursor-pointer"
                  title="Refresh activity data"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                </button>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs text-bg-primary font-semibold bg-green-primary hover:bg-green-glow shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all transform hover:-translate-y-0.5"
                >
                  View Profile
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Heatmap Grid Section */}
            {loading ? (
              <div className="h-44 flex flex-col items-center justify-center gap-3 text-text-muted font-mono text-xs">
                <RefreshCw className="w-6 h-6 animate-spin text-green-primary" />
                Loading contribution calendar...
              </div>
            ) : error || weeks.length === 0 ? (
              <div className="h-44 flex flex-col items-center justify-center gap-2 text-text-muted font-mono text-xs">
                <p>Failed to load contribution graph.</p>
                <button
                  onClick={fetchContributions}
                  className="text-green-primary underline hover:text-green-glow"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div className="relative overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-green-primary/20">
                <div className="min-w-[760px]">
                  {/* Month Row */}
                  <div className="flex text-[11px] font-mono text-text-muted mb-2 pl-7 relative h-4">
                    {monthLabels.map((m) => (
                      <div
                        key={`${m.label}-${m.weekIndex}`}
                        className="absolute"
                        style={{ left: `${m.weekIndex * 14.5 + 28}px` }}
                      >
                        {m.label}
                      </div>
                    ))}
                  </div>

                  {/* Grid Container */}
                  <div className="flex gap-1">
                    {/* Day of Week Labels */}
                    <div className="flex flex-col justify-between text-[10px] font-mono text-text-muted/60 pr-2 py-0.5 h-[98px]">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                    </div>

                    {/* Matrix Columns (Weeks) */}
                    <div className="flex gap-[3.5px]">
                      {weeks.map((week, wIdx) => (
                        <div key={`week-${wIdx}`} className="flex flex-col gap-[3.5px]">
                          {week.map((day, dIdx) => {
                            if (!day) {
                              return (
                                <div
                                  key={`empty-${wIdx}-${dIdx}`}
                                  className="w-[11px] h-[11px] opacity-0"
                                />
                              );
                            }

                            const colorClass = getCellColor(day.level, day.count);

                            return (
                              <motion.div
                                key={day.date}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  delay: (wIdx * 7 + dIdx) * 0.0008,
                                  type: "spring",
                                  stiffness: 300,
                                }}
                                onMouseEnter={(e) => {
                                  const rect = e.currentTarget.getBoundingClientRect();
                                  setHoveredDay({
                                    day,
                                    x: rect.left + rect.width / 2,
                                    y: rect.top - 8,
                                  });
                                }}
                                onMouseLeave={() => setHoveredDay(null)}
                                className={`w-[11px] h-[11px] rounded-[2.5px] border transition-all duration-150 cursor-pointer ${colorClass}`}
                              />
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Legend & Footer */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-green-primary/10 text-xs font-mono text-text-muted">
                    <div>
                      Peak daily activity:{" "}
                      <span className="text-green-glow font-bold">
                        {data?.stats.maxContributionsInADay ?? 0} commits
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span>Less</span>
                      <div className="flex gap-[3px]">
                        <div className="w-3 h-3 rounded-[2.5px] bg-slate-800/40 border border-slate-700/30" />
                        <div className="w-3 h-3 rounded-[2.5px] bg-emerald-950/90 border border-emerald-700/50" />
                        <div className="w-3 h-3 rounded-[2.5px] bg-emerald-700/80 border border-emerald-500/60" />
                        <div className="w-3 h-3 rounded-[2.5px] bg-emerald-500 border border-emerald-400/80" />
                        <div className="w-3 h-3 rounded-[2.5px] bg-green-400 border border-white/70" />
                      </div>
                      <span>More</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>

      {/* Floating Hover Tooltip Portal */}
      <AnimatePresence>
        {hoveredDay && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.12 }}
            style={{
              position: "fixed",
              left: hoveredDay.x,
              top: hoveredDay.y,
              transform: "translate(-50%, -100%)",
            }}
            className="z-50 pointer-events-none px-3 py-1.5 rounded-lg bg-bg-card/95 border border-green-primary/40 shadow-[0_0_20px_rgba(0,0,0,0.6)] backdrop-blur-md text-center"
          >
            <div className="font-mono text-xs font-semibold text-green-glow">
              {hoveredDay.day.count === 0
                ? "No contributions"
                : `${hoveredDay.day.count} ${
                    hoveredDay.day.count === 1 ? "contribution" : "contributions"
                  }`}
            </div>
            <div className="font-mono text-[10px] text-text-muted">
              {new Date(hoveredDay.day.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
