"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
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

const RideExperience = dynamic(() => import("@/components/experience/RideExperience"), {
  ssr: false,
});

export default function Home() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />
      <RideExperience />

      <div className={`portfolio-shell relative z-10 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <main className="min-h-screen">
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
