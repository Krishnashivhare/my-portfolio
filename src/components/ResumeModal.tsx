"use client";

import { useEffect } from "react";
import { X, FileDown, Printer, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAccent?: string;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { personal, education, skills, projects } = PORTFOLIO_DATA;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0b0f1d] border border-white/15 rounded-2xl shadow-2xl overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#070b16] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <span className="text-xs font-mono font-semibold text-white tracking-wide">
              KRISHNA_SHIVHARE_CV.PDF &bull; PREVIEW
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.resumeUrl}
              download="Krishna_Shivhare_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition-opacity"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 border border-white/10 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 border border-white/10 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#05070c] text-slate-200 font-sans print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-gray-300">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black">
              {personal.name.toUpperCase()}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-blue-400 print:text-blue-700 mt-1">
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
                  <span className="font-semibold text-slate-300 print:text-black sm:w-44 shrink-0">
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
