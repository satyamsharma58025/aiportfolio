import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Section, GradientText, Button } from './ui';

interface ResumeData {
  name: string;
  role: string;
  summary: string;
}

const placeholder: ResumeData = {
  name: 'Satyam Sharma',
  role: 'AI & Full Stack Developer',
  summary: 'Building intelligent systems and modern web applications with cutting-edge AI and cloud technologies.',
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  const [resumeData, setResumeData] = useState<ResumeData>(placeholder);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchResumeData() {
      try {
        const response = await fetch('/api/parse-resume');
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error('Error fetching resume data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchResumeData();
  }, []);

  return (
    <Section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent dark:from-primary-500/10" />
      
      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name and Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
            Hi, I'm <GradientText>{resumeData.name}</GradientText>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            {resumeData.role}
          </p>
        </motion.div>

        {/* Summary */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {resumeData.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button
            variant="primary"
            className="w-full sm:w-auto text-lg"
            onClick={() => window.location.href = '#projects'}
          >
            View Projects
          </Button>
          <Button
            variant="secondary"
            className="w-full sm:w-auto text-lg"
            onClick={() => window.location.href = '#contact'}
          >
            Get in Touch
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mx-auto"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      )}
    </Section>
  );
}