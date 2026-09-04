import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'icon';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  theme = 'light',
  size = 'md',
  className = '',
  showTagline = false,
}) => {
  // Height configurations
  const mascotDimensions = {
    sm: { w: 36, h: 36 },
    md: { w: 46, h: 46 },
    lg: { w: 56, h: 56 },
    xl: { w: 68, h: 68 },
  }[size];

  const textClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  }[size];

  const textColor = theme === 'dark' ? 'text-white' : 'text-slate-900';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Mascot Graphic */}
      <div
        className="relative shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
        style={{ width: mascotDimensions.w, height: mascotDimensions.h }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Blue Flag on Roof Peak */}
          <path d="M 50 6 L 50 24" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
          <path d="M 50 7 L 68 14 L 50 21 Z" fill="#1D4ED8" stroke="#111827" strokeWidth="2" strokeLinejoin="round" />

          {/* Red Triangle Roof */}
          <path d="M 12 50 L 50 20 L 88 50 Z" fill="#E53935" stroke="#111827" strokeWidth="4.5" strokeLinejoin="round" />

          {/* Yellow Bounce House Body */}
          <rect x="14" y="47" width="72" height="46" rx="12" fill="#FBC02D" stroke="#111827" strokeWidth="4.5" />

          {/* Left Eye (Blue iris with white glint) */}
          <circle cx="36" cy="67" r="9" fill="#FFFFFF" stroke="#111827" strokeWidth="3" />
          <circle cx="36" cy="67" r="5.2" fill="#2563EB" />
          <circle cx="36" cy="67" r="2.8" fill="#111827" />
          <circle cx="34.5" cy="65.2" r="1.3" fill="#FFFFFF" />

          {/* Right Eye (Playful circle / wink eye) */}
          <circle cx="64" cy="67" r="9" fill="#FFFFFF" stroke="#111827" strokeWidth="3" />
          <circle cx="64" cy="67" r="5.2" fill="#FBC02D" />
          <circle cx="64" cy="67" r="2.8" fill="#111827" />
          <circle cx="62.5" cy="65.2" r="1.3" fill="#FFFFFF" />

          {/* Smiling Mouth */}
          <path d="M 35 81 Q 50 90 65 81" stroke="#111827" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* Typography: Events & Rentals */}
      {variant === 'full' && (
        <div className="flex flex-col justify-center">
          <div className="relative flex items-center">
            <span
              className={`font-black font-display tracking-tight leading-none ${textClasses} ${textColor} transition-colors`}
            >
              Events &amp; Rent<span className="relative inline-block">
                als
                {/* Playful Floating Balloons/Bubbles over "als" */}
                <span className="absolute -top-3 sm:-top-4 -right-1 flex items-center pointer-events-none">
                  {/* Red Balloon */}
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-xs animate-bounce-slow" />
                  {/* Yellow Balloon */}
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 -ml-1 -mt-1 shadow-xs" />
                  {/* Blue Balloon */}
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 -ml-0.5 mt-1 shadow-xs" />
                </span>
              </span>
            </span>
          </div>

          {showTagline && (
            <span
              className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider block mt-0.5 ${
                theme === 'dark' ? 'text-amber-300' : 'text-blue-600'
              }`}
            >
              Texas Kids' Party &amp; Event Equipment Rentals
            </span>
          )}
        </div>
      )}
    </div>
  );
};
