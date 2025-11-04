import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Backward: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M19 10H9V7L4 12L9 17V14H19V10Z" />
    </svg>
  );
};

export default Backward;