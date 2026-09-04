import React from 'react';

interface OkiroCustomWordmarkProps {
  color?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  includeFirstO?: boolean; // If false, renders only KIRO (when paired with separate Mark)
}

export const OkiroCustomWordmark: React.FC<OkiroCustomWordmarkProps> = ({
  color = '#DE623E', // Requested Orange color
  className = '',
  size = 'md',
  includeFirstO = true,
}) => {
  // Height sizing presets
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8 sm:h-9',
    lg: 'h-11 sm:h-12',
    xl: 'h-16 sm:h-20',
    custom: '',
  };

  // If full wordmark with first 'O': viewBox "0 0 380 100"
  // If without first 'O' (KIRO): viewBox "90 0 290 100"
  const viewBox = includeFirstO ? '0 0 380 100' : '88 0 292 100';

  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-colors duration-300 ${sizeClasses[size]} ${className}`}
      aria-label="OKIRO"
    >
      <defs>
        {/* Mask for First Letter O with Aperture */}
        <mask id="okiro-wordmark-o1-mask">
          <rect width="380" height="100" fill="white" />
          <rect x="14" y="14" width="46" height="72" rx="10" ry="10" fill="black" />
        </mask>

        {/* Mask for Last Letter O with Aperture */}
        <mask id="okiro-wordmark-o2-mask">
          <rect width="380" height="100" fill="white" />
          <rect x="312" y="14" width="46" height="72" rx="10" ry="10" fill="black" />
        </mask>

        {/* Mask for Letter R Upper Loop */}
        <mask id="okiro-wordmark-r-mask">
          <rect width="380" height="100" fill="white" />
          <path
            d="M 234 14 H 252 C 260 14 266 18 266 26 C 266 34 260 38 252 38 H 234 V 14 Z"
            fill="black"
          />
        </mask>
      </defs>

      {/* ================= LETTER 1: 'O' (with Sunrise Mark) ================= */}
      {includeFirstO && (
        <g id="glyph-O1">
          {/* Outer Squircle */}
          <rect
            x="0"
            y="0"
            width="74"
            height="100"
            rx="22"
            ry="22"
            fill={color}
            mask="url(#okiro-wordmark-o1-mask)"
          />
          {/* Center Semi-Circle / Rising Sun */}
          <path
            d="M 24 57 A 13 13 0 0 1 50 57 Z"
            fill={color}
          />
        </g>
      )}

      {/* ================= LETTER 2: 'K' ================= */}
      <g id="glyph-K">
        {/* Left vertical stem */}
        <rect x="96" y="0" width="14" height="100" fill={color} />

        {/* Distinctive left crossbar extension at middle height (from reference photo) */}
        <rect x="86" y="44" width="10" height="12" fill={color} />

        {/* Upper diagonal arm */}
        <polygon
          points="110,48 136,0 152,0 122,54 110,54"
          fill={color}
        />

        {/* Lower leg curving gracefully outward to the baseline */}
        <path
          d="M 110 44
             L 124 44
             C 132 64, 138 84, 152 98
             L 152 100
             L 134 100
             C 122 84, 116 66, 110 44
             Z"
          fill={color}
        />
      </g>

      {/* ================= LETTER 3: 'I' ================= */}
      <g id="glyph-I">
        {/* Clean solid vertical bar matching stroke width */}
        <rect x="176" y="0" width="14" height="100" fill={color} />
      </g>

      {/* ================= LETTER 4: 'R' ================= */}
      <g id="glyph-R">
        {/* Left vertical stem */}
        <rect x="220" y="0" width="14" height="100" fill={color} />

        {/* Upper loop outer & masked */}
        <path
          d="M 220 0
             H 254
             C 269 0, 278 8, 278 26
             C 278 44, 269 52, 254 52
             H 220
             V 0 Z"
          fill={color}
          mask="url(#okiro-wordmark-r-mask)"
        />

        {/* Lower leg curving gracefully outward to the baseline */}
        <path
          d="M 238 46
             L 252 46
             C 258 64, 264 84, 278 98
             L 278 100
             L 260 100
             C 248 84, 242 66, 238 46
             Z"
          fill={color}
        />
      </g>

      {/* ================= LETTER 5: 'O' (Hollow Squircle) ================= */}
      <g id="glyph-O2">
        <rect
          x="298"
          y="0"
          width="74"
          height="100"
          rx="22"
          ry="22"
          fill={color}
          mask="url(#okiro-wordmark-o2-mask)"
        />
      </g>
    </svg>
  );
};
