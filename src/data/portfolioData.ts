export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techTags: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  category: "Blockchain" | "Web Development";
}

export interface SkillGroup {
  title: string;
  skills: string[];
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Krishna Shivhare",
    firstName: "KRISHNA",
    lastName: "SHIVHARE",
    eyebrow: "HELLO, I'M KRISHNA",
    mainHeading: "Building digital",
    headingAccent: "experiences.",
    subtitle: "Computer Science Undergraduate · Full-Stack & Blockchain Developer",
    description:
      "I craft responsive web applications, Python-driven solutions, and decentralized systems to turn ideas into real-world impact.",
    aboutHeading: "Curious by nature. Building through code.",
    aboutBio1:
      "I am an undergraduate Computer Science Engineering student at Symbiosis Institute of Technology, Nagpur (Class of 2028). My interest lies at the intersection of modern frontend engineering, backend Python applications, and decentralized cryptographic architectures.",
    aboutBio2:
      "Whether I am developing responsive, state-synchronized web suites or implementing hash-based verification engines on distributed ledgers, I focus on clean code structure, architectural rigor, and meaningful user experiences.",
    institution: "Symbiosis Institute of Technology, Nagpur",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    graduationYear: "2028",
    location: "Nagpur, Maharashtra, India",
    email: "krishnashivhare.dev@gmail.com",
    github: "https://github.com/krishnashivhare",
    linkedin: "https://linkedin.com/in/krishnashivhare",
    resumeUrl: "/Krishna_Shivhare_Resume.pdf",
    statusBadge: "Available for Projects",
  },

  techStrip: [
    { name: "Python", category: "Core Backend" },
    { name: "JavaScript", category: "Client Logic" },
    { name: "React", category: "Modern UI" },
    { name: "Blockchain", category: "Decentralized" },
    { name: "SQL", category: "Relational DB" },
  ],

  projects: [
    {
      id: "academic-credential-verification",
      projectNumber: "PROJECT 01",
      title: "ACADEMIC CREDENTIAL VERIFICATION",
      tagline: "Decentralized Cryptographic Verification Engine",
      description:
        "A decentralized credential verification prototype designed to issue, store, and audit academic credentials using cryptographic hashing and immutable ledger principles.",
      features: [
        "Tamper-evident credential verification.",
        "Cryptographic hash-based validity checks.",
        "Academic credential issuance workflows.",
        "Simplified verification for employers and institutions.",
      ],
      techTags: ["Python", "Smart Contracts", "Cryptographic Hashing", "Blockchain"],
      githubUrl: "https://github.com/krishnashivhare/academic-credential-verification",
      liveUrl: "#demo-blockchain",
      image: "/project_blockchain.jpg",
      category: "Blockchain",
    },
    {
      id: "dynamic-web-application-suite",
      projectNumber: "PROJECT 02",
      title: "DYNAMIC WEB APPLICATION SUITE",
      tagline: "Client-Side Persistent State & Interface Utilities",
      description:
        "An interactive web application suite focused on persistent user preferences, responsive interfaces, and real-time form validation.",
      features: [
        "Persistent theme switching.",
        "LocalStorage and SessionStorage integration.",
        "Real-time form validation.",
        "Dynamic countdown utilities and DOM manipulation.",
      ],
      techTags: ["JavaScript", "HTML5", "CSS3", "Web Storage API"],
      githubUrl: "https://github.com/krishnashivhare/dynamic-web-suite",
      liveUrl: "#demo-suite",
      image: "/project_suite.jpg",
      category: "Web Development",
    },
  ],

  skills: [
    {
      title: "Programming",
      skills: ["Python", "JavaScript ES6+", "SQL"],
      description: "Core languages for algorithmic logic, scripting, and backend workflows.",
    },
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "DOM Manipulation",
        "Responsive Design",
        "JSON",
        "LocalStorage",
        "SessionStorage",
      ],
      description: "Modern, responsive client-side development with native browser APIs.",
    },
    {
      title: "Blockchain",
      skills: [
        "Blockchain Architecture",
        "Smart Contract Fundamentals",
        "Cryptographic Hashing",
        "Distributed Ledgers",
      ],
      description: "Decentralized consensus concepts, data integrity, and immutable state.",
    },
    {
      title: "Fundamentals and tools",
      skills: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Probability and Statistics",
        "Git",
        "GitHub",
        "VS Code",
      ],
      description: "Computer science foundations, mathematical rigor, and engineering toolchains.",
    },
  ],

  education: {
    institution: "Symbiosis Institute of Technology, Nagpur",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    graduation: "Expected graduation: 2028",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Probability and Statistics",
      "Web Technologies",
      "Database Systems",
    ],
  },

  beyondCode: [
    {
      title: "Technical Participant & Hackathon Contributor",
      institution: "Symbiosis Institute of Technology, Nagpur",
      description:
        "Actively collaborating in campus technical events, ideating solutions under time constraints, and building rapid prototypes with peer engineers.",
      badge: "Campus Collaboration",
    },
    {
      title: "Coding Challenges & Algorithmic Problem Solving",
      institution: "Online Platforms & Developer Contests",
      description:
        "Practicing algorithmic challenges to strengthen understanding of time complexity, data structures, recursion, and dynamic programming.",
      badge: "Problem Solving",
    },
    {
      title: "Collaborative Prototyping & Git-Based Workflows",
      institution: "Open Source & Peer Projects",
      description:
        "Adhering to disciplined version control practices, atomic commits, pull requests, and peer code reviews in collaborative team projects.",
      badge: "Engineering Rigor",
    },
    {
      title: "Continuous Learning in Web Technologies & Web3",
      institution: "Self-Directed Technical Research",
      description:
        "Consistently exploring modern JavaScript frameworks, cryptographic algorithms, distributed ledger protocols, and software design patterns.",
      badge: "Lifelong Learning",
    },
  ],
};
