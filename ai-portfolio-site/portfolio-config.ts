interface PortfolioConfig {
  owner: {
    name: string;
    role: string;
    email: string;
    github: string;
    linkedin: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  features: {
    aiChat: boolean;
    resumeScanner: boolean;
    githubStats: boolean;
    blog: boolean;
  };
}

const config: PortfolioConfig = {
  owner: {
    name: "Satyam Sharma",
    role: "Full Stack Developer",
    email: "satyamsharma58025@gmail.com",
    github: "https://github.com/satyamsharma58025",
    linkedin: "https://linkedin.com/in/satyamsharma",
  },
  seo: {
    title: "Satyam Sharma - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer with expertise in React, Node.js, and modern web technologies. View my projects and get in touch.",
    keywords: [
      "full stack developer",
      "react developer",
      "node.js developer",
      "typescript",
      "next.js",
      "web development",
      "software engineer",
    ],
  },
  features: {
    aiChat: true,
    resumeScanner: true,
    githubStats: true,
    blog: false,
  },
};

export default config;