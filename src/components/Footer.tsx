"use client";

import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030509] border-t border-white/[0.08] text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-extrabold text-white tracking-wider text-base">
              {personal.firstName}{" "}
              <span className="gradient-text-shivhare">
                {personal.lastName}
              </span>
            </span>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Symbiosis Institute of Technology, Nagpur &bull; Class of 2028
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="Email Krishna"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
          <p className="text-slate-300 font-medium">
            Designed &amp; Built by Krishna Shivhare &copy; 2026
          </p>

          <p className="text-[11px] text-slate-500">
            Symbiosis Institute of Technology, Nagpur &bull; Next.js 16 &bull; React 19 &bull; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
