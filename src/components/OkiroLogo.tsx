import React from 'react';
import { OkiroCustomWordmark } from './OkiroCustomWordmark';

interface OkiroLogoProps {
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark-only' | 'badge';
}

export const OkiroLogo: React.FC<OkiroLogoProps> = ({
  theme = 'light',
  className = '',
  showSubtitle = true,
  size = 'md',
  variant = 'full',
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#F9F1DA' : '#171513';
  const subtextColor = isDark ? '#EDE4D2' : '#5A524C';
  const orangeColor = '#DE623E'; // Exact burnt orange from uploaded brand reference
  const creamBg = '#F8F3E5'; // Exact warm cream from uploaded brand reference

  const heightClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
    xl: 'h-24',
  };

  // The Exact Okiro Mark from the uploaded image
  const MarkSvg = ({ markClassName = '' }: { markClassName?: string }) => (
    <svg
      viewBox="0 0 160 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${markClassName}`}
      aria-hidden="true"
    >
      <defs>
        <mask id="okiro-exact-mask">
          <rect width="160" height="190" fill="white" />
          <rect x="46" y="46" width="68" height="98" rx="22" ry="22" fill="black" />
        </mask>
      </defs>
      {/* Outer rounded squircle in official Burnt Orange */}
      <rect
        x="15"
        y="15"
        width="130"
        height="160"
        rx="46"
        ry="46"
        fill={orangeColor}
        mask="url(#okiro-exact-mask)"
      />
      {/* Center rising sun / coffee dawn semi-circle */}
      <path d="M 58 96 A 22 22 0 0 1 102 96 Z" fill={orangeColor} />
    </svg>
  );

  // Standalone square badge matching the exact uploaded image
  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center justify-center bg-[#F8F3E5] rounded-xl p-3 shadow-md border border-[#EDE4D2] select-none ${className}`}
      >
        <MarkSvg markClassName={`${heightClasses[size]} w-auto`} />
      </div>
    );
  }

  // Standalone mark without text
  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <MarkSvg markClassName={`${heightClasses[size]} w-auto`} />
      </div>
    );
  }

  // Full Wordmark with custom font matching user photo (O K I R O in single lockup)
  return (
    <div className={`flex flex-col justify-center select-none ${className}`}>
      <div className="flex items-center">
        <OkiroCustomWordmark
          color={orangeColor}
          size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : size === 'xl' ? 'xl' : 'md'}
          includeFirstO={true}
        />
      </div>

      {showSubtitle && (
        <span
          className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-medium mt-1 leading-tight font-sans"
          style={{ color: subtextColor }}
        >
          Coffee Roasters · Raipur
        </span>
      )}
    </div>
  );
};
