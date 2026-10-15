import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileDown, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Resume | Krishna Shivhare — Computer Science Undergraduate",
  description: "Curriculum Vitae of Krishna Shivhare, Computer Science Engineering undergraduate at Symbiosis Institute of Technology, Nagpur.",
};

export default function ResumePage() {
  const { personal, education, skills, projects } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-[#05070C] text-slate-200 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:text-black print:p-0">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Navigation & Action Bar */}
        <div className="flex items-center justify-between no-print pb-4 border-b border-white/[0.08]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="/Krishna_Shivhare_Resume.pdf"
              download="Krishna_Shivhare_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-xs hover:opacity-90 transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Resume Sheet */}
        <div className="bg-[#090d18] border border-white/[0.08] rounded-2xl p-6 sm:p-12 space-y-8 print:bg-white print:border-none print:p-0">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-gray-300">
            <h1 className="text-3xl font-extrabold tracking-tight text-white print:text-black">
              {personal.name.toUpperCase()}
            </h1>
            <p className="text-sm font-semibold text-blue-400 print:text-blue-700 mt-1">
              {personal.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-slate-400 print:text-gray-600 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{education.institution}</span>
              </span>
              <span>&bull;</span>
              <span>{education.graduation}</span>
              <span>&bull;</span>
              <span>{personal.email}</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 print:text-black border-b border-white/10 pb-1">
              EDUCATION
            </h2>
            <div className="pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <strong className="text-sm text-white print:text-black">
                  {education.institution}
                </strong>
                <span className="text-xs font-mono text-slate-400 print:text-gray-600">
                  {education.graduation}
                </span>
              </div>
              <p className="text-xs text-slate-300 print:text-gray-800">{education.degree}</p>
              <p className="text-xs text-slate-400 print:text-gray-600 mt-1">
                <strong className="text-slate-300 print:text-black">Relevant Coursework: </strong>
                {education.coursework.join(", ")}
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 print:text-black border-b border-white/10 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs">
              {skills.map((cat) => (
                <div key={cat.title} className="flex flex-col sm:flex-row">
                  <span className="font-semibold text-slate-300 print:text-black sm:w-48 shrink-0">
                    {cat.title}:
                  </span>
                  <span className="text-slate-400 print:text-gray-700">
                    {cat.skills.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 print:text-black border-b border-white/10 pb-1">
              FEATURED PROJECTS
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <strong className="text-sm text-white print:text-black">{proj.title}</strong>
                    <span className="text-[11px] font-mono text-blue-400 print:text-blue-600">
                      {proj.techTags.join(" • ")}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-800 leading-relaxed">
                    {proj.description}
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-400 print:text-gray-600 space-y-0.5 pt-1">
                    {proj.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
