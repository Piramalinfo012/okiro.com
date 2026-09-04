import React from 'react';
import { motion } from 'motion/react';
import { COFFEE_FEATURE } from '../data/okiroData';

export const CoffeeSection: React.FC = () => {
  return (
    <section id="coffee" className="py-24 sm:py-32 lg:py-40 bg-[#171513] text-[#FFFDF8] relative overflow-hidden">
      {/* Background Subtle Grain */}
      <div className="absolute inset-0 bg-grain-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Large Atmospheric Specialty Coffee Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto overflow-hidden bg-[#2A2623] shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=85"
                alt="Specialty Coffee extraction and roasting at Okiro Coffee Roasters"
                className="w-full h-full object-cover object-center filter brightness-[0.88] transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle Warm Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/90 via-transparent to-black/20" />

              {/* Bottom Card Annotation */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#171513]/85 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#DD643E] font-medium block">
                      Roastery Batch
                    </span>
                    <span className="font-serif-luxury text-lg text-[#FFFDF8]">
                      Chikmagalur Red Honey Micro-Lot
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 bg-white/10 text-[#F9F1DA] font-mono">
                    1380 MASL
                  </span>
                </div>
              </div>
            </div>

            {/* Aesthetic Offset Hairline Box */}
            <div className="hidden sm:block absolute -top-6 -left-6 w-32 h-32 border border-[#DD643E]/30 pointer-events-none -z-10" />
          </motion.div>

          {/* Right Column: Editorial Headline & Subtle Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2"
          >
            {/* Label */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#DD643E]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#DD643E] font-medium">
                Terroir & Roasting Philosophy
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#FFFDF8] font-normal leading-[1.05] tracking-tight">
              COFFEE WITH
              <br />
              <span className="italic font-light text-[#F9F1DA]">CHARACTER.</span>
            </h2>

            {/* Accent Line */}
            <div className="w-16 h-[2px] bg-[#DD643E] my-7" />

            {/* Narrative */}
            <p className="text-[#EDE4D2]/80 text-sm sm:text-base leading-relaxed font-light mb-8">
              {COFFEE_FEATURE.description}
            </p>

            {/* Subtle Verified Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              {/* Detail 1: Origin */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#DD643E] font-semibold block">
                  ORIGIN
                </span>
                <p className="font-serif-luxury text-lg text-[#FFFDF8]">
                  {COFFEE_FEATURE.origin}
                </p>
                <p className="text-xs text-[#EDE4D2]/60 font-light">
                  {COFFEE_FEATURE.altitude}
                </p>
              </div>

              {/* Detail 2: Roast */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#DD643E] font-semibold block">
                  ROAST
                </span>
                <p className="font-serif-luxury text-lg text-[#FFFDF8]">
                  {COFFEE_FEATURE.roastLevel}
                </p>
                <p className="text-xs text-[#EDE4D2]/60 font-light">
                  Batch profile roasted to maximize florals & sweetness
                </p>
              </div>

              {/* Detail 3: Profile */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#DD643E] font-semibold block">
                  PROFILE
                </span>
                <p className="font-serif-luxury text-lg text-[#FFFDF8]">
                  {COFFEE_FEATURE.notes.join(' · ')}
                </p>
                <p className="text-xs text-[#EDE4D2]/60 font-light">
                  Natural sweetness, delicate stone fruit acidity
                </p>
              </div>

              {/* Detail 4: Brew Method */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#DD643E] font-semibold block">
                  BREW METHOD
                </span>
                <p className="font-serif-luxury text-lg text-[#FFFDF8]">
                  V60 · AeroPress · Espresso
                </p>
                <p className="text-xs text-[#EDE4D2]/60 font-light">
                  Host of Central India AeroPress Championship
                </p>
              </div>
            </div>

            {/* Cupping Invitation Quote */}
            <div className="mt-8 p-4 bg-white/5 border-l-2 border-[#DD643E] text-xs text-[#EDE4D2]/80 font-light">
              <span className="font-medium text-[#F9F1DA]">Cupping Bar: </span>
              Ask our baristas to taste single origins through our manual brew bar.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
