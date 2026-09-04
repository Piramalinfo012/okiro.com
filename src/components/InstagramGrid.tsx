import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight, Heart } from 'lucide-react';
import { INSTAGRAM_POSTS, OKIRO_INFO } from '../data/okiroData';

export const InstagramGrid: React.FC = () => {
  return (
    <section id="gallery" className="py-24 sm:py-32 lg:py-36 bg-[#F9F1DA] bg-grain text-[#171513] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Instagram className="w-4 h-4 text-[#DD643E]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#DD643E] font-medium">
                Live Community & Stories
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#171513] font-normal leading-tight">
              FOLLOW THE O-KIRO JOURNEY
            </h2>
            <a
              href={OKIRO_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 font-serif-luxury italic text-xl sm:text-2xl text-[#171513]/80 hover:text-[#DD643E] transition-colors"
            >
              {OKIRO_INFO.instagramHandle}
            </a>
          </div>

          <a
            href={OKIRO_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#171513] text-[#F9F1DA] hover:bg-[#DD643E] hover:text-white transition-all text-xs uppercase tracking-[0.22em] font-medium w-fit"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 6-Image Editorial Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href={OKIRO_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`group relative overflow-hidden bg-[#EDE4D2] cursor-pointer block ${
                idx === 1 || idx === 4 ? 'aspect-[4/5]' : 'aspect-square'
              }`}
            >
              <img
                src={post.imageUrl}
                alt={`Okiro Coffee Roasters - ${post.caption}`}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                loading="lazy"
              />

              {/* Hover Overlay with Real-Feel Feed Caption */}
              <div className="absolute inset-0 bg-[#171513]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 sm:p-6 flex flex-col justify-between text-[#FFFDF8]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#DD643E] font-medium">
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#FFFDF8]">
                    <Heart className="w-3.5 h-3.5 text-[#DD643E] fill-[#DD643E]" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-light text-[#EDE4D2] line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[#DD643E] mt-3 font-medium">
                    View on Instagram <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
