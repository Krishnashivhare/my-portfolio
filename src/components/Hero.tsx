"use client";

import Image from "next/image";
import { ArrowRight, FileDown, Sparkles } from "lucide-react";
import HeroCanvas from "./HeroCanvas";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const { personal } = PORTFOLIO_DATA;

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden bg-[#05070C]"
    >
      {/* Background Interactive Particle & Grid Canvas */}
      <HeroCanvas accentColor="#60A5FA" />

      {/* Subtle background ambient glow spots */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ======================================================== */}
          {/* LEFT COLUMN: Narrative & CTAs */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Eyebrow text */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono tracking-widest text-blue-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>{personal.eyebrow}</span>
            </div>

            {/* Main Heading: "Building digital experiences." with gradient highlight */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-2xl">
              {personal.mainHeading}{" "}
              <span className="gradient-text-hero">
                {personal.headingAccent}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-300 tracking-wide">
              {personal.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              {personal.description}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA: EXPLORE MY WORK */}
              <a
                href="#work"
                onClick={handleScrollToWork}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA: DOWNLOAD RESUME */}
              <a
                href={personal.resumeUrl}
                download="Krishna_Shivhare_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.25] text-slate-200 font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5"
                title="Download Krishna Shivhare CV"
              >
                <FileDown className="w-4 h-4 text-blue-400" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Micro academic info pill */}
            <div className="pt-4 flex items-center gap-2 text-xs font-mono text-slate-500">
              <span>Symbiosis Institute of Technology, Nagpur</span>
              <span>&bull;</span>
              <span>Class of 2028</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: 3D Character Illustration & Orbital Ring */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glowing orbital rings background */}
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
              {/* Outer orbital ring */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin-slow pointer-events-none">
                <span className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_12px_#38bdf8]" />
                <span className="absolute -bottom-1.5 right-1/4 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
              </div>

              {/* Inner reverse orbital ring */}
              <div className="absolute inset-4 sm:inset-6 rounded-full border border-indigo-500/25 border-dashed animate-spin-reverse-slow pointer-events-none" />

              {/* Central radial neon glow */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-blue-600/20 via-indigo-600/25 to-purple-600/20 blur-2xl animate-pulse-glow pointer-events-none" />

              {/* 3D Character Avatar Container */}
              <div className="relative z-10 w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl shadow-indigo-950/60 bg-[#090d18] group">
                <Image
                  src="/avatar_3d.jpg"
                  alt="Krishna Shivhare - 3D Developer Character Illustration"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 290px, 360px"
                />

                {/* Subtle vignette gradient over bottom edge for seamless integration */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#090d18] via-[#090d18]/40 to-transparent pointer-events-none" />
              </div>

              {/* Handwritten annotation: "Code. Build. Repeat." with decorative vector doodle */}
              <div className="absolute -bottom-4 sm:-bottom-6 right-0 sm:-right-4 z-20 flex flex-col items-center select-none pointer-events-none">
                {/* Curved SVG arrow */}
                <svg
                  className="w-12 h-8 text-blue-400 -mb-1 transform rotate-6"
                  viewBox="0 0 60 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 32 C 25 15, 38 10, 52 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M48 10 L 53 18 L 43 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Annotation pill */}
                <div className="px-4 py-1.5 rounded-full bg-[#080d1a]/90 backdrop-blur-md border border-indigo-500/30 shadow-lg shadow-indigo-950/80">
                  <span
                    className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 font-handwriting tracking-wide"
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                  >
                    Code. Build. Repeat.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
