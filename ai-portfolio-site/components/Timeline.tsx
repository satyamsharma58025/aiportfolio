import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

interface TimelineEntry {
  type: 'Experience' | 'Education';
  title: string;
  institution: string;
  date: string;
  description: string;
  skills?: string[];
  location?: string;
}

const placeholder: TimelineEntry[] = [
  {
    type: 'Experience',
    title: 'Senior Software Engineer',
    institution: 'Tech Company',
    date: '2020 - Present',
    description: 'Led development of key features and mentored junior developers.',
    location: 'San Francisco, CA',
    skills: ['React', 'Node.js', 'AWS']
  },
  {
    type: 'Education',
    title: 'Master of Computer Science',
    institution: 'University',
    date: '2018 - 2020',
    description: 'Focused on machine learning and distributed systems.',
    location: 'Boston, MA'
  }
];

export default function Timeline() {
  const [entries, setEntries] = useState<TimelineEntry[]>(placeholder);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTimelineData() {
      try {
        const response = await fetch('/api/parse-resume');
        const data = await response.json();
        if (data.experience || data.education) {
          const combinedEntries = [
            ...(data.experience || []),
            ...(data.education || [])
          ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          setEntries(combinedEntries);
        }
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTimelineData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
      >
        Experience & Education
      </motion.h2>

      <VerticalTimeline>
        {entries.map((entry, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{
              background: entry.type === 'Experience' ? '#ffffff' : '#f3f4f6',
              color: '#1f2937',
              boxShadow: '0 3px 10px rgb(0 0 0 / 0.1)',
              padding: '2rem'
            }}
            contentArrowStyle={{
              borderRight: entry.type === 'Experience' 
                ? '7px solid #ffffff'
                : '7px solid #f3f4f6'
            }}
            date={entry.date}
            iconStyle={{
              background: entry.type === 'Experience' ? '#3b82f6' : '#10b981',
              color: '#ffffff'
            }}
            icon={
              entry.type === 'Experience' 
                ? <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                : <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
            }
          >
            <div className="font-semibold text-xl mb-1">{entry.title}</div>
            <div className="font-medium text-gray-600 mb-2">{entry.institution}</div>
            {entry.location && (
              <div className="text-sm text-gray-500 mb-3">
                {entry.location}
              </div>
            )}
            <p className="text-gray-700">
              {entry.description}
            </p>
            {entry.skills && (
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.div>
  );
}