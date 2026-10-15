"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle,
  Copy,
  Check,
  AlertCircle,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = "Please enter your name.";
    if (!formState.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formState.subject.trim()) errs.subject = "Please enter a subject.";
    if (!formState.message.trim()) {
      errs.message = "Please enter a message.";
    } else if (formState.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 600);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
    formState.subject || "Collaboration Inquiry"
  )}&body=${encodeURIComponent(
    `Hi Krishna,\n\n${formState.message || ""}\n\nFrom,\n${formState.name || ""}`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#05070C] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-400">
              // CONTACT
            </span>
            <div className="h-px w-16 bg-white/[0.08]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have an idea? Let&apos;s build something meaningful.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Reach out for project collaborations, software prototyping, or technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-8 rounded-3xl bg-[#090d18]/80 border border-white/[0.08] space-y-6">
              <h3 className="text-lg font-bold text-white">Direct Channels</h3>

              <div className="space-y-3">
                {/* Email with 1-click copy */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">
                        EMAIL
                      </span>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs sm:text-sm font-mono text-slate-200 hover:text-white"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] flex items-center justify-between gap-3 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">
                        LINKEDIN
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                        linkedin.com/in/krishnashivhare
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* GitHub */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] flex items-center justify-between gap-3 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">
                        GITHUB
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                        github.com/krishnashivhare
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800 text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">
                      LOCATION
                    </span>
                    <span className="text-xs sm:text-sm text-slate-300">
                      Nagpur, Maharashtra, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#090d18]/80 border border-white/[0.08]">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Form Validated</h3>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formState.name}</strong>. Because no live backend is configured in this repository, this form operates as a frontend demo. You can also dispatch this directly to my email client below.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-xs tracking-wider uppercase"
                    >
                      Open in Email App &rarr;
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs hover:text-white"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <h3 className="text-base font-bold text-white">Send a Message</h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      Validated Form
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs text-blue-300 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
                    <span>
                      Frontend validation enabled. You can submit to test or click below to launch your default mail client directly.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-xs font-mono text-slate-300 block mb-1">
                        NAME *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => {
                          setFormState({ ...formState, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#060912] border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name ? "border-red-500/80" : "border-white/10 focus:border-indigo-400"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="text-xs font-mono text-slate-300 block mb-1">
                        EMAIL *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formState.email}
                        onChange={(e) => {
                          setFormState({ ...formState, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#060912] border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? "border-red-500/80" : "border-white/10 focus:border-indigo-400"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-xs font-mono text-slate-300 block mb-1">
                      SUBJECT *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Collaboration / Project Inquiry"
                      value={formState.subject}
                      onChange={(e) => {
                        setFormState({ ...formState, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: "" });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#060912] border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject ? "border-red-500/80" : "border-white/10 focus:border-indigo-400"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs font-mono text-slate-300 block mb-1">
                      MESSAGE (MIN 10 CHARACTERS) *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Hi Krishna, I'd like to discuss..."
                      value={formState.message}
                      onChange={(e) => {
                        setFormState({ ...formState, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#060912] border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message ? "border-red-500/80" : "border-white/10 focus:border-indigo-400"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? "Validating..." : "Submit Message"}</span>
                    </button>

                    <a
                      href={mailtoUrl}
                      className="text-xs font-mono text-slate-400 hover:text-white underline"
                    >
                      Or open email client directly &rarr;
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
