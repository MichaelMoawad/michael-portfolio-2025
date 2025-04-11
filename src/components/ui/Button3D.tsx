import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import './Button3D.css';

interface Button3DProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'accent' | 'accentLight' | 'github' | 'linkedin' | 'email';
}

const Button3D = forwardRef<HTMLButtonElement | HTMLAnchorElement, Button3DProps>(({
  children,
  onClick,
  href,
  className,
  size = 'md',
  type = 'button',
  disabled = false,
  variant = 'primary',
}, ref) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-600',
    accent: 'bg-[#FF4F9D]',
    accentLight: 'bg-[#D76D42]',
    github: 'bg-[#24292e]',
    linkedin: 'bg-[#0077B5]',
    email: 'bg-[#E26D5C]',
  };

  const buttonContent = (
    <span className={cn(
      'front',
      'flex items-center justify-center gap-2',
      'font-medium text-white',
      'transition-colors duration-200',
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className="pushable"
        data-variant={variant}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="shadow"></span>
        <span className="edge"></span>
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      className="pushable"
      data-variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="shadow"></span>
      <span className="edge"></span>
      {buttonContent}
    </button>
  );
});

Button3D.displayName = 'Button3D';

export default Button3D; 