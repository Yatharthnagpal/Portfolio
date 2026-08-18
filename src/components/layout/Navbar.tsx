"use client";

import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { Menu, X, Terminal, ArrowUpRight, FileText } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("top");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
          setScrollProgress(progress);
          setIsScrolled(window.scrollY > 50);

          // Section tracking
          const sections = navLinks
            .map((link) => link.href.substring(1))
            .filter(Boolean);

          for (let i = sections.length - 1; i >= 0; i--) {
            const sectionId = sections[i];
            if (sectionId === "top") continue;
            const el = document.getElementById(sectionId);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 220) {
                setActiveSection(sectionId);
                ticking = false;
                return;
              }
            }
          }
          if (window.scrollY < 200) {
            setActiveSection("top");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Terminal-inspired scroll progress bar (inspired by aashishjaini.me) */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-bg-elevated/80 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-green-deep via-green-primary to-green-glow transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Header / Navigation */}
      <header
        className={`fixed top-3 left-0 right-0 z-40 px-4 md:px-8 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#top"
            className="group flex items-center gap-2 font-display font-bold text-lg tracking-tight text-text-primary hover:text-green-glow transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-bg-card border border-green-primary/30 flex items-center justify-center font-mono text-xs font-bold text-green-primary group-hover:border-green-primary group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all">
              NY
            </div>
            <span className="hidden sm:inline font-mono text-xs font-semibold text-text-primary group-hover:text-green-glow transition-colors">
              NY.Portfolio
            </span>
          </a>

          {/* Desktop Floating Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1 glass-card px-3 py-1.5 rounded-full shadow-lg border border-green-primary/20">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive =
                (id === "top" && activeSection === "top") ||
                activeSection === id;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-mono tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-green-glow font-medium bg-green-primary/10 border border-green-primary/30 shadow-[0_0_12px_rgba(34,197,94,0.15)]"
                      : "text-text-muted hover:text-text-primary hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume & Contact */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-text-primary font-semibold glass-card border border-green-primary/30 hover:border-green-primary hover:text-green-glow rounded-full transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-green-primary" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono text-bg-primary font-semibold bg-green-primary hover:bg-green-glow rounded-full shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(74,222,128,0.5)] transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Contact Me
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl glass-card text-text-secondary hover:text-text-primary border border-green-primary/20"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-green-primary" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 md:hidden">
          <div className="font-mono text-xs text-green-primary flex items-center gap-2 mb-8">
            <Terminal className="w-4 h-4" />
            Navigation Terminal
          </div>
          <nav className="flex flex-col items-center gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl font-bold text-text-primary hover:text-green-glow transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 text-sm font-mono text-bg-primary font-semibold bg-green-primary rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
