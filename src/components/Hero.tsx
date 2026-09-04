import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { OkiroLogo } from './OkiroLogo';

interface HeroProps {
  onExploreMenu?: () => void;
  onVisitOkiro?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onVisitOkiro }) => {
  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[680px] max-h-[1100px] flex flex-col justify-between overflow-hidden bg-[#171513] text-[#FFFDF8]"
    >
      {/* Background Image with Cinematic Slow Zoom & Warm Gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2400&q=85"
            alt="Okiro Coffee Roasters Atmospheric Cafe Space"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
          />
        </motion.div>

        {/* Cinematic Vignette & Color Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-[#171513]/40 to-[#171513]/55" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-[#171513]/80 pointer-events-none" />
        {/* Subtle Warm Amber Grain */}
        <div className="absolute inset-0 bg-grain-dark opacity-40 pointer-events-none" />
      </div>

      {/* Top spacer for header clearance */}
      <div className="h-24 lg:h-32" />

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-auto my-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Subtle Category Pill with Official Okiro Mark */}
          <div className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-1.5 bg-black/40 backdrop-blur-md border border-white/20 text-[#F9F1DA]">
            <OkiroLogo variant="mark-only" size="sm" className="h-3.5 w-auto" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-medium">
              Specialty Coffee Roastery & Kitchen
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.96] tracking-tight text-[#FFFDF8] font-normal">
            COFFEE,
            <br />
            <span className="italic font-light text-[#F9F1DA]">CRAFTED</span>
            <br />
            BEAUTIFULLY.
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#EDE4D2]/90 font-light max-w-xl leading-relaxed tracking-wide">
            Specialty coffee, thoughtful food and a space made to linger.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => (onExploreMenu ? onExploreMenu() : scrollToSection('#menu'))}
              className="group px-7 py-3.5 bg-[#171513] text-[#F9F1DA] hover:bg-[#DD643E] hover:text-white border border-white/20 hover:border-[#DD643E] transition-all duration-300 flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] font-medium shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
            >
              <span>Explore Menu</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#DD643E] group-hover:text-white transition-colors" />
            </button>

            <button
              onClick={() => (onVisitOkiro ? onVisitOkiro() : scrollToSection('#visit'))}
              className="group px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-[#FFFDF8] border border-white/30 hover:border-white/60 transition-all duration-300 flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] font-medium"
            >
              <span>Visit Okiro</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar: Location indicator & Scroll Prompt */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pb-8 lg:pb-10 flex items-end justify-between border-t border-white/10 pt-5">
        {/* Bottom-left: Location Indicator */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#DD643E] animate-pulse" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.32em] text-[#F9F1DA] font-medium">
              RAIPUR · INDIA
            </span>
            <span className="text-[9px] uppercase tracking-[0.22em] text-[#EDE4D2]/60">
              VIP Estate · Central India
            </span>
          </div>
        </div>

        {/* Bottom-right: Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[#EDE4D2]/70 hover:text-white transition-colors"
          aria-label="Scroll to explore"
        >
          <span>Scroll to explore</span>
          <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#DD643E] group-hover:text-[#DD643E] transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
