import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Forward: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M5 10H15V7L20 12L15 17V14H5V10Z" />
    </svg>
  );
};

export default Forward;