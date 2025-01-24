import React from "react";
type ButtonProps = {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
};
const Button = ({ type, text, onClick, icon, className }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 ${className}`}
      onClick={() => onClick()}
    >
      {text}
      {icon && (
        <svg
          className="h-4 w-4 ml-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
