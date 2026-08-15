import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'large';
  fullWidth?: boolean;
}

/**
 * Reusable Button component
 * Follows DRY principles and Tailwind best practices
 * 
 * @param variant - 'primary' (px-10, font-medium, #fff) or 'large' (px-12, font-semibold, #f6f6f6)
 * @param fullWidth - Optional full width button
 * @param children - Button text/content
 * @param ...props - All standard button HTML attributes (onClick, type, etc.)
 */
export default function Button({ 
  children, 
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = "py-4 bg-brand-navy rounded-full text-base leading-6 hover:bg-brand-navy-dark transition-all duration-300 shadow-md hover:shadow-lg";
  const variantClasses = variant === 'large' 
    ? 'px-12 font-semibold text-text-muted-light' 
    : 'px-10 font-medium text-white';
  const widthClasses = fullWidth ? 'w-full' : 'inline-flex';
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${widthClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
