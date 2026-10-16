// ─── lib/data.js — All static data for the Truus website ─────────────────────
// ES Module exports — imported by React components

// Marquee tech logos
export const brands = [
    { name: "python", src: "/assets/Tech Logos SVG/python_logo.svg" },
    { name: "javascript", src: "/assets/Tech Logos SVG/javascript_logo.svg" },
    { name: "blockchain", src: "/assets/Tech Logos SVG/blockchain_logo.svg" },
    { name: "web-systems", src: "/assets/Tech Logos SVG/web_logo.svg" },
    { name: "sql", src: "/assets/Tech Logos SVG/sql_logo.svg" },
    { name: "smart-contracts", src: "/assets/Tech Logos SVG/smartcontracts_logo.svg" },
    { name: "git", src: "/assets/Tech Logos SVG/git_logo.svg" },
    { name: "dsa", src: "/assets/Tech Logos SVG/dsa_logo.svg" }
];

// Marquee background colors
export const colors = [
    "var(--color-green)",
    "var(--color-lightblue)",
    "var(--color-darkblue)",
    "var(--color-lightgreen)",
    "var(--color-orange)",
    "var(--color-maroon)",
    "var(--color-pink)"
];

// Footer social icon links + SVG markup
export const SOCIAL_ICONS = [
    {
        href: 'https://www.linkedin.com/in/krishna-shivhare-b03b37282',
        label: 'LinkedIn',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none" data-wiggle-target="" aria-hidden="true"><path d="M35.9969 11.5666C35.9721 11.0166 35.8451 10.4418 35.9164 9.88408C36.0248 9.1955 36.0031 8.51315 35.856 7.82457C35.5029 5.31796 33.4912 3.9003 31.0288 4.22901C29.4848 4.3365 27.9935 4.33494 26.4603 4.23212C25.0355 4.21654 23.6092 4.20875 22.1845 4.11528C21.5278 4.06855 20.8511 4.18695 20.213 4.17604C18.5869 4.09503 16.9299 4.00623 15.3007 4C14.2074 4.07634 13.1063 3.96417 12.0222 4.12775C10.5943 4.13553 9.13087 3.81617 7.73089 4.21966C5.8756 4.53902 4.31146 5.98317 4.46013 7.96166C4.47717 8.73593 4.34089 9.50084 4.30217 10.2735C4.37186 11.3469 4.32385 12.4234 4.32076 13.4952C4.33624 13.9049 4.40283 14.3162 4.39974 14.7259C4.39354 15.2992 4.12408 15.8289 4.16434 16.3991C4.26346 18.0115 4.23093 19.6379 4.17828 21.2596C4.19067 22.3315 4.25107 23.4064 4.22009 24.4689C4.25262 25.6404 4.08226 26.801 4.00018 27.9647C3.99399 29.1814 4.14421 30.4075 4.39664 31.5992C4.5004 32.2489 4.50969 32.9608 4.89066 33.5248C5.22517 34.0716 5.81366 34.4766 6.32471 34.8895C6.64838 35.1465 6.98134 35.4098 7.3778 35.5391C8.50522 35.7946 9.69768 35.5827 10.8437 35.7042C11.9804 35.8024 13.0985 35.8647 14.2383 35.8117C16.5799 35.98 18.9416 35.9161 21.294 35.8818C23.2283 35.8008 25.1703 36.0376 27.1045 35.8678C28.9227 35.846 30.7795 36.2168 32.5651 35.8039C33.7064 35.3646 34.9128 34.6246 35.3341 33.4017C35.5695 32.7131 35.6066 31.9778 35.6531 31.2565C35.7956 29.0334 35.8018 26.8166 35.7042 24.5982C35.8467 23.1073 35.7971 21.5852 35.8715 20.0835C36.0232 17.2512 35.8513 14.4097 36 11.5915V11.5619L35.9969 11.5666ZM9.43286 12.1227C9.42666 11.5681 9.50255 10.9948 9.82157 10.5353C10.4209 9.63793 11.7047 9.08177 12.651 9.64884C14.0928 10.339 14.3901 12.4951 13.289 13.5996C13.0459 13.8551 12.716 13.9657 12.366 13.9844C11.6846 13.9844 10.8421 14.2041 10.2691 13.7741C9.81693 13.3519 9.42821 12.7802 9.43286 12.1492V12.1212V12.1227ZM13.9936 18.7452C13.9782 18.9493 13.9209 19.1503 13.8775 19.3513C13.718 20.0944 13.8883 20.8624 13.8574 21.6164C13.7861 23.6292 13.7335 25.6544 13.8109 27.6703C13.8403 28.4149 13.8728 29.1658 13.8992 29.9105C13.9658 30.624 13.5848 31.1272 12.86 31.1926C12.0423 31.2752 11.22 31.2783 10.3961 31.1817C10.1886 31.1552 9.97024 31.0851 9.82931 30.9371C9.52578 30.6084 9.57069 30.0211 9.55985 29.5833C9.57688 28.7312 9.6187 27.8401 9.54127 26.9879C9.49945 26.5362 9.57998 26.089 9.56295 25.6373C9.40189 24.1417 9.37866 22.6259 9.3229 21.121C9.34613 20.1177 9.47003 19.1145 9.501 18.1081C9.55675 17.5675 9.40808 16.7013 10.057 16.5066C11.0961 16.3742 12.1415 16.4162 13.2255 16.3601C13.7613 16.3477 13.9472 16.6639 13.9038 17.2045C13.8465 17.7155 14.0076 18.2125 13.9967 18.7203V18.7484L13.9936 18.7452ZM31.1667 27.6111C31.097 28.3713 31.1403 29.1658 31.0877 29.9292C31.0877 30.3561 30.795 30.6957 30.366 30.7299C29.4074 30.8795 28.4395 30.7408 27.4514 30.7814C27.0689 30.8187 26.7561 30.691 26.7638 30.2501C26.7437 28.6112 26.8552 26.9568 26.5377 25.335C26.4634 24.9518 26.468 24.5639 26.4928 24.176C26.5439 23.3784 26.2884 22.5979 26.2698 21.808C26.2466 21.3422 26.2698 20.7923 25.957 20.4215C24.9984 19.5164 23.6371 19.2905 22.519 20.0492C20.9533 21.0088 21.3126 23.1182 21.1624 24.6994C21.1701 25.2743 21.0617 25.8336 21.0183 26.4006C21.1747 27.7264 21.0369 29.1082 21.0648 30.4402C21.0849 30.853 20.7411 31.0555 20.3663 31.0524C19.3752 31.1256 18.4243 31.2004 17.4673 31.269C17.3031 31.2783 17.1126 31.2643 16.9856 31.1771C16.8432 31.0883 16.7998 30.8686 16.8075 30.6848C16.8199 30.3358 16.8633 29.9697 16.8463 29.6098C16.7162 28.0909 16.6233 26.5844 16.7146 25.0515C16.7502 23.6074 16.6914 22.1601 16.5737 20.7222C16.7162 19.4151 16.6279 18.0909 16.5814 16.773C16.5706 16.3944 16.8122 16.2137 17.1544 16.1919C18.333 16.061 20.0938 16.1124 20.9858 16.3041C21.5139 16.4022 21.1004 16.8244 21.0462 17.2918C21.0354 17.3821 21.0307 17.4834 21.0431 17.5706C21.0725 17.904 21.3343 17.9492 21.5557 17.7389C22.1922 17.0908 22.9325 16.4131 23.8229 16.1265C25.2601 15.6124 26.959 15.6389 28.1127 16.7574C29.7249 17.9352 29.8735 18.1221 30.7067 19.9666C31.3246 21.1475 31.3355 22.4623 31.2023 23.746C31.1729 24.3785 31.1883 25.0297 31.145 25.6747C31.1465 26.3305 31.3091 26.9412 31.1744 27.5799L31.1713 27.6095L31.1667 27.6111Z" fill="currentColor"/></svg>'
    },
    {
        href: 'https://github.com/Krishnashivhare',
        label: 'GitHub',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none" data-wiggle-target="" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4C11.1634 4 4 11.1634 4 20C4 27.0694 8.584 33.0673 14.9398 35.1818C15.7398 35.3287 16.0321 34.8348 16.0321 34.4124C16.0321 34.0298 16.0182 32.7766 16.0099 31.4285C11.5599 32.3957 10.6198 29.2779 10.6198 29.2779C9.89248 27.4309 8.8436 26.9392 8.8436 26.9392C7.39178 25.9472 8.95374 25.9674 8.95374 25.9674C10.5599 26.0797 11.4055 27.6146 11.4055 27.6146C12.8327 30.0603 15.1488 29.3533 16.0617 28.9431C16.2069 27.9084 16.6209 27.2036 17.0789 26.804C13.5259 26.3996 9.79093 25.027 9.79093 18.897C9.79093 17.1511 10.4137 15.7226 11.4398 14.6033C11.275 14.2004 10.7275 12.5735 11.5959 10.3725C11.5959 10.3725 12.9388 9.94314 16.0006 12.0157C17.2789 11.6601 18.6416 11.4824 20 11.4756C21.3584 11.4824 22.7212 11.6601 24.0007 12.0157C27.0607 9.94314 28.4019 10.3725 28.4019 10.3725C29.2721 12.5735 28.7246 14.2004 28.5606 14.6033C29.5885 15.7226 30.2079 17.1511 30.2079 18.897C30.2079 25.0441 26.467 26.3941 22.9039 26.7907C23.4776 27.2846 23.9893 28.2618 23.9893 29.7573C23.9893 31.8953 23.9698 33.6231 23.9698 34.1424C23.9698 34.5686 24.2588 35.068 25.071 34.9095C31.4206 32.7885 36 26.8021 36 20C36 11.1634 28.8366 4 20 4Z" fill="currentColor"/></svg>'
    },
    {
        href: 'mailto:krishna12aprill@gmail.com',
        label: 'Email',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none" data-wiggle-target="" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C4.89543 10 4 10.8954 4 12V28C4 29.1046 4.89543 30 6 30H34C35.1046 30 36 29.1046 36 28V12C36 10.8954 35.1046 10 34 10H6ZM6.8 12.5L20 21.6667L33.2 12.5H6.8ZM6.5 14.75V27.5H33.5V14.75L20.8 23.5417C20.3167 23.8762 19.6833 23.8762 19.2 23.5417L6.5 14.75Z" fill="currentColor"/></svg>'
    }
];

