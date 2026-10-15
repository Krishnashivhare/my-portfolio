import type { Metadata } from "next";
import { Space_Grotesk, Inter, Caveat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krishna Shivhare — Computer Science Undergraduate & Developer",
  description:
    "Portfolio of Krishna Shivhare, Computer Science Engineering undergraduate at Symbiosis Institute of Technology, Nagpur (Class of 2028). Full-Stack & Blockchain Developer.",
  keywords: [
    "Krishna Shivhare",
    "Symbiosis Institute of Technology Nagpur",
    "SIT Nagpur",
    "Computer Science Engineer",
    "Full-Stack Developer",
    "Blockchain Developer",
    "Python Developer",
    "Web Development",
    "Decentralized Systems",
  ],
  authors: [{ name: "Krishna Shivhare" }],
  creator: "Krishna Shivhare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishnashivhare.dev",
    title: "Krishna Shivhare — Building Digital Experiences",
    description:
      "Computer Science Undergraduate · Full-Stack & Blockchain Developer at Symbiosis Institute of Technology, Nagpur.",
    siteName: "Krishna Shivhare Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Shivhare — Building Digital Experiences",
    description:
      "Computer Science Undergraduate · Full-Stack & Blockchain Developer at Symbiosis Institute of Technology, Nagpur.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable} dark scroll-smooth`}
    >
      <body
        className="bg-[#05070C] text-slate-100 font-sans antialiased selection:bg-indigo-600 selection:text-white min-h-screen flex flex-col"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
