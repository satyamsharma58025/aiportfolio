import React from 'react';

interface TeachingContent {
  title: string;
  platform: string;
  students: number;
  description: string;
  link: string;
}

export default function TeachingContent() {
  const teachings: TeachingContent[] = [
    {
      title: "Web Development Fundamentals",
      platform: "Udemy",
      students: 500,
      description: "A comprehensive course covering HTML, CSS, JavaScript, and React fundamentals for beginners.",
      link: "#"
    },
    {
      title: "Machine Learning Basics",
      platform: "Coursera",
      students: 300,
      description: "Introduction to machine learning concepts, algorithms, and practical applications using Python.",
      link: "#"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Teaching & Content Creation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teachings.map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">Platform: {item.platform}</p>
              <p className="text-primary font-medium mb-2">{item.students} Students</p>
              <p className="text-gray-500 mb-4">{item.description}</p>
              <a 
                href={item.link}
                className="text-primary hover:text-primary/80 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Course →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}