import './globals.css';

export const metadata = {
    title: 'Krishna :)Shivhare — Full-Stack, Agentic AI & Blockchain Developer',
    description: 'Portfolio of Krishna :)Shivhare, Computer Science undergraduate at Symbiosis Institute of Technology (SIT), Nagpur. Full-stack web engineering, agentic AI systems, typed tool-calling pipelines, and decentralized technologies.',
    icons: {
        icon: '/favicon.svg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
