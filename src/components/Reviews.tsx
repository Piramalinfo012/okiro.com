import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { REVIEWS } from '../data/okiroData';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const review = REVIEWS[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#EDE4D2]/35 text-[#171513] border-y border-[#EDE4D2] overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative">
        {/* Large Decorative Quotation Mark */}
        <div className="font-serif-luxury text-7xl sm:text-9xl text-[#DD643E]/25 leading-none select-none -mb-8 sm:-mb-12">
          “
        </div>

        {/* Testimonial Display */}
        <div className="min-h-[220px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex justify-center items-center gap-1 text-[#DD643E]">
                {[...Array(review.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#DD643E]" />
                ))}
              </div>

              {/* Large Serif Review Text */}
              <blockquote className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#171513] font-normal leading-relaxed italic max-w-3xl mx-auto">
                {review.quote}
              </blockquote>

              {/* Customer Author & Platform Below */}
              <div className="pt-4">
                <div className="font-sans text-xs uppercase tracking-[0.24em] font-semibold text-[#171513]">
                  {review.author}
                </div>
                <div className="text-[11px] text-[#171513]/60 tracking-wider mt-1">
                  {review.designation} · <span className="text-[#DD643E] font-medium">{review.platform}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators & Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={prevReview}
            className="w-10 h-10 rounded-full border border-[#171513]/20 hover:border-[#DD643E] hover:text-[#DD643E] flex items-center justify-center transition-colors active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  idx === currentIndex ? 'w-8 bg-[#DD643E]' : 'w-2 bg-[#171513]/20'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextReview}
            className="w-10 h-10 rounded-full border border-[#171513]/20 hover:border-[#DD643E] hover:text-[#DD643E] flex items-center justify-center transition-colors active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
