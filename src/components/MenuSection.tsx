import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Utensils, Coffee, Snowflake, Cake, ArrowUpRight } from 'lucide-react';
import { MENU_ITEMS, OKIRO_INFO } from '../data/okiroData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onOpenFullMenu?: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenFullMenu }) => {
  const [activeCategory, setActiveCategory] = useState<'coffee' | 'signatures' | 'cold' | 'food' | 'desserts'>('coffee');

  const categories = [
    { id: 'coffee', label: 'COFFEE', icon: Coffee },
    { id: 'signatures', label: 'SIGNATURES', icon: Sparkles },
    { id: 'cold', label: 'COLD', icon: Snowflake },
    { id: 'food', label: 'FOOD', icon: Utensils },
    { id: 'desserts', label: 'DESSERTS', icon: Cake },
  ] as const;

  const currentItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 sm:py-32 lg:py-36 bg-[#F9F1DA] bg-grain text-[#171513] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#DD643E]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#DD643E] font-semibold">
              The Roastery & Kitchen
            </span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#171513] font-normal tracking-tight">
            WHAT’S BREWING
          </h2>
          <div className="w-12 h-[2px] bg-[#DD643E] mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#171513]/70 font-light">
            From carefully brewed coffee to indulgent moments.
          </p>
          <div className="mt-3 inline-block bg-[#EDE4D2]/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#171513]/80">
            100% Vegetarian Craft Kitchen · Single-Origin Roastery
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar pb-6 mb-12 border-b border-[#EDE4D2]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 sm:px-6 py-2.5 text-xs sm:text-sm uppercase tracking-[0.22em] font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'text-[#171513] font-semibold'
                    : 'text-[#171513]/50 hover:text-[#171513]'
                }`}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="menuActiveIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#DD643E]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Editorial Menu Items Layout */}
        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10"
            >
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative pb-6 border-b border-[#EDE4D2]/70 flex flex-col justify-between transition-colors hover:border-[#DD643E]/40"
                >
                  <div>
                    {/* Item Top: Name and Price */}
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#171513] group-hover:text-[#DD643E] transition-colors">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="text-[9px] uppercase tracking-[0.2em] font-medium px-2 py-0.5 bg-[#DD643E] text-white">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <span className="font-serif-luxury text-lg sm:text-xl text-[#171513] font-medium shrink-0">
                        {item.price || '₹—'}
                      </span>
                    </div>

                    {/* Poetic Description */}
                    <p className="mt-2 text-xs sm:text-sm text-[#171513]/70 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Notes / Terroir / Origin tags */}
                  {item.notes && (
                    <div className="mt-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DD643E]" />
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#171513]/60 font-medium">
                        {item.notes}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View Full Menu CTA & Seasonal Disclaimer */}
        <div className="mt-16 text-center pt-8 border-t border-[#EDE4D2] flex flex-col items-center">
          <button
            onClick={onOpenFullMenu}
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#171513] text-[#F9F1DA] hover:bg-[#DD643E] hover:text-white transition-all duration-300 text-xs uppercase tracking-[0.24em] font-medium"
          >
            <span>View Full Menu</span>
            <ArrowUpRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <p className="mt-4 text-[11px] text-[#171513]/50 tracking-wider">
            All dairy options customizable with Oat / Almond milk. 100% pure vegetarian kitchen.
          </p>
        </div>
      </div>
    </section>
  );
};
