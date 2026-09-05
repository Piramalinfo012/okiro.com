import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { Instagram, Play, ArrowUpRight, Heart, Sparkles, Volume2, Eye } from 'lucide-react';

interface InstagramReelCard3DProps {
  reelUrl: string;
  embedUrl?: string;
  title?: string;
  caption?: string;
  likes?: string;
  views?: string;
}

export const InstagramReelCard3D: React.FC<InstagramReelCard3DProps> = ({
  reelUrl = 'https://www.instagram.com/reels/DYEmxCFjVC1/',
  embedUrl = 'https://www.instagram.com/reel/DYEmxCFjVC1/embed',
  title = 'A Day at O-Kiro Roastery',
  caption = 'Experience the rhythm, the craft, and the pour. Step into our sanctuary in Raipur.',
  likes = '4.2k',
  views = '28.5k',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
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

    // Rotation degrees between -10deg and +10deg for 3D depth
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTransform({
      rotateX: Number(rotateX.toFixed(2)),
      rotateY: Number(rotateY.toFixed(2)),
      glareX: Number(glareX.toFixed(1)),
      glareY: Number(glareY.toFixed(1)),
    });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  const shadowX = -transform.rotateY * 2.5;
  const shadowY = transform.rotateX * 2.5 + 24;
  const hasActiveMouse = isHovered && (transform.rotateX !== 0 || transform.rotateY !== 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[420px] mx-auto lg:max-w-none perspective-1000 [perspective:1000px] select-none"
      style={{ perspective: 1000 }}
    >
      {/* 3D Transform Device Stage */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full rounded-3xl overflow-hidden bg-[#171513] border border-white/20 transition-all duration-300 ease-out preserve-3d [transform-style:preserve-3d]"
        style={{
          transformStyle: 'preserve-3d',
          ...(hasActiveMouse
            ? {
                transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(1.02, 1.02, 1.02) translateZ(10px)`,
                transitionDuration: '90ms',
              }
            : {}),
          boxShadow: isHovered
            ? `${shadowX || 0}px ${shadowY || 20}px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(221, 100, 62, 0.35)`
            : '0 20px 40px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Top 3D Floating Pill */}
        <div
          className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none transition-transform duration-300"
          style={{ transform: isHovered ? 'translateZ(32px)' : 'translateZ(0px)' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#DD643E] animate-ping" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#F9F1DA]">
              3D Featured Reel
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs text-[#EDE4D2]">
            <Eye className="w-3 h-3 text-[#DD643E]" />
            <span className="text-[10px] font-mono">{views}</span>
          </div>
        </div>

        {/* Video / Reel Player Window (9:16 Aspect Ratio) */}
        <div className="relative aspect-[9/16] sm:aspect-[9/15] w-full overflow-hidden bg-black flex items-center justify-center">
          <iframe
            src={`${embedUrl}?autoplay=0&controls=1`}
            title="Okiro Instagram Reel"
            className="w-full h-full border-0 pointer-events-auto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />

          {/* Dynamic 3D Glare Reflection */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.25 : 0,
              background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, rgba(255, 255, 255, 0.6) 0%, transparent 60%)`,
              mixBlendMode: 'overlay',
            }}
          />
        </div>

        {/* 3D Bottom Floating Control & Caption Card */}
        <div
          className="p-5 sm:p-6 bg-gradient-to-t from-[#171513] via-[#171513]/95 to-transparent text-[#FFFDF8] relative z-20 border-t border-white/10"
          style={{ transform: isHovered ? 'translateZ(26px)' : 'translateZ(0px)' }}
        >
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2 text-xs text-[#EDE4D2]/90 font-medium">
              <Instagram className="w-4 h-4 text-[#DD643E]" />
              <span className="tracking-wide font-mono text-[11px]">@okiro.india</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-white/90">
              <Heart className="w-3.5 h-3.5 text-[#DD643E] fill-[#DD643E]" />
              <span className="font-mono text-[11px]">{likes}</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-light text-[#EDE4D2] leading-relaxed line-clamp-2 mb-4">
            {caption}
          </p>

          <div className="flex items-center gap-2.5">
            <a
              href={reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#DD643E] hover:bg-[#C85331] text-white transition-all text-[11px] uppercase tracking-[0.18em] font-medium rounded-lg shadow-md group"
            >
              <span>Watch on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
