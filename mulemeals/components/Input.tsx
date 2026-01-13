
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  type?: string;
  isSelect?: boolean;
  options?: string[];
}

const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  type = 'text', 
  isSelect = false, 
  options = [], 
  ...props 
}) => {
  const inputStyles = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-base bg-gray-50/50";

  return (
    <div className="flex flex-col gap-1.5 mb-5">
      <label className="text-sm font-semibold text-gray-700 px-1">{label}</label>
      
      {isSelect ? (
        <select 
          className={inputStyles} 
          {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
        >
          <option value="" disabled>Select an option</option>
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input 
          type={type} 
          className={inputStyles} 
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)} 
        />
      )}
      
      {error && <span className="text-xs text-red-500 px-1">{error}</span>}
    </div>
  );
};

export default Input;
