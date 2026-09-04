import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/okiroData';
import { ExperienceCard3D } from './ExperienceCard3D';

interface ExperienceProps {
  onOpenMenuModal?: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenMenuModal }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#171513] text-[#FFFDF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#DD643E]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#DD643E] font-medium">
                Distinctive Offerings
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[#EDE4D2]/60 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10 ml-2">
                <Sparkles className="w-3 h-3 text-[#DD643E]" />
                Interactive 3D Cards
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#FFFDF8] font-normal leading-tight">
              THE OKIRO EXPERIENCE
            </h2>
            <p className="mt-3 text-[#EDE4D2]/70 text-sm sm:text-base max-w-lg font-light">
              Five curated expressions of specialty hospitality, united by intentional craft and peaceful ambiance. Hover or tilt to experience.
            </p>
          </div>

          {/* Desktop Scroll Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#DD643E] hover:bg-[#DD643E]/10 transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#DD643E] hover:bg-[#DD643E]/10 transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track with 3D Depth Canvas */}
      <div className="w-full">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-5 sm:px-8 lg:px-12 pb-12 pt-4 snap-x snap-mandatory perspective-1200 [perspective:1200px]"
          style={{ perspective: 1200 }}
        >
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <ExperienceCard3D
              key={item.id}
              item={item}
              index={idx}
              onCardClick={onOpenMenuModal}
            />
          ))}
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="sm:hidden px-5 text-center mt-2">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#EDE4D2]/50 font-medium">
          ← Swipe to explore 3D offerings →
        </span>
      </div>
    </section>
  );
};
