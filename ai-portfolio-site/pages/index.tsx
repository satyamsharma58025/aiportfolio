import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SkillRadar from '../components/SkillRadar';
import Timeline from '../components/Timeline';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import AIChatBot from '../components/AIChatBot';
import { Section } from '../components/ui';

interface Project {
  title: string;
  tech: string[];
  github?: string;
  description: string;
  impact: string;
  image?: string;
}

const sampleProjects: Project[] = [
  {
    title: 'AI-Powered Portfolio',
    description: 'Personal portfolio website with AI chat integration and dynamic content.',
    impact: 'Showcases technical skills and provides interactive experience for visitors.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'OpenAI'],
    github: 'https://github.com/yourusername/portfolio',
    image: '/project1.jpg'
  }
];

export default function Home() {
  const [projects] = useState<Project[]>(sampleProjects);

  return (
    <Layout>
      <Head>
        <title>Satyam Sharma | AI Developer Portfolio</title>
        <meta name="description" content="Personal portfolio of Satyam Sharma, showcasing AI/ML and full-stack development projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Section id="skills" className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-300">Proficiency in modern technologies and frameworks</p>
        </div>
        <SkillRadar />
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">A selection of my recent work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section id="experience" className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <p className="text-gray-600 dark:text-gray-300">My professional journey</p>
        </div>
        <Timeline />
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">Let's discuss your next project</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </Section>

      {/* AI Chat Bot */}
      <AIChatBot />
    </Layout>
  );
}
  