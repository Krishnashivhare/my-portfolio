# Krishna Shivhare — Personal Portfolio Website

A personal portfolio website for **Krishna Shivhare**, Computer Science Engineering undergraduate at **Symbiosis Institute of Technology, Nagpur** (Class of 2028).

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Key Highlights & Design Direction

- **Theme & Aesthetics:** Dark, minimal, futuristic, and premium. Matte black (`#0A0A0A`), charcoal panels (`#121212`), crisp white typography, and dual accents: **Electric Lime** (`#CCFF00`) and **Cyber Violet** (`#A855F7`).
- **Interactive Background:** High-performance HTML5 Canvas with interactive particle constellation and geometric grid reacting to cursor movements.
- **Accent Theme Switcher:** One-click instant accent switch between *Electric Lime* and *Cyber Violet* with persistent `localStorage` synchronization.
- **Flagship Projects with Interactive Simulators:**
  1. **Blockchain-Based Academic Credential Verification Engine:** Includes a live in-browser SHA-256 cryptographic hash generator using the browser's native Web Crypto API, demonstrating block hashing and tamper detection in real-time.
  2. **Dynamic Client-Side Application Suite:** Features live interactive countdown timers, regex-driven real-time event form validation, and `localStorage` preference inspectors.
- **Authentic Engineering Profile:** Strictly honest credentials and activities with no fabricated skill ratings or percentages.
- **Working Resume:**
  - Direct download of generated `Krishna_Shivhare_Resume.pdf`
  - Interactive in-browser resume preview modal with print support
  - Dedicated `/resume` route for clean printing and viewing
- **Client-Side Form Validation:** Real-time form checking with friendly demo mode disclosure and a direct 1-click fallback to launch the user's default email client (`mailto:`).

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── Krishna_Shivhare_Resume.pdf  # Generated printable CV
│   ├── favicon.svg                  # Custom KS monogram favicon
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css              # Custom properties, dark theme & glow utilities
│   │   ├── layout.tsx               # Google Fonts (Space Grotesk & Inter) + SEO Metadata
│   │   ├── page.tsx                 # Main portfolio page integrating all sections
│   │   └── resume/
│   │       └── page.tsx             # Dedicated printable resume view
│   ├── components/
│   │   ├── Navbar.tsx               # Sticky header, scrollspy, accent switcher, mobile drawer
│   │   ├── Hero.tsx                 # Bold typography, action buttons, specs ribbon
│   │   ├── HeroCanvas.tsx           # Interactive particle constellation canvas
│   │   ├── About.tsx                # Split bio, SIT Nagpur highlights, interactive terminal
│   │   ├── Skills.tsx               # Categorized skills, live search filter, verified badges
│   │   ├── Projects.tsx             # Featured projects + live SHA-256 blockchain verifier demo
│   │   ├── Education.tsx            # SIT Nagpur academic timeline & coursework chips
│   │   ├── BeyondCode.tsx           # Hackathons, problem-solving, collaboration activities
│   │   ├── Contact.tsx              # Contact info, copy-to-clipboard, validated demo form
│   │   ├── Footer.tsx               # Copyright, back-to-top control, quick links
│   │   ├── Icons.tsx                # Crisp custom SVG icons (Github, Linkedin)
│   │   └── ResumeModal.tsx          # Full-screen modal resume preview
│   └── data/
│       └── portfolioData.ts         # Centralized configuration file for all portfolio data
├── scripts/
│   └── generate_resume.js           # PDF resume generator script
├── package.json
└── README.md
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js**: v18.18+ or v20+ / v22+
- **npm** (or yarn / pnpm)

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ☁️ Deploying to Vercel (Free Deployment)

### Option A: Via GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Krishna Shivhare Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your `portfolio` repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **Deploy**. Your site will be live on a free `*.vercel.app` domain with automated SSL!

### Option B: Via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to deploy directly from your terminal.

---

## ⚙️ Customizing Information

All personal details, URLs, and projects are centralized in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts).

To update GitHub, LinkedIn, or Email:
```typescript
// src/data/portfolioData.ts
export const PORTFOLIO_DATA = {
  personal: {
    email: "your-email@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    // ...
  }
}
```

To regenerate the PDF resume after making changes:
```bash
node scripts/generate_resume.js
```

---

Designed & Built for **Krishna Shivhare** © 2026.