// Service cards data — matching Krishna :)Shivhare's Core Competencies & Projects
export const CARDS_DATA = [
    {
        color: 'green',
        sticker: 'camera',
        title: 'agentic ai & systems',
        services: [
            'Vercel AI SDK & Tool-Calling',
            '6-Phase Agentic Reasoning Loops',
            'Zod Schema Validation & Structured Output',
            'Polymorphic Sensor Telemetry (ESP32)',
            'Deterministic Fallback Engines',
            'Open-Meteo & Real-Time Weather APIs'
        ]
    },
    {
        color: 'darkblue',
        sticker: 'phone',
        title: 'web & frontend',
        services: [
            'Next.js 16 & React 19 App Router',
            'TypeScript & JavaScript (ES6+)',
            'Tailwind CSS & Vanilla CSS Variables',
            'Web Storage APIs (Zero-Latency UI)',
            'Event-Driven Form Validation Pipelines',
            'REST APIs, JSON & DOM Architecture'
        ]
    },
    {
        color: 'orange',
        sticker: 'smiley',
        title: 'blockchain & web3',
        services: [
            'Decentralized Ledger Architecture',
            'Smart Contract Fundamentals (Python)',
            'Cryptographic Hashing & SHA Verification',
            'Tamper-Proof Credential Verification',
            'Direct Hash Audits (Zero Third-Party Delays)',
            'University Minting & Employer Verification'
        ]
    },
    {
        color: 'maroon',
        sticker: 'hand',
        title: 'research & simulation',
        services: [
            'Disaster Response Incident Ranking',
            'Weighted Priority Scoring & Greedy Assignment',
            '40-Run Synthetic Simulation (Cut TTFR 72%)',
            'Random Forest Severity Classifier (Scikit-Learn)',
            'GaN HEMTs for RF Systems (5G/6G & Radar)',
            'Semiconductor Benchmark (Si, SiC, GaAs, LDMOS)'
        ]
    },
    {
        color: 'pink',
        sticker: 'heart',
        title: 'academics & leadership',
        services: [
            'B.Tech CSE @ SIT Nagpur (Expected 2028)',
            'Event Lead: Flagship Summits (Enthusia 3.0 & 4.0)',
            'Internal Hackathons Lead (15+ Volunteers)',
            'Inter-College Contingents & Logistics',
            'Rapid 24-36h Hackathon Sprint Prototyping',
            'Agile Git Merges & Technical Demos'
        ]
    }
];

// ─── Wiggle Intensity Config ────────────────────────────────────────────────
export const WIGGLE_CONFIG = {
    logoTruus: 4,
    socials: 5,
    jobHeading: 1,
    googleMap: 1,
    email: 1,
    whatsapp: 1,
};

// ─── Animation Configurations ─────────────────────────────────────────────
export const ANIMATION_CONFIG = {
    transitionScribble: {
        strokeWidthStart: "8%",
        strokeWidthMax: "31%",
        scale: 0.7,
        durationIn: 2.2,
        durationOut: 2.7
    }
};
