import { PDFDocument, StandardFonts, rgb, PDFFont, PDFPage } from "pdf-lib";
import { RESUME_DATA } from "@/data/resume";

export const dynamic = "force-static";

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const MARGIN = 56;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const HEADER_SIZE = 20;
const SECTION_SIZE = 11;
const BODY_SIZE = 9;
const META_SIZE = 8;

const ORANGE = rgb(0.917, 0.361, 0.047);
const INK = rgb(0.094, 0.094, 0.106);
const MUTED = rgb(0.42, 0.42, 0.46);
const LINE = rgb(0.85, 0.85, 0.87);

class ResumeCanvas {
  doc: PDFDocument;
  font: PDFFont;
  bold: PDFFont;
  mono: PDFFont;
  page: PDFPage;
  y: number;

  constructor(doc: PDFDocument, font: PDFFont, bold: PDFFont) {
    this.doc = doc;
    this.font = font;
    this.bold = bold;
    this.mono = font;
    this.page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    this.y = PAGE_HEIGHT - MARGIN;
  }

  ensureRoom(needed: number) {
    if (this.y - needed < MARGIN) this.newPage();
  }

  private newPage() {
    this.page = this.doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    this.y = PAGE_HEIGHT - MARGIN;
  }

  wrapText(text: string, size: number, maxWidth: number): string[] {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let current = "";
    for (const word of words) {
      const test = current ? `${current} ${word}` : word;
      if (this.font.widthOfTextAtSize(test, size) <= maxWidth) {
        current = test;
      } else {
        if (current) lines.push(current);
        current = word;
      }
    }
    if (current) lines.push(current);
    return lines;
  }

  text(text: string, { size, x, bold, color, lineGap }:{ size: number; x?: number; bold?: boolean; color?: ReturnType<typeof rgb>; lineGap?: number } = { size: BODY_SIZE, x: MARGIN, bold: false, color: INK, lineGap: 0 }) {
    const font = bold ? this.bold : this.font;
    this.page.drawText(text, { x: x ?? MARGIN, y: this.y, size, font, color: color ?? INK });
    this.y -= size * 1.25 + (lineGap ?? 0);
  }

  paragraph(text: string, size = BODY_SIZE, color: ReturnType<typeof rgb> = INK) {
    const lines = this.wrapText(text, size, CONTENT_WIDTH);
    for (const line of lines) {
      this.text(line, { size, color });
    }
    this.y -= 4;
  }

  listItem(text: string) {
    const lines = this.wrapText(text, BODY_SIZE, CONTENT_WIDTH - 12);
    lines.forEach((line, i) => {
      this.text(line, { size: BODY_SIZE, x: i === 0 ? MARGIN + 10 : MARGIN + 10, color: INK });
      if (i === 0) {
        this.page.drawText("•", { x: MARGIN, y: this.y + BODY_SIZE, size: BODY_SIZE, font: this.font, color: ORANGE });
      }
    });
    this.y -= 2;
  }

  bulletRow(text: string) {
    const lines = this.wrapText(text, BODY_SIZE, CONTENT_WIDTH - 12);
    lines.forEach((line, i) => {
      this.text(line, { size: BODY_SIZE, x: MARGIN + 10, color: INK });
      if (i === 0) {
        this.page.drawText("•", { x: MARGIN + 1, y: this.y + BODY_SIZE, size: BODY_SIZE, font: this.font, color: MUTED });
      }
    });
    this.y -= 2;
  }

  spacer(amount: number) {
    this.ensureRoom(amount);
    this.y -= amount;
  }

  sectionTitle(title: string) {
    this.ensureRoom(30);
    this.y -= 8;
    this.text(title.toUpperCase(), { size: SECTION_SIZE, bold: true, color: ORANGE });
    this.page.drawLine({ start: { x: MARGIN, y: this.y + 3 }, end: { x: PAGE_WIDTH - MARGIN, y: this.y + 3 }, thickness: 0.8, color: LINE });
    this.y -= 6;
  }
}

export async function GET() {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);

  const c = new ResumeCanvas(doc, font, bold);

  // Header
  c.text(RESUME_DATA.name.toUpperCase(), { size: HEADER_SIZE, bold: true });
  c.text(RESUME_DATA.title, { size: 11, color: ORANGE });
  const contactLine = [
    RESUME_DATA.location,
    RESUME_DATA.contact.email,
    RESUME_DATA.contact.phone,
    RESUME_DATA.contact.behance,
    RESUME_DATA.contact.github,
    RESUME_DATA.contact.linkedin,
    RESUME_DATA.contact.portfolio,
  ].join("  •  ");
  c.paragraph(contactLine, META_SIZE, MUTED);
  c.spacer(4);

  // Summary
  c.sectionTitle("Professional Summary");
  c.paragraph(RESUME_DATA.summary);
  c.spacer(6);

  // Skills
  c.sectionTitle("Core Competencies");
  for (const group of RESUME_DATA.skills) {
    c.text(group.category, { size: BODY_SIZE, bold: true });
    c.paragraph(group.items.join(", "), BODY_SIZE, MUTED);
  }
  c.spacer(2);

  // Experience
  c.sectionTitle("Experience");
  for (const job of RESUME_DATA.experience) {
    c.ensureRoom(40);
    c.text(job.role, { size: BODY_SIZE + 1, bold: true });
    c.text(
      [job.company, job.type, job.location].filter(Boolean).join("  •  "),
      { size: META_SIZE, color: MUTED }
    );
    c.text(job.period, { size: META_SIZE, color: ORANGE });
    for (const achievement of job.achievements) c.listItem(achievement);
    c.spacer(6);
  }
  c.spacer(2);

  // Certifications
  if (RESUME_DATA.certifications && RESUME_DATA.certifications.length > 0) {
    c.sectionTitle("Certifications");
    for (const cert of RESUME_DATA.certifications) {
      c.text(cert.title, { size: BODY_SIZE, bold: true });
      c.text(`${cert.issuer} — ${cert.year}`, { size: META_SIZE, color: MUTED });
    }
    c.spacer(2);
  }

  // Education
  c.sectionTitle("Education");
  for (const edu of RESUME_DATA.education) {
    c.text(edu.degree, { size: BODY_SIZE, bold: true });
    c.text(`${edu.institution}${edu.location ? `, ${edu.location}` : ""}  •  ${edu.period}`, { size: META_SIZE, color: MUTED });
    if (edu.details) c.paragraph(edu.details, META_SIZE, MUTED);
    c.spacer(4);
  }

  const bytes = await doc.save();

  return new Response(bytes as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${RESUME_DATA.name.replace(/\s+/g, "-")}-Resume.pdf"`,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}