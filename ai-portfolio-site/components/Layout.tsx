import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import { Section } from './ui';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark text-gray-900 dark:text-white">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="py-8 text-center text-gray-600 dark:text-gray-400"
      >
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Satyam Sharma. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}
