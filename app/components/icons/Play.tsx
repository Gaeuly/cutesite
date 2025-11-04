import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Play: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M 8 5 V 19 L 19 12 Z" />
    </svg>
  );
};

export default Play;