"use client";

import {
  Code2,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  const highlights = [
    {
      title: "Frontend & Full-Stack",
      description: "Modern, responsive web apps with clean architecture and reactive state handling.",
      icon: Layers,
    },
    {
      title: "Python Applications",
      description: "Software engineering, data manipulation, and modular algorithmic backend scripts.",
      icon: Terminal,
    },
    {
      title: "Blockchain & Cryptography",
      description: "Distributed ledgers, smart contracts, and cryptographic hash verification.",
      icon: ShieldCheck,
    },
    {
      title: "Algorithms & Problem Solving",
      description: "Rigorous algorithmic fundamentals, data structures, and optimized complexity.",
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#05070C] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-400">
              // ABOUT ME
            </span>
            <div className="h-px w-16 bg-white/[0.08]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {personal.aboutHeading}
          </h2>
        </div>

        {/* Clean Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Short Biography */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-[#090d18]/80 border border-white/[0.08] space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <div className="flex items-center gap-3 pb-3 border-b border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                  KS
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{personal.name}</h3>
                  <p className="text-xs font-mono text-slate-400 flex items-center gap-1 mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                    <span>Symbiosis Institute of Technology, Nagpur</span>
                  </p>
                </div>
              </div>

              <p>{personal.aboutBio1}</p>
              <p className="text-slate-400">{personal.aboutBio2}</p>

              <div className="pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block">EDUCATION</span>
                  <span className="text-slate-200 font-semibold">B.Tech CSE &apos;28</span>
                </div>
                <div>
                  <span className="text-slate-500 block">LOCATION</span>
                  <span className="text-slate-200 font-semibold">Nagpur, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Skill Highlights */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-[#090d18]/60 border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between space-y-3"
                >
                  <div className="p-2.5 w-fit rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
