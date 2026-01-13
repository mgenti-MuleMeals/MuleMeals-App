
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = true, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-4 rounded-full font-bold text-lg transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:active:scale-100 shadow-md";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
