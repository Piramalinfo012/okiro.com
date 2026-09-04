import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceCard3DProps {
  item: ExperienceItem;
  index: number;
  onCardClick?: () => void;
}

export const ExperienceCard3D: React.FC<ExperienceCard3DProps> = ({ item, index, onCardClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation between -12deg and +12deg for realistic depth
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    // Glare position in percentage
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTransform({
      rotateX: Number(rotateX.toFixed(2)),
      rotateY: Number(rotateY.toFixed(2)),
      glareX: Number(glareX.toFixed(1)),
      glareY: Number(glareY.toFixed(1)),
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
    });
  };

  // Dynamic 3D shadows that shift opposite to card tilt
  const shadowX = -transform.rotateY * 2.2;
  const shadowY = transform.rotateX * 2.2 + 24;
  const hasActiveMouse = isHovered && (transform.rotateX !== 0 || transform.rotateY !== 0);

  // Dynamic directional light angle derived from card 3D rotation
  const effectiveRotateX = hasActiveMouse ? transform.rotateX : isHovered ? -6 : 0;
  const effectiveRotateY = hasActiveMouse ? transform.rotateY : isHovered ? 12 : 0;
  const lightAngle = Math.round(
    ((Math.atan2(effectiveRotateY, -effectiveRotateX) * 180) / Math.PI + 360 + 135) % 360
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group flex-shrink-0 w-[300px] sm:w-[370px] md:w-[420px] snap-start cursor-pointer select-none perspective-1000 [perspective:1000px]"
      style={{ perspective: 1000 }}
      onClick={onCardClick}
    >
      {/* 3D Transform Stage Card with preserve-3d, backface-hidden, rotate-y-12, rotate-x-6 */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden transition-all duration-500 ease-out preserve-3d [transform-style:preserve-3d] backface-hidden [backface-visibility:hidden] group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:scale-[1.025]"
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          ...(hasActiveMouse
            ? {
                transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(1.025, 1.025, 1.025) translateZ(15px)`,
                transitionDuration: '90ms',
              }
            : {}),
          boxShadow: isHovered
            ? `${shadowX || 0}px ${shadowY || 20}px 45px rgba(0, 0, 0, 0.75), 0 0 35px rgba(221, 100, 62, 0.28)`
            : '0 20px 35px rgba(0, 0, 0, 0.45), 0 0 1px rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Layer 0: Background Image with 3D Parallax */}
        <div
          className="absolute inset-0 w-full h-full bg-[#1e1b18] backface-hidden [backface-visibility:hidden]"
          style={{
            transform: 'translateZ(0px) scale(1.06)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.06] transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Deep Cinematic Gradients for Rich Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#12100e] via-[#171513]/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-80" />
        </div>

        {/* 3D Card Edge Highlight & Bevel Rim */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none border border-white/20 group-hover:border-[#DD643E]/60 transition-colors duration-500"
          style={{
            transform: 'translateZ(18px)',
          }}
        />

        {/* Dynamic Directional Light CSS Linear-Gradient Overlay (Shifts angle with card 3D rotation) */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            transform: 'translateZ(24px)',
            background: `linear-gradient(${lightAngle}deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.08) 28%, transparent 58%, rgba(0, 0, 0, 0.42) 100%)`,
            mixBlendMode: 'overlay',
            opacity: isHovered ? 0.95 : 0.4,
            willChange: 'background, opacity',
          }}
        />

        {/* Layer 1: Floating Header Tag & 3D Number Badge */}
        <div
          className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none"
          style={{
            transform: 'translateZ(38px)',
            transformStyle: 'preserve-3d',
            transition: 'transform 500ms ease-out',
          }}
        >
          {/* Tag Pill with frosted glass */}
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-[#FFFDF8] bg-black/60 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/20 font-medium shadow-md">
            {item.tag}
          </span>

          {/* Index Pill with Okiro Brand Orange */}
          <span className="text-[10px] font-mono tracking-widest text-[#DD643E] bg-[#DD643E]/20 backdrop-blur-xl px-3 py-1 rounded-full border border-[#DD643E]/40 font-bold shadow-sm">
            0{index + 1}
          </span>
        </div>

        {/* Layer 2: Floating Foreground Content (Subtitle, Cormorant Heading, Description) */}
        <div
          className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end pointer-events-none"
          style={{
            transform: 'translateZ(52px)',
            transformStyle: 'preserve-3d',
            transition: 'transform 500ms ease-out',
          }}
        >
          {/* Subtitle */}
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-[#DD643E] font-semibold block mb-1.5 drop-shadow">
            {item.subtitle}
          </span>

          {/* Cormorant Garamond Luxury Heading */}
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl text-[#FFFDF8] mb-2.5 drop-shadow-md font-semibold tracking-[0.015em] leading-[1.12]"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#EDE4D2]/90 font-light leading-relaxed line-clamp-3 mb-4 drop-shadow">
            {item.description}
          </p>

          {/* 3D Action Row: Expanding Accent Bar + Subtle Interactive Prompt */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <div className="h-[2.5px] bg-[#DD643E] rounded-full transition-all duration-500 ease-out w-8 group-hover:w-16 shadow-[0_0_8px_rgba(221,100,62,0.8)]" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#DD643E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                Explore
              </span>
            </div>

            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#DD643E] border border-white/20 group-hover:border-[#DD643E] flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45 shadow-md">
              <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.2} />
            </div>
          </div>
        </div>

        {/* Layer 3: Dynamic 3D Specular Sheen / Light Glare Overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300"
          style={{
            transform: 'translateZ(60px)',
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle 380px at ${transform.glareX}% ${transform.glareY}%, rgba(255, 255, 255, 0.28) 0%, rgba(221, 100, 62, 0.16) 28%, transparent 72%)`,
            mixBlendMode: 'overlay',
          }}
        />
      </div>
    </motion.div>
  );
};
