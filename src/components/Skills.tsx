"use client";

import { useState } from "react";
import { Code, Globe, Shield, Cpu, Search, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...skills.map((s) => s.title)];

  const categoryIcons: Record<string, any> = {
    Programming: Code,
    Frontend: Globe,
    Blockchain: Shield,
    "Fundamentals and tools": Cpu,
  };

  const filteredGroups = skills
    .filter((g) => activeCategory === "All" || g.title === activeCategory)
    .map((g) => ({
      ...g,
      skills: g.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((g) => g.skills.length > 0);

  return (
    <section id="skills" className="py-24 bg-[#05070C] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-400">
                // TECHNICAL COMPETENCIES
              </span>
              <div className="h-px w-16 bg-white/[0.08]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Skills &amp; Capabilities
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Organized technical foundations across programming, frontend engineering,
              blockchain architecture, and core CS fundamentals.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, Git)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-[#0a0e1c] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 border ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-transparent font-semibold shadow-md shadow-indigo-950"
                    : "bg-[#090d18] text-slate-400 border-white/[0.08] hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.map((group) => {
            const IconComp = categoryIcons[group.title] || Code;
            return (
              <div
                key={group.title}
                className="p-6 sm:p-8 rounded-3xl bg-[#090d18]/80 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 space-y-5"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{group.title}</h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {group.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">{group.description}</p>

                {/* Elegant badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-indigo-400/40 text-xs text-slate-200 font-medium transition-all group"
                    >
                      <CheckCircle2 className="w-3 h-3 text-indigo-400 group-hover:text-blue-400 transition-colors" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
