import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OkiroLogo } from './OkiroLogo';
import { OkiroCustomWordmark } from './OkiroCustomWordmark';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        setTimeout(onComplete, 600);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F9F1DA] bg-grain"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            {/* The exact Okiro logo badge from brand reference */}
            <div className="w-24 h-24 bg-[#F8F3E5] rounded-2xl shadow-xl border border-[#EDE4D2] flex items-center justify-center p-3 mb-5">
              <OkiroLogo variant="mark-only" size="lg" />
            </div>

            <div className="flex items-center justify-center my-1">
              <OkiroCustomWordmark color="#DE623E" size="md" className="h-8 w-auto" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.34em] font-medium text-[#5A524C] mt-1.5 font-sans">
              Coffee Roasters · Raipur
            </span>

            <div className="mt-7 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#DD643E]" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#171513]/70 font-medium">
                Brewing something beautiful…
              </p>
              <span className="w-6 h-[1px] bg-[#DD643E]" />
            </div>

            {/* Subtle progress indicator line */}
            <div className="mt-4 w-32 h-[1.5px] bg-[#EDE4D2] overflow-hidden rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut', repeat: Infinity }}
                className="w-full h-full bg-[#DD643E]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
