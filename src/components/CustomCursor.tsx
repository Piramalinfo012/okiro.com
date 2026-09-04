import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsFinePointer(hasFinePointer);
    if (!hasFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <>
      {/* Small center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#DD643E] pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 0.6 : 1,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 500, mass: 0.1 }}
      />

      {/* Outer subtle follower ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#DD643E]/60 pointer-events-none z-50"
        animate={{
          x: position.x - (isPointer ? 20 : 14),
          y: position.y - (isPointer ? 20 : 14),
          width: isPointer ? 40 : 28,
          height: isPointer ? 40 : 28,
          borderColor: isPointer ? '#DD643E' : 'rgba(221, 100, 62, 0.4)',
          backgroundColor: isPointer ? 'rgba(221, 100, 62, 0.08)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.2 }}
      />
    </>
  );
};
