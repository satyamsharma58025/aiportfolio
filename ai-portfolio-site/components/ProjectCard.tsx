import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui';

export interface Project {
  title: string;
  tech: string[];
  github?: string;
  description: string;
  impact: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, tech, github, description, impact, image } = project;

  return (
    <Card className="group hover:scale-[1.02] transition-transform duration-300">
      {/* Project Image */}
      {image && (
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <motion.h3
          className="text-xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {title}
        </motion.h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Impact:</h4>
          <p className="text-gray-600 dark:text-gray-300">{impact}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, i) => (
            <motion.span
              key={item}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* GitHub Link */}
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
            whileHover={{ x: 4 }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </motion.a>
        )}
      </div>
    </Card>
  );
}