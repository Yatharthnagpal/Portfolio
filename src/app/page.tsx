"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import InteractiveBackground from "@/components/background/InteractiveBackground";
import CursorGlow from "@/components/background/CursorGlow";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsMarquee from "@/components/sections/SkillsMarquee";
import GithubSection from "@/components/sections/GithubSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

// Dynamically import 3D Background scene for performance & hydration safety
const Background3D = dynamic(() => import("@/components/3d/Background3D"), {
  ssr: false,
});

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />
      <InteractiveBackground />
      <Background3D />
      <CursorGlow />

      <div className={`relative z-10 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <main className="flex flex-col min-h-screen">
          <HeroSection />
          <AboutSection />
          <SkillsMarquee />
          <GithubSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
