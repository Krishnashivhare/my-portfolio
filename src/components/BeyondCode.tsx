"use client";

import {
  GitBranch,
  Trophy,
  Users,
  Compass,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function BeyondCode() {
  const { beyondCode } = PORTFOLIO_DATA;

  const icons = [Users, Trophy, GitBranch, Compass];

  return (
    <section id="activities" className="py-24 bg-[#05070C] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-400">
              // ACTIVITIES &amp; INITIATIVES
            </span>
            <div className="h-px w-16 bg-white/[0.08]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Beyond the Code
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Technical initiatives, hackathon contributions at SIT Nagpur, collaborative
            workflows, and disciplined problem solving.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beyondCode.map((item, index: number) => {
            const IconComp = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="group bg-[#090d18]/80 hover:bg-[#0c1222] border border-white/[0.08] hover:border-indigo-500/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="p-3 rounded-xl border bg-indigo-500/10 text-indigo-400 border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-slate-100 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-slate-500 mb-3">
                    {item.institution}
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Authentic Activity</span>
                  <span className="text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                    Active Engagement &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
