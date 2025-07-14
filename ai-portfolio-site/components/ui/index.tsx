import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${className}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  animate?: boolean;
}

export function Card({ children, className = '', glass = false, animate = true }: CardProps) {
  const Component = animate ? motion.div : 'div';
  return (
    <Component
      className={`${glass ? 'card-glass' : 'card'} ${className}`}
      {...(animate && {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
      })}
    >
      {children}
    </Component>
  );
}

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({ 
  children, 
  className = '', 
  variant = 'primary', 
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn-${variant} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  animate?: boolean;
}

export function Heading({ children, className = '', as = 'h2', animate = true }: HeadingProps) {
  const Component = animate ? motion[as] : as;
  return (
    <Component
      className={`${className}`}
      {...(animate && {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.1 }
      })}
    >
      {children}
    </Component>
  );
}

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 bg-clip-text text-transparent animate-gradient ${className}`}>
      {children}
    </span>
  );
}
