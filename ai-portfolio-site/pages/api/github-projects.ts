import type { NextApiRequest, NextApiResponse } from 'next';

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  topics: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const username = process.env.GITHUB_USERNAME || 'satyamsharma';
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('GitHub API error');
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter and transform the data
    const projects = repos
      .filter(repo => !repo.topics?.includes('archived'))
      .map(repo => ({
        title: repo.name,
        description: repo.description || '',
        tech: [repo.language, ...(repo.topics || [])].filter(Boolean),
        github: repo.html_url,
        stars: repo.stargazers_count,
      }))
      .slice(0, 6); // Get only the top 6 most recent projects

    res.status(200).json(projects);
  } catch (error) {
    console.error('GitHub API error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}