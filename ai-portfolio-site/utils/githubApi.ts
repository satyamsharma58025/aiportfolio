interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  fork: boolean;
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }
    const repos: GitHubRepo[] = await response.json();
    return repos
      .filter(repo => !repo.fork) // Filter out forked repositories
      .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars
      .slice(0, 6); // Get top 6 repositories
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}