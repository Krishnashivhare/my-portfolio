const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 40, left: 45, right: 45 }
});

const outputPath = path.join(__dirname, '..', 'public', 'Krishna_Shivhare_Resume_Updated.pdf');
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Colors
const PRIMARY = '#0f172a';
const SECONDARY = '#334155';
const ACCENT = '#0284c7';
const MUTED = '#64748b';
const LINE = '#e2e8f0';

// Header
doc.font('Helvetica-Bold').fontSize(24).fillColor(PRIMARY).text('Krishna :)SHIVHARE', { characterSpacing: 1 });
doc.font('Helvetica').fontSize(11).fillColor(ACCENT).text('Computer Science Engineer | Full-Stack Developer | Blockchain Enthusiast', { lineGap: 3 });
doc.fontSize(9).fillColor(MUTED).text('Symbiosis Institute of Technology, Nagpur | Class of 2028 | krishnashivhare.dev@gmail.com | github.com/krishnashivhare | linkedin.com/in/krishnashivhare', { lineGap: 12 });

// Divider
doc.strokeColor(LINE).lineWidth(1).moveTo(45, doc.y).lineTo(550, doc.y).stroke();
doc.moveDown(0.8);

function sectionTitle(title) {
  doc.moveDown(0.5);
  doc.font('Helvetica-Bold').fontSize(12).fillColor(PRIMARY).text(title.toUpperCase(), { lineGap: 3 });
  doc.strokeColor(ACCENT).lineWidth(1.5).moveTo(45, doc.y).lineTo(100, doc.y).stroke();
  doc.moveDown(0.5);
}

// Education
sectionTitle('Education');
doc.font('Helvetica-Bold').fontSize(10.5).fillColor(PRIMARY).text('Symbiosis Institute of Technology, Nagpur');
doc.font('Helvetica-Oblique').fontSize(9.5).fillColor(SECONDARY).text('Bachelor of Technology (B.Tech) - Computer Science and Engineering | Expected Graduation: 2028');
doc.font('Helvetica').fontSize(9).fillColor(MUTED).text('Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Probability & Statistics, Web Technologies, Database Systems', { lineGap: 6 });

// Technical Skills
sectionTitle('Technical Skills');
function skillRow(category, skills) {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(SECONDARY).text(category + ': ', { continued: true });
  doc.font('Helvetica').fontSize(9).fillColor(PRIMARY).text(skills);
}
skillRow('Programming', 'Python, JavaScript ES6+, SQL');
skillRow('Web Development', 'HTML5, CSS3, DOM Manipulation, Responsive Design, JSON, LocalStorage, SessionStorage, Form Validation');
skillRow('Blockchain', 'Blockchain Architecture, Smart Contract Fundamentals, Cryptographic Hashing, Distributed Ledgers');
skillRow('Core Concepts & Tools', 'Data Structures & Algorithms, Object-Oriented Programming, Probability & Statistics, Git, GitHub, VS Code');

// Featured Projects
sectionTitle('Featured Projects');

// Project 1
doc.font('Helvetica-Bold').fontSize(10).fillColor(PRIMARY).text('Blockchain-Based Academic Credential Verification Engine', { continued: true });
doc.font('Helvetica').fontSize(8.5).fillColor(ACCENT).text('  |  Python, Smart Contracts, Cryptographic Hashing, Web Integration');
doc.font('Helvetica').fontSize(8.5).fillColor(SECONDARY).text('A decentralized credential verification prototype designed to issue, store, and audit academic credentials using cryptographic hashing and immutable ledger principles.', { lineGap: 3 });
doc.font('Helvetica').fontSize(8.5).fillColor(MUTED).list([
  'Implemented tamper-evident academic credential verification mechanism with SHA-256 cryptographic hashing.',
  'Architected institutional administrative workflows for secure credential generation and issuance.',
  'Enabled rapid hash-based validity queries for employers and academic institutions without third-party reliance.'
], { bulletRadius: 2, textIndent: 12, lineGap: 2 });

doc.moveDown(0.4);

// Project 2
doc.font('Helvetica-Bold').fontSize(10).fillColor(PRIMARY).text('Dynamic Client-Side Application Suite', { continued: true });
doc.font('Helvetica').fontSize(8.5).fillColor(ACCENT).text('  |  JavaScript ES6+, HTML5, CSS3, Web Storage API');
doc.font('Helvetica').fontSize(8.5).fillColor(SECONDARY).text('An interactive web application suite focused on persistent user preferences, responsive interfaces, and real-time form validation.', { lineGap: 3 });
doc.font('Helvetica').fontSize(8.5).fillColor(MUTED).list([
  'Built persistent state management and dynamic theme switching utilizing LocalStorage and SessionStorage APIs.',
  'Implemented real-time event-driven form validation with immediate visual user feedback and error handling.',
  'Engineered dynamic timing and countdown utilities paired with clean, zero-dependency DOM manipulation.'
], { bulletRadius: 2, textIndent: 12, lineGap: 2 });

// Beyond the Code / Activities
sectionTitle('Beyond The Code & Activities');
doc.font('Helvetica').fontSize(8.5).fillColor(SECONDARY).list([
  'Technical Participant & Hackathon Contributor at Symbiosis Institute of Technology, Nagpur.',
  'Active participation in algorithmic coding challenges and student hackathons.',
  'Collaborative software prototyping and version control adhering to Git-based workflows.',
  'Continuous self-directed exploration in modern web technologies and decentralized system architectures.'
], { bulletRadius: 2, textIndent: 12, lineGap: 2 });

doc.end();

stream.on('finish', () => {
  console.log('Successfully generated Krishna_Shivhare_Resume_Updated.pdf at', outputPath);
});
