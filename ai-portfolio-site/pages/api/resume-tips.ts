import type { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';
import pdf from 'pdf-parse';

interface ResumeTip {
  section: string;
  suggestions: string[];
}

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
    const data = await pdf(dataBuffer);

    // Analyze resume content and provide tips
    const tips: ResumeTip[] = [
      {
        section: 'Summary',
        suggestions: [
          'Consider adding quantifiable achievements',
          'Highlight your unique value proposition',
          'Keep it concise and impactful'
        ]
      },
      {
        section: 'Experience',
        suggestions: [
          'Use action verbs to start bullet points',
          'Include metrics and specific results',
          'Focus on achievements rather than duties'
        ]
      },
      {
        section: 'Skills',
        suggestions: [
          'Group skills by category',
          'Prioritize relevant technical skills',
          'Include both hard and soft skills'
        ]
      }
    ];

    // TODO: Implement more sophisticated resume analysis
    // This could include:
    // - Keyword analysis for industry relevance
    // - Structure and formatting suggestions
    // - Content optimization recommendations

    res.status(200).json(tips);
  } catch (error) {
    console.error('Resume tips error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}