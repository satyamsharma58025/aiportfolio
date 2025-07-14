import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface Education {
  school: string;
  degree: string;
  date: string;
  description: string;
}

export default function EducationCerts() {
  const education: Education[] = [
    {
      school: "Sri Chaitanya Junior College",
      degree: "Intermediate (11th & 12th) - MPC",
      date: "2019-2021",
      description: "Completed intermediate education with focus on Mathematics, Physics, and Chemistry. Achieved excellent academic performance and participated in various competitive exams."
    },
    {
      school: "Indian Institute of Information Technology Ranchi",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      date: "2021-2025",
      description: "Pursuing B.Tech in Computer Science with focus on AI/ML, Web Development, and Software Engineering. Maintaining excellent academic record with active participation in technical projects and research."
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Education & Certifications</h2>
        <VerticalTimeline>
          {education.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              date={item.date}
              iconStyle={{ background: '#6366f1', color: '#fff' }}
              contentStyle={{ 
                background: '#fff',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                padding: '20px'
              }}
            >
              <h3 className="text-xl font-semibold">{item.school}</h3>
              <h4 className="text-lg text-gray-600">{item.degree}</h4>
              <p className="text-gray-500 mt-2">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}