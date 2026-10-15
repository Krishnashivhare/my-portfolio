"use client";

import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 bg-[#05070C] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-400">
              // ACADEMIC FOUNDATION
            </span>
            <div className="h-px w-16 bg-white/[0.08]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-[#090d18]/80 border border-white/[0.08] hover:border-indigo-500/30 p-8 sm:p-12 transition-all duration-300 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />

            <div className="space-y-8">
              {/* Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Undergraduate Degree</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {education.institution}
                  </h3>

                  <p className="text-base sm:text-lg font-medium text-slate-300">
                    {education.degree}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-white font-medium">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{education.graduation}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Nagpur, Maharashtra, India</span>
                  </span>
                </div>
              </div>

              {/* Coursework */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>Relevant Coursework:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {education.coursework.map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="text-xs sm:text-sm font-medium text-slate-200">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
