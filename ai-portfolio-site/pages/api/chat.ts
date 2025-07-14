import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    // TODO: Implement AI chat integration
    // For now, return static responses
    const responses = {
      'Tell me about Satyam\'s AI experience':
        'Satyam has extensive experience in AI development, including building ML models and integrating AI features into web applications.',
      'What are Satyam\'s key skills?':
        'Satyam is proficient in React, Node.js, TypeScript, Python, and cloud technologies.',
      'default':
        'I can tell you about Satyam\'s experience, skills, and projects. What would you like to know?'
    };

    const response = responses[message as keyof typeof responses] || responses.default;

    res.status(200).json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}