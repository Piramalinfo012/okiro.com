import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun, Users } from 'lucide-react';

export const SpaceSection: React.FC = () => {
  return (
    <section id="space" className="relative w-full py-32 sm:py-44 lg:py-52 overflow-hidden bg-[#171513] text-[#FFFDF8]">
      {/* Immersive Full-Width Parallax Image Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2400&q=85"
            alt="Interior Architecture of Okiro Coffee Roasters in Raipur"
            className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.05]"
          />
        </motion.div>

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-[#171513]/40 to-[#171513]/70" />
        <div className="absolute inset-0 bg-grain-dark opacity-30 pointer-events-none" />
      </div>

      {/* Centerpiece Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/20 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#DD643E]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#F9F1DA] font-medium">
            COFFEE · CONVERSATION · CULTURE
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] font-normal tracking-tight max-w-4xl"
        >
          A SPACE TO
          <br />
          <span className="italic font-light text-[#F9F1DA]">STAY A LITTLE LONGER.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-[#EDE4D2]/85 max-w-2xl font-light leading-relaxed"
        >
          Conceived as Central India’s most expansive specialty coffee house. Double-height ceilings,
          warm terracotta textures, and abundant natural light create an unhurried atmosphere for work,
          solitude, and memorable gatherings.
        </motion.p>

        {/* Architectural Pillars Pill Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl pt-8 border-t border-white/15"
        >
          <div className="flex flex-col items-center">
            <Sun className="w-5 h-5 text-[#DD643E] mb-2" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#FFFDF8] font-medium">
              Morning Sunlight
            </span>
            <span className="text-[11px] text-[#EDE4D2]/60 mt-0.5">
              Expansive windows & indoor plants
            </span>
          </div>

          <div className="flex flex-col items-center">
            <Sparkles className="w-5 h-5 text-[#DD643E] mb-2" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#FFFDF8] font-medium">
              Open Roastery Floor
            </span>
            <span className="text-[11px] text-[#EDE4D2]/60 mt-0.5">
              Live batch roasting & cupping table
            </span>
          </div>

          <div className="flex flex-col items-center">
            <Users className="w-5 h-5 text-[#DD643E] mb-2" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#FFFDF8] font-medium">
              VIP Estate Sanctuary
            </span>
            <span className="text-[11px] text-[#EDE4D2]/60 mt-0.5">
              Unhurried seating for conversations
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
