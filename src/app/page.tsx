"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070C] text-slate-100 flex flex-col selection:bg-indigo-600 selection:text-white">
      {/* Minimal Top Navigation Bar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section: Two-Column with Left Narrative & Right 3D Character Avatar */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* Technology Strip: Python · JavaScript · React · Blockchain · SQL */}
        <TechStrip />

        {/* Featured Projects: 2 Large Horizontal Cards + Live Demos */}
        <Projects />

        {/* About Me: "Curious by nature. Building through code." */}
        <About />

        {/* Skills: Organized Categories with Badges */}
        <Skills />

        {/* Education: Symbiosis Institute of Technology, Nagpur */}
        <Education />

        {/* Contact: "Have an idea? Let's build something meaningful." */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* In-Browser Interactive Resume Preview Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        currentAccent="violet"
      />
    </div>
  );
}
