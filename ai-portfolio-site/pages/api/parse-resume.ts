import type { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';
import pdf from 'pdf-parse';
import { extractResumeData } from '../../utils/extractResumeData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Read the resume PDF file
    const pdfPath = join(process.cwd(), 'public', 'resume.pdf');
    const dataBuffer = readFileSync(pdfPath);

    // Parse the PDF content
    const data = await pdf(dataBuffer);

    // Extract structured data from the PDF text
    const resumeData = extractResumeData(data.text);

    res.status(200).json(resumeData);
  } catch (error) {
    console.error('Resume parsing error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}