import React from 'react';

export interface NexusLogoProps {
  className?: string;
  size?: number;
}

export function NexusLogo({ className = 'w-4 h-4 text-[#3ecf8e]', size }: NexusLogoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Isometric Hexagon Container */}
      <path
        d="M12 2L21.5 7.5V16.5L12 22L2.5 16.5V7.5L12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 3D Inner Coordinate Spokes */}
      <path
        d="M12 22V12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 7.5L12 12L2.5 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central Mesh Pulse Core */}
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </svg>
  );
}
