export interface ResumeExperience {
  title: string;
  company: string;
  date: string;
  description: string;
  skills?: string[];
  location?: string;
}

export interface ResumeEducation {
  title: string;
  institution: string;
  date: string;
  description: string;
  location?: string;
}

export interface ResumeSkill {
  category: string;
  items: string[];
}

export interface ResumeData {
  name: string;
  role: string;
  summary: string;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: ResumeSkill[];
}

export function extractResumeData(text: string): ResumeData {
  // Default data structure
  const resumeData: ResumeData = {
    name: 'Satyam Sharma',
    role: 'Full Stack Developer',
    summary: 'Passionate developer with expertise in building modern web applications using cutting-edge technologies.',
    experience: [
      {
        title: 'Senior Full Stack Developer',
        company: 'Tech Company',
        date: '2020 - Present',
        description: 'Led development of key features and mentored junior developers.',
        location: 'San Francisco, CA',
        skills: ['React', 'Node.js', 'TypeScript', 'AWS']
      }
    ],
    education: [
      {
        title: 'Master of Computer Science',
        institution: 'University',
        date: '2018 - 2020',
        description: 'Focused on machine learning and distributed systems.',
        location: 'Boston, MA'
      }
    ],
    skills: [
      {
        category: 'Frontend',
        items: ['React', 'TypeScript', 'Next.js', 'CSS', 'HTML']
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Python', 'SQL', 'MongoDB']
      },
      {
        category: 'DevOps & Tools',
        items: ['Git', 'AWS', 'Docker', 'CI/CD']
      }
    ]
  };

  try {
    // Extract name and role
    const nameMatch = text.match(/([A-Z][a-z]+ [A-Z][a-z]+)/);
    if (nameMatch) {
      resumeData.name = nameMatch[1];
    }

    // Extract role
    const roleMatch = text.match(/(?:Senior|Lead|Full Stack|Software|Frontend|Backend)\s+(?:Developer|Engineer|Architect)/i);
    if (roleMatch) {
      resumeData.role = roleMatch[0];
    }

    // Extract summary
    const summaryMatch = text.match(/(?:Summary|Profile|About)\s*(?:\:|\.|\n)(.*?)(?:\n\n|\n[A-Z])/is);
    if (summaryMatch) {
      resumeData.summary = summaryMatch[1].trim();
    }

    // More complex parsing would go here
    // This would involve:
    // - Parsing experience sections
    // - Parsing education sections
    // - Extracting skills and categorizing them
    
    return resumeData;
  } catch (error) {
    console.error('Error parsing resume text:', error);
    return resumeData;
  }
}