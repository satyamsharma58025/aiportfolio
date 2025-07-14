import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

const placeholder: SkillCategory[] = [
  {
    category: 'AI/ML',
    skills: [
      { name: 'TensorFlow', level: 8 },
      { name: 'PyTorch', level: 7 },
      { name: 'Scikit-learn', level: 8 },
      { name: 'LangChain', level: 6 },
    ],
  },
  {
    category: 'Web Dev',
    skills: [
      { name: 'React', level: 9 },
      { name: 'Next.js', level: 8 },
      { name: 'Tailwind CSS', level: 8 },
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', level: 9 },
      { name: 'Python', level: 8 },
      { name: 'TypeScript', level: 7 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 9 },
      { name: 'Docker', level: 7 },
      { name: 'Linux', level: 8 },
    ],
  },
];

function flattenSkills(categories: SkillCategory[]) {
  return categories.flatMap(cat => cat.skills.map(skill => ({ ...skill, category: cat.category })));
}

const SkillRadar: React.FC = () => {
  const [skills, setSkills] = useState(flattenSkills(placeholder));
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const formatData = (skillData: { name: string; level: number }[]) => {
    return skillData.map(skill => ({
      subject: skill.name,
      A: skill.level,
      fullMark: 100,
    }));
  };

  useEffect(() => {
    fetch('/api/parse-resume')
      .then(res => res.json())
      .then(data => {
        // Parse and categorize skills from resume
        // For now, use placeholder
        setSkills(flattenSkills(placeholder));
      })
      .catch(() => setSkills(flattenSkills(placeholder)));
  }, []);

  return (
    <section id="skills" className="py-12 px-6 md:px-16 bg-gray-900 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
      >
        Skill Radar
      </motion.h2>
      <div className="w-full max-w-2xl h-96">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formatData(skills)}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" stroke="#fff" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#fff" />
            <Radar name="Skills" dataKey="A" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {placeholder.map((cat, index) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 rounded-lg p-4 shadow"
          >
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">{cat.category}</h3>
            <ul className="text-gray-200">
              {cat.skills.map(skill => (
                <li key={skill.name} className="flex justify-between py-1">
                  <span>{skill.name}</span>
                  <span className="font-mono text-yellow-400">{skill.level}/10</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 text-center text-gray-600 dark:text-gray-400"
      >
        <p className="text-sm">
          * Skill levels are based on relative experience and proficiency
        </p>
      </motion.div>
    </section>
  );
};

export default SkillRadar;