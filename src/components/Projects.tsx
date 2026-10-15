"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ShieldCheck,
  Globe,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Play,
  Clock,
  Terminal,
} from "lucide-react";
import { Github } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;

  // State for Project 1: Blockchain Verifier Interactive Demo
  const [studentName, setStudentName] = useState("Krishna Shivhare");
  const [degree, setDegree] = useState("B.Tech Computer Science & Engineering");
  const [rollNo, setRollNo] = useState("SIT-2024-CSE-088");
  const [credentialHash, setCredentialHash] = useState<string>(
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  );
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<"verified" | "tampered" | null>(
    "verified"
  );
  const [activeTabP1, setActiveTabP1] = useState<"visual" | "demo">("visual");

  // State for Project 2: Dynamic Client Suite Interactive Demo
  const [activeTabP2, setActiveTabP2] = useState<"visual" | "demo">("visual");
  const [suiteUsername, setSuiteUsername] = useState("");
  const [suiteEmail, setSuiteEmail] = useState("");
  const [counter, setCounter] = useState(60);
  const [counterRunning, setCounterRunning] = useState(false);

  // Compute real SHA-256 hash using Web Crypto API
  const handleComputeHash = async (tamper: boolean = false) => {
    setIsVerifying(true);
    const textToHash = tamper
      ? `${studentName}_TAMPERED_${degree}_${rollNo}`
      : `${studentName}_${degree}_${rollNo}_SIT_NAGPUR_2028`;

    try {
      const msgUint8 = new TextEncoder().encode(textToHash);
      const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

      setTimeout(() => {
        setCredentialHash(hashHex);
        setVerificationResult(tamper ? "tampered" : "verified");
        setIsVerifying(false);
      }, 350);
    } catch (e) {
      setIsVerifying(false);
    }
  };

  const handleToggleTimer = () => {
    if (counterRunning) {
      setCounterRunning(false);
    } else {
      setCounterRunning(true);
      const timer = setInterval(() => {
        setCounter((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCounterRunning(false);
            return 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(suiteEmail);
  const isUsernameValid = suiteUsername.trim().length >= 3;

  return (
    <section id="work" className="py-24 bg-[#05070C] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with "FEATURED PROJECTS" & "VIEW ALL PROJECTS" link */}
        <div className="flex items-center justify-between mb-16 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-widest text-white uppercase">
              FEATURED PROJECTS
            </h2>
          </div>

          <a
            href="https://github.com/krishnashivhare"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-slate-400 hover:text-white transition-colors uppercase"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Projects List: Two Large Horizontal Cards */}
        <div className="space-y-16">
          {/* ============================================================== */}
          {/* PROJECT 01 — ACADEMIC CREDENTIAL VERIFICATION */}
          {/* ============================================================== */}
          <div className="group rounded-3xl bg-[#090d18]/90 border border-white/[0.08] hover:border-indigo-500/40 p-6 sm:p-10 transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,102,241,0.18)] relative overflow-hidden">
            {/* Top subtle highlight */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-80" />

            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                {projects[0].projectNumber}
              </span>

              {/* View switch: Visual vs Interactive Simulator */}
              <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
                <button
                  onClick={() => setActiveTabP1("visual")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTabP1 === "visual"
                      ? "bg-white/10 text-white font-medium"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Architecture Visual
                </button>
                <button
                  onClick={() => setActiveTabP1("demo")}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    activeTabP1 === "demo"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Test SHA-256 Demo</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Description, Features, Tech Tags */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                    {projects[0].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {projects[0].description}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Key Features:
                  </span>
                  <ul className="space-y-2">
                    {projects[0].features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {projects[0].techTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={projects[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <button
                    onClick={() => setActiveTabP1(activeTabP1 === "demo" ? "visual" : "demo")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wider uppercase transition-all"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{activeTabP1 === "demo" ? "View Visual" : "Live Verifier Simulator"}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Mockup or Live SHA-256 Simulator */}
              <div className="lg:col-span-6 relative">
                {activeTabP1 === "visual" ? (
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl bg-[#060912]">
                    <Image
                      src={projects[0].image}
                      alt={projects[0].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060912]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                      <span>Cryptographic Ledger Audit</span>
                      <span className="text-emerald-400">Verified &bull; SHA-256</span>
                    </div>
                  </div>
                ) : (
                  /* Interactive SHA-256 Simulator */
                  <div className="rounded-2xl bg-[#060912] border border-white/10 p-5 space-y-4 font-mono text-xs shadow-inner">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="text-slate-400 ml-1">credential_audit_engine.py</span>
                      </div>
                      <span className="text-[10px] text-blue-400 uppercase">Live WebCrypto</span>
                    </div>

                    <div className="space-y-3 font-sans">
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">
                          STUDENT_NAME:
                        </label>
                        <input
                          type="text"
                          value={studentName}
                          onChange={(e) => {
                            setStudentName(e.target.value);
                            setVerificationResult(null);
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-[#0e1424] border border-white/10 text-slate-100 text-xs font-mono focus:outline-none focus:border-indigo-400"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-mono text-slate-400 block mb-1">
                            ROLL_NUMBER:
                          </label>
                          <input
                            type="text"
                            value={rollNo}
                            onChange={(e) => {
                              setRollNo(e.target.value);
                              setVerificationResult(null);
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-[#0e1424] border border-white/10 text-slate-100 text-xs font-mono focus:outline-none focus:border-indigo-400"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-mono text-slate-400 block mb-1">
                            INSTITUTION:
                          </label>
                          <input
                            type="text"
                            disabled
                            value="SIT Nagpur (Symbiosis)"
                            className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/5 text-slate-500 text-xs font-mono cursor-not-allowed"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Hash Output */}
                    <div className="p-3 rounded-xl bg-[#0a0f1d] border border-white/10 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-500">SHA-256 HASH DIGEST:</span>
                        <span className="text-indigo-400">Block #048192</span>
                      </div>
                      <p className="text-[10px] text-slate-300 break-all font-mono leading-relaxed bg-black/60 p-2 rounded border border-white/5">
                        {credentialHash}
                      </p>
                    </div>

                    {/* Status & Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <div className="flex items-center gap-2">
                        {verificationResult === "verified" ? (
                          <span className="text-emerald-400 flex items-center gap-1 font-mono text-xs">
                            <ShieldCheck className="w-4 h-4" /> Validated Original
                          </span>
                        ) : verificationResult === "tampered" ? (
                          <span className="text-red-400 flex items-center gap-1 font-mono text-xs">
                            <AlertTriangle className="w-4 h-4" /> Tamper Mismatch
                          </span>
                        ) : (
                          <span className="text-slate-400 text-xs">Click Validate</span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleComputeHash(false)}
                          disabled={isVerifying}
                          className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
                        >
                          {isVerifying ? "Hashing..." : "Verify Hash"}
                        </button>
                        <button
                          onClick={() => handleComputeHash(true)}
                          disabled={isVerifying}
                          className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30 text-xs font-medium transition-colors"
                        >
                          Simulate Tampering
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* PROJECT 02 — DYNAMIC WEB APPLICATION SUITE */}
          {/* ============================================================== */}
          <div className="group rounded-3xl bg-[#090d18]/90 border border-white/[0.08] hover:border-indigo-500/40 p-6 sm:p-10 transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,102,241,0.18)] relative overflow-hidden">
            {/* Top subtle highlight */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80" />

            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
                {projects[1].projectNumber}
              </span>

              {/* View switch */}
              <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
                <button
                  onClick={() => setActiveTabP2("visual")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTabP2 === "visual"
                      ? "bg-white/10 text-white font-medium"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Device Mockup
                </button>
                <button
                  onClick={() => setActiveTabP2("demo")}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    activeTabP2 === "demo"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Test Client Sandbox</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Description, Features, Tech Tags */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                    {projects[1].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {projects[1].description}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Key Features:
                  </span>
                  <ul className="space-y-2">
                    {projects[1].features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-indigo-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {projects[1].techTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={projects[1].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <button
                    onClick={() => setActiveTabP2(activeTabP2 === "demo" ? "visual" : "demo")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wider uppercase transition-all"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{activeTabP2 === "demo" ? "View Mockup" : "Live Client Sandbox"}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Device Mockup or Live Client Sandbox */}
              <div className="lg:col-span-6 relative">
                {activeTabP2 === "visual" ? (
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl bg-[#060912]">
                    <Image
                      src={projects[1].image}
                      alt={projects[1].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060912]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                      <span>Responsive Dashboard Suite</span>
                      <span className="text-indigo-400">LocalStorage &bull; ES6+</span>
                    </div>
                  </div>
                ) : (
                  /* Live Client Sandbox */
                  <div className="rounded-2xl bg-[#060912] border border-white/10 p-5 space-y-4 font-mono text-xs shadow-inner">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-slate-300 font-semibold font-sans">
                        Event Validation &amp; Storage Utilities
                      </span>
                      <span className="text-[10px] text-indigo-400">DOM Engine</span>
                    </div>

                    <div className="space-y-3 font-sans">
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                          <span>Real-Time Username Check:</span>
                          {suiteUsername && (
                            <span className={isUsernameValid ? "text-emerald-400" : "text-amber-400"}>
                              {isUsernameValid ? "Passed ✓" : "Min 3 chars"}
                            </span>
                          )}
                        </div>
                        <input
                          type="text"
                          placeholder="Type a username..."
                          value={suiteUsername}
                          onChange={(e) => setSuiteUsername(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-[#0e1424] border border-white/10 text-white text-xs font-mono focus:outline-none"
                        />
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                          <span>Real-Time Email Regex:</span>
                          {suiteEmail && (
                            <span className={isEmailValid ? "text-emerald-400" : "text-red-400"}>
                              {isEmailValid ? "RFC format ✓" : "Invalid email"}
                            </span>
                          )}
                        </div>
                        <input
                          type="email"
                          placeholder="e.g. dev@example.com"
                          value={suiteEmail}
                          onChange={(e) => setSuiteEmail(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-[#0e1424] border border-white/10 text-white text-xs font-mono focus:outline-none"
                        />
                      </div>

                      {/* Countdown Timer */}
                      <div className="p-3 rounded-xl bg-[#0a0f1d] border border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-slate-400 font-mono block">Dynamic Timer:</span>
                          <span className="text-2xl font-mono font-bold text-white">
                            00:{counter < 10 ? `0${counter}` : counter}
                          </span>
                        </div>
                        <button
                          onClick={handleToggleTimer}
                          className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold font-mono"
                        >
                          {counterRunning ? "Pause" : "Start"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
