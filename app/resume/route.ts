function escapePdfText(text: string) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function createPdf(lines: string[]) {
  const textStream = lines
    .map(
      (line, index) =>
        `BT /F1 ${index === 0 ? 24 : index === 1 ? 16 : 12} Tf 72 ${
          736 - index * 30
        } Td (${escapePdfText(line)}) Tj ET`,
    )
    .join("\n");

  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj",
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
    `5 0 obj << /Length ${textStream.length} >> stream
${textStream}
endstream endobj`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  for (const object of objects) {
    offsets.push(pdf.length);
    pdf += `${object}\n`;
  }

  const xrefOffset = pdf.length;
  pdf += `xref
0 ${objects.length + 1}
0000000000 65535 f 
`;

  for (const offset of offsets.slice(1)) {
    pdf += `${String(offset).padStart(10, "0")} 00000 n 
`;
  }

  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>
startxref
${xrefOffset}
%%EOF`;

  return new TextEncoder().encode(pdf);
}

export async function GET() {
  const pdf = createPdf([
    "Zarrar Palekar",
    "Frontend Architect and Next.js Developer",
    "Email: hello@zarrarpalekar.com",
    "Location: India",
    "Specialties: Next.js, TypeScript, Tailwind CSS, Conversion-focused interfaces",
    "Portfolio: https://zarrarpalekar.com",
    "Booking: https://calendly.com/zarrarpalekar/30min",
    "Note: Replace this generated placeholder with your final PDF resume when ready.",
  ]);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Zarrar-Palekar-Resume.pdf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
