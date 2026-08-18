"use client";

import { personalInfo } from "@/data/portfolio";
import { Mail, ArrowUpRight } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <ScrollReveal direction="left">
          <div className="flex items-center gap-3 mb-12">
            <span className="section-number">05 //</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary tracking-tight">
              Get In <span className="text-green-glow">Touch</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-green-primary/30 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Big Statement Card */}
        <ScrollReveal>
          <TiltCard className="rounded-3xl glass-card border border-green-primary/30 p-8 md:p-14 text-center relative shadow-[0_0_50px_rgba(34,197,94,0.1)]">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-primary/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-3xl mx-auto space-y-4 relative z-10">
              <h3 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-text-primary leading-tight tracking-tight">
                Let&apos;s build something <span className="text-green-glow">intelligent.</span>
              </h3>
              <p className="text-text-muted text-sm sm:text-base md:text-lg max-w-xl mx-auto">
                I&apos;m open to AI / ML engineering roles and technical collaborations. Reach out via email or message directly on WhatsApp.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-primary hover:bg-green-glow text-bg-primary font-mono text-sm font-semibold shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(74,222,128,0.6)] transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Send Email
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full glass-card border border-green-primary/40 hover:border-green-primary hover:bg-green-primary/10 text-green-glow font-mono text-sm font-semibold transition-all duration-300 shadow-lg"
              >
                <WhatsappIcon className="w-4 h-4 text-green-glow" />
                Chat on WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-green-primary/10 max-w-2xl mx-auto text-left font-mono text-xs text-text-secondary relative z-10 mt-8">
              <motion.a
                whileHover={{ y: -3 }}
                href={`mailto:${personalInfo.email}`}
                className="p-4 rounded-xl bg-bg-primary/50 border border-green-primary/10 hover:border-green-primary/30 transition-colors space-y-1"
              >
                <div className="text-text-muted text-[10px] uppercase">Email</div>
                <div className="text-text-primary truncate">{personalInfo.email}</div>
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-bg-primary/50 border border-green-primary/10 hover:border-green-primary/30 transition-colors space-y-1"
              >
                <div className="text-text-muted text-[10px] uppercase">WhatsApp / Phone</div>
                <div className="text-text-primary">{personalInfo.phone}</div>
              </motion.a>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-xl bg-bg-primary/50 border border-green-primary/10 space-y-1"
              >
                <div className="text-text-muted text-[10px] uppercase">Location</div>
                <div className="text-text-primary">{personalInfo.location}</div>
              </motion.div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
