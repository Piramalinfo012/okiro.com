import React from 'react';
import { motion } from 'motion/react';
import { OKIRO_INFO } from '../data/okiroData';
import { OkiroLogo } from './OkiroLogo';

export const BrandStory: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40 bg-[#F9F1DA] bg-grain text-[#171513] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Editorial Philosophy & Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#DD643E]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#DD643E] font-semibold">
                The Okiro Philosophy
              </span>
            </div>

            {/* Large Serif Headline */}
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-[#171513] font-normal">
              More than coffee.
              <br />
              <span className="italic text-[#171513]/80">A place to pause.</span>
            </h2>

            {/* Tiny Accent Line in Okiro Burnt Orange */}
            <div className="w-16 h-[2px] bg-[#DD643E] my-8" />

            {/* Supporting Text based strictly on verified brand information */}
            <div className="space-y-5 text-[#171513]/80 text-base sm:text-lg leading-relaxed font-light">
              <p>
                In Japanese, <strong className="font-medium text-[#171513]">“Okiro” (起きろ)</strong> translates to{' '}
                <em>“to awaken with purpose”</em>. In Raipur, we created Okiro Coffee Roasters as an antidote to
                hurry — an architectural sanctuary where intentional craftsmanship and unhurried hospitality meet.
              </p>
              <p className="text-[#171513]/70 text-sm sm:text-base">
                Located at VIP Estate, Khamardih Road, Okiro serves as Central India’s premier specialty coffee roastery
                and craft bakery. We source high-altitude Arabica micro-lots from Chikmagalur, Coorg, and Araku Valley,
                roasting them on-site to honor each harvest’s natural terroir.
              </p>
              <p className="text-[#171513]/70 text-sm sm:text-base">
                Paired with a thoughtful, 100% vegetarian culinary menu and an open brew bar, every cup is poured to
                remind you to breathe, converse, and linger.
              </p>
            </div>

            {/* Verified Attributes Grid */}
            <div className="mt-10 pt-8 border-t border-[#EDE4D2] grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#DD643E] font-medium">
                  Origin
                </span>
                <span className="font-serif-luxury text-lg text-[#171513] mt-1 block">
                  Western Ghats
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#DD643E] font-medium">
                  Craft Kitchen
                </span>
                <span className="font-serif-luxury text-lg text-[#171513] mt-1 block">
                  100% Vegetarian
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#DD643E] font-medium">
                  Roastery
                </span>
                <span className="font-serif-luxury text-lg text-[#171513] mt-1 block">
                  In-House Small Batch
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Large Vertical Editorial Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Editorial Picture Container with subtle burnt orange accent border effect */}
            <div className="relative aspect-[3/4] max-w-lg mx-auto overflow-hidden shadow-[0_20px_50px_rgba(23,21,19,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1400&q=85"
                alt="Artisan Barista preparing manual pour over at Okiro Coffee Roasters"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              
              {/* Floating Official Okiro Brand Badge */}
              <div className="absolute top-5 right-5 p-2 bg-[#F8F3E5]/95 backdrop-blur-md rounded-xl border border-[#EDE4D2] shadow-lg">
                <OkiroLogo variant="mark-only" size="sm" className="h-6 w-auto" />
              </div>

              {/* Bottom Image Caption Tag */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#171513]/80 via-[#171513]/40 to-transparent text-[#FFFDF8]">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#DD643E] font-medium block">
                  Manual Brew Bar
                </span>
                <span className="font-serif-luxury text-xl sm:text-2xl mt-0.5 block">
                  Precision in every single extraction.
                </span>
              </div>
            </div>

            {/* Decorative Offset Frame */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 border border-[#DD643E]/40 pointer-events-none -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
