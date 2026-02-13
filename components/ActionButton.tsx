
import React from 'react';

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  fullWidth?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'secondary', 
  disabled = false,
  fullWidth = true
}) => {
  const baseStyles = "py-4 px-8 rounded-none font-bold text-xl uppercase tracking-tighter transition-all active:scale-95 flex items-center justify-center gap-3";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 border-2 border-white",
    secondary: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  );
};

export default ActionButton;
