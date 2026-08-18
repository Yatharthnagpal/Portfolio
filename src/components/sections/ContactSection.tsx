"use client";

import { useState, FormEvent } from "react";
import { personalInfo } from "@/data/portfolio";
import { Mail, Send, CheckCircle2, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      console.error(err);
      const errorText = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(errorText);
    } finally {
      setIsSubmitting(false);
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`;

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left CTA & Direct Contact Options (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <TiltCard className="rounded-3xl glass-card border border-green-primary/30 p-8 space-y-6 shadow-[0_0_40px_rgba(34,197,94,0.1)]">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary leading-tight">
                    Let&apos;s build something <span className="text-green-glow">intelligent.</span>
                  </h3>
                  <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                    I&apos;m open to AI / ML engineering roles, RAG/LLM backend architecture, and technical collaborations. Send a message or email directly.
                  </p>
                </div>

                {/* Fast Action Buttons */}
                <div className="space-y-3 pt-2">
                  {/* Gmail Direct Compose Button */}
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl glass-card border border-green-primary/40 hover:border-green-glow hover:bg-green-primary/10 text-text-primary font-mono text-xs transition-all duration-200 cursor-pointer group shadow-md"
                  >
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-green-primary group-hover:text-green-glow transition-colors" />
                      <span className="truncate">{personalInfo.email}</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-green-glow font-semibold shrink-0">
                      <span>Compose in Gmail</span>
                      <ExternalLink className="w-3.5 h-3.5 text-green-glow" />
                    </span>
                  </a>

                  {/* WhatsApp Direct Chat */}
                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl glass-card border border-green-primary/30 hover:border-green-primary hover:bg-green-primary/10 text-green-glow font-mono text-xs font-semibold transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <WhatsappIcon className="w-4 h-4 text-green-glow" />
                      <span>WhatsApp Message ({personalInfo.phone})</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Details Footer */}
                <div className="pt-4 border-t border-green-primary/10 font-mono text-xs text-text-muted space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Location:</span>
                    <span className="text-text-primary font-medium">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Status:</span>
                    <span className="text-green-glow font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-glow animate-ping" />
                      Open to Opportunities
                    </span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          {/* Right Inline Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <TiltCard className="rounded-3xl glass-card border border-green-primary/30 p-8 space-y-6 shadow-2xl">
                <div className="border-b border-green-primary/15 pb-4">
                  <h4 className="font-display font-bold text-xl text-text-primary flex items-center gap-2">
                    <Mail className="w-5 h-5 text-green-primary" />
                    Send a Direct Message
                  </h4>
                  <p className="font-mono text-xs text-text-muted mt-1">
                    Fill out the form below to send a message directly to my inbox.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-green-primary/10 border border-green-primary/30 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-green-glow mx-auto" />
                    <h5 className="font-display font-bold text-lg text-text-primary">
                      Message Delivered Successfully!
                    </h5>
                    <p className="font-mono text-xs text-text-muted max-w-sm mx-auto">
                      Thank you for reaching out. I have received your message and will respond to your email address shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs font-mono text-green-primary underline hover:text-green-glow"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-text-muted uppercase text-[10px] tracking-wider">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. Alex Smith"
                          className="w-full px-4 py-3 rounded-xl bg-bg-primary/80 border border-green-primary/20 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-green-primary transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-text-muted uppercase text-[10px] tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-bg-primary/80 border border-green-primary/20 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-green-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-text-muted uppercase text-[10px] tracking-wider">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Project requirements, AI/ML engineering role, or collaboration scope..."
                        className="w-full px-4 py-3 rounded-xl bg-bg-primary/80 border border-green-primary/20 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-green-primary transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-green-primary hover:bg-green-glow disabled:opacity-50 text-bg-primary font-mono text-xs font-bold shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
