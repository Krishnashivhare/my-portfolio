"use client";

import { Terminal, Code, Cpu, Shield, Database } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function TechStrip() {
  const { techStrip } = PORTFOLIO_DATA;

  const techIcons: Record<string, any> = {
    Python: Terminal,
    JavaScript: Code,
    React: Cpu,
    Blockchain: Shield,
    SQL: Database,
  };

  return (
    <section className="relative z-20 border-y border-white/[0.08] bg-[#070a12]/80 backdrop-blur-md py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06] items-center">
          {techStrip.map((item) => {
            const IconComp = techIcons[item.name] || Code;
            return (
              <div
                key={item.name}
                className="group flex flex-col items-center justify-center py-3 sm:py-2 px-4 transition-all duration-300 hover:bg-white/[0.02]"
              >
                <div className="flex items-center gap-2.5">
                  <IconComp className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                  <span className="text-sm font-semibold tracking-wider text-slate-300 group-hover:text-white transition-colors duration-200">
                    {item.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-widest group-hover:text-slate-400 transition-colors">
                  {item.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
