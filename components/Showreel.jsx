'use client';

import { useState } from 'react';

const FEATURED_PROJECTS = [
    {
        shortName: 'Agentic AI • IoT',
        badge: 'Featured Architecture • Agentic AI & IoT',
        title: 'Automated Irrigation Decision Agent',
        description: 'Built an autonomous agentic irrigation pipeline replacing static moisture thresholds with a six-phase reasoning loop that returns IRRIGATE, WAIT or MONITOR with exact litres, pump duration, and confidence metrics.',
        highlights: [
            'Designed 6 Zod-typed domain tools (weather, soil physics, crop knowledge, history, hydrology, decision) with a bounded tool-calling loop and 5 explicit conflict-reconciliation rules.',
            'Auditable water-deficit mathematical formula combined with real-time Open-Meteo forecasting and a live timeline UI.',
            'Created polymorphic sensor interface (simulated or validated ESP32 telemetry) with deterministic fallback engine; verified across 8 functional and failure test cases.'
        ],
        tags: ['TypeScript', 'Next.js 16', 'React 19', 'Vercel AI SDK', 'Zod', 'Tailwind CSS', 'Open-Meteo API', 'ESP32'],
        link: 'https://github.com/Krishnashivhare/flexi-ca2',
        linkText: 'View on GitHub: github.com/Krishnashivhare/flexi-ca2'
    },
    {
        shortName: 'Cloud • Research Paper',
        badge: 'Co-Authored Research Paper • Decision Support',
        title: 'Cloud-Based Disaster Response Coordination Platform',
        description: 'Co-authored a paper on a high-throughput coordination platform ranking emergency incidents via weighted priority scoring and allocating ambulances, rescue teams, and supplies via greedy nearest-unit assignment with shortage tracking.',
        highlights: [
            'Evaluated allocation across a 40-run simulation of 80 synthetic incidents: slashed mean first-response time for Critical incidents from 57.8 to 15.9 minutes (-72% latency).',
            'Quantified starvation trade-offs and dynamic emergency rerouting under extreme resource constraints.',
            'Specified a Random Forest severity classifier (scikit-learn, stratified cross-validation, rule-based fallback) as an intelligent automated triage extension.'
        ],
        tags: ['Priority Scoring', 'Greedy Nearest-Unit', 'Random Forest Classifier', 'Simulation & Analysis', 'Scikit-Learn'],
        link: null,
        linkText: null
    },
    {
        shortName: 'Blockchain • Web3',
        badge: 'Decentralized Architecture • Cryptographic Flows',
        title: 'Academic Credential Verification Engine',
        description: 'Architected a tamper-proof decentralized prototype to issue, store, and audit student credentials using immutable ledger principles, eliminating third-party verification bottlenecks through direct cryptographic hash lookups.',
        highlights: [
            'Engineered cryptographic hashing structures enabling university departments to mint tamper-proof student records with verified state proofs.',
            'One-click instant verification portal for employers and institutions with zero dependency on centralized record brokers.',
            'Designed modular smart contract fundamentals and clean web integration workflows for cryptographic integrity.'
        ],
        tags: ['Python', 'Smart Contracts', 'Cryptographic Hashing', 'Distributed Ledgers', 'Web Integration'],
        link: 'https://github.com/Krishnashivhare',
        linkText: 'View Blockchain Prototypes on GitHub'
    }
];

export default function Showreel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = FEATURED_PROJECTS[activeIndex];

    return (
        <section className="showreel-section" id="showreel-section">
            <div className="showreel__content" style={{ maxWidth: '1080px', padding: '80px 32px', width: '100%' }}>
                
                {/* Architecture Selector Tabs */}
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                    {FEATURED_PROJECTS.map((proj, idx) => (
                        <button
                            key={proj.shortName}
                            onClick={() => setActiveIndex(idx)}
                            style={{
                                padding: '10px 22px',
                                borderRadius: '30px',
                                border: activeIndex === idx ? '2px solid var(--color-pink)' : '2px solid rgba(255, 255, 255, 0.16)',
                                background: activeIndex === idx ? 'rgba(238, 77, 126, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                color: activeIndex === idx ? '#fff' : 'rgba(255, 255, 255, 0.65)',
                                fontFamily: 'Epilogue, sans-serif',
                                fontWeight: activeIndex === idx ? '800' : '600',
                                fontSize: '0.9rem',
                                letterSpacing: '0.5px',
                                cursor: 'pointer',
                                transition: 'all 0.25s ease',
                            }}
                        >
                            {proj.shortName}
                        </button>
                    ))}
                </div>

                {/* Badge */}
                <span style={{ 
                    display: 'inline-block',
                    fontFamily: 'Epilogue, sans-serif',
                    fontSize: '0.95rem',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: 'var(--color-pink)',
                    marginBottom: '1rem',
                    fontWeight: '800'
                }}>
                    {activeProject.badge}
                </span>

                {/* Title */}
                <h2 className="showreel__title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', lineHeight: 1.15, marginBottom: '1.2rem', color: '#fff' }}>
                    {activeProject.title}
                </h2>

                {/* Subtitle / Overview */}
                <p className="showreel__subtitle" style={{ color: 'rgba(255, 255, 255, 0.85)', textTransform: 'none', letterSpacing: '0px', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '820px', margin: '0 auto 2rem auto' }}>
                    {activeProject.description}
                </p>

                {/* Highlights List */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '16px',
                    maxWidth: '960px',
                    margin: '0 auto 2.5rem auto',
                    textAlign: 'left'
                }}>
                    {activeProject.highlights.map((h, i) => (
                        <div key={i} style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '16px',
                            padding: '18px 20px',
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: '0.95rem',
                            lineHeight: 1.55,
                            fontFamily: 'DM Sans, sans-serif'
                        }}>
                            <span style={{ color: 'var(--color-pink)', fontWeight: 800, marginRight: '8px' }}>•</span>
                            {h}
                        </div>
                    ))}
                </div>

                {/* Tech tags */}
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    {activeProject.tags.map((tag) => (
                        <span key={tag} style={{
                            padding: '6px 16px',
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '20px',
                            color: '#fff',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            fontFamily: 'DM Sans, sans-serif'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Link if available */}
                {activeProject.link && (
                    <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'var(--color-pink)',
                            fontFamily: 'Epilogue, sans-serif',
                            fontWeight: 800,
                            fontSize: '1rem',
                            textDecoration: 'none',
                            borderBottom: '2px solid var(--color-pink)',
                            paddingBottom: '4px',
                            transition: 'opacity 0.2s ease',
                        }}
                    >
                        {activeProject.linkText}
                    </a>
                )}
            </div>
        </section>
    );
}
