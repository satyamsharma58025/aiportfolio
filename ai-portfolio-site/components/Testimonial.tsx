import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

export default function Testimonial() {
  const testimonials: Testimonial[] = [
    {
      name: "John Doe",
      role: "Senior Developer",
      company: "Tech Corp",
      text: "Working with Satyam was an incredible experience. His technical skills and problem-solving abilities are outstanding.",
      image: "https://via.placeholder.com/100"
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      company: "Innovation Labs",
      text: "Satyam's dedication to quality and attention to detail made him a valuable asset to our team.",
      image: "https://via.placeholder.com/100"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}