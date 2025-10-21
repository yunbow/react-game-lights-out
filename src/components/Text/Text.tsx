import { ReactNode } from 'react';
import styles from './Text.module.css';

interface TextProps {
  children: ReactNode;
  variant?: 'h1' | 'p' | 'span';
  className?: string;
}

export const Text = ({ children, variant = 'p', className = '' }: TextProps) => {
  const Component = variant;

  return (
    <Component className={`${styles.text} ${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
};